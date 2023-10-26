using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.Identity.Web;
using Company.WebApplication1.Swagger;
using Microsoft.Extensions.Options;
using Serilog;
using Swashbuckle.AspNetCore.SwaggerGen;
using Swashbuckle.AspNetCore.SwaggerUI;
using Intility.Extensions.Logging;
using Azure.Identity;
using Company.WebApplication1.Authorization;

var builder = WebApplication.CreateBuilder(args);

var endpoint = builder.Configuration["AppConfig"];
if (!string.IsNullOrEmpty(endpoint))
{
    builder.Configuration.AddAzureAppConfiguration(builder =>
    {
        var creds = new DefaultAzureCredential(includeInteractiveCredentials: false);
        // connect to external configuration
        builder.Connect(new Uri(endpoint), creds)
            // enable keyvault linked items
            .ConfigureKeyVault(options => options.SetCredential(creds))
            // enable automatic settings refresh
            .ConfigureRefresh(options => options
                .Register("*", refreshAll: true)
                .SetCacheExpiration(TimeSpan.FromSeconds(5)));
    }, optional: true);
}

builder.Host.UseIntilityLogging((ctx, logging) =>
{
    logging.UseDefaultEnrichers()
        .UseElasticsearch()
        .UseSentry();
});

// Add services to the container.
builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddMicrosoftIdentityWebApi(builder.Configuration.GetSection("AzureAd"));

builder.Services.AddAuthorization(options =>
{
    options.DefaultPolicy = new AuthorizationPolicyBuilder()
        .RequireAuthenticatedUser()
        .DenyGuests()
        .Build();
});

builder.Services.AddCors(options =>
    options.AddDefaultPolicy(builder =>
        builder.WithOrigins("http://localhost:3000")
            .AllowAnyMethod()
            .AllowAnyHeader()
        )
);

builder.Services.AddHealthChecks();

builder.Services.AddControllers();

builder.Services.AddApiVersioning(options =>
{
    options.ReportApiVersions = true;
    options.AssumeDefaultVersionWhenUnspecified = true;
}).AddApiExplorer(options =>
{
    // add the versioned api explorer, which also adds IApiVersionDescriptionProvider service
    // note: the specified format code will format the version as "'v'major[.minor][-status]"
    options.GroupNameFormat = "'v'VVV";

    // note: this option is only necessary when versioning by url segment. the SubstitutionFormat
    // can also be used to control the format of the API version in route templates
    options.SubstituteApiVersionInUrl = true;
});

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen()
    // configre SwaggerGen and SwaggerUI with typed configurators to properly
    // resolve their IApiVersionDescriptionProvider dependency through the DI system.
    .AddTransient<IConfigureOptions<SwaggerGenOptions>, SwaggerGenConfigurator>()
    .AddTransient<IConfigureOptions<SwaggerUIOptions>, SwaggerUIConfigurator>();


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseSerilogRequestLogging();
app.UseCors();

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers().RequireAuthorization();
app.MapHealthChecks("/health");

app.Run();
