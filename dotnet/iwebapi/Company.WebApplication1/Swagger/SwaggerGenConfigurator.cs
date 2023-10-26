using Asp.Versioning.ApiExplorer;
using Microsoft.Extensions.Options;
using Microsoft.OpenApi.Models;
using Swashbuckle.AspNetCore.SwaggerGen;
using System.Reflection;

namespace Company.WebApplication1.Swagger;

public class SwaggerGenConfigurator : IConfigureOptions<SwaggerGenOptions>
{
    private readonly IApiVersionDescriptionProvider _apiVersionProvider;
    private readonly IConfiguration _config;

    public SwaggerGenConfigurator(IApiVersionDescriptionProvider apiVersionDescriptionProvider, IConfiguration config)
    {
        _apiVersionProvider = apiVersionDescriptionProvider;
        _config = config;
    }

    public void Configure(SwaggerGenOptions c)
    {
        foreach (var description in _apiVersionProvider.ApiVersionDescriptions) 
        {
            c.SwaggerDoc(description.GroupName, new OpenApiInfo
            {
                Title = "Company.WebApplication1",
                Version = description.ApiVersion.ToString()
            });
        }

        c.AddSecurityDefinition("Azure AD", new OpenApiSecurityScheme
        {
            Type = SecuritySchemeType.OAuth2,
            Flows = new OpenApiOAuthFlows
            {
                AuthorizationCode = new OpenApiOAuthFlow
                {
                    AuthorizationUrl = new Uri("https://login.microsoftonline.com/organizations/oauth2/v2.0/authorize"),
                    TokenUrl = new Uri("https://login.microsoftonline.com/organizations/oauth2/v2.0/token"),
                    Scopes = new Dictionary<string, string>
                    {
                        { $"api://{_config["AzureAd:ClientId"]}/api-scope", "Access Company.WebApplication1" }
                    }
                }
            },
            Description = "`Leave client_secret blank`",
        });

        c.AddSecurityRequirement(new OpenApiSecurityRequirement
        {
            {
                new OpenApiSecurityScheme
                {
                    Reference = new OpenApiReference { Type = ReferenceType.SecurityScheme, Id = "Azure AD" }
                },
                new[] { $"api://{_config["AzureAd:ClientId"]}/api-scope" }
            }
        });

        // Set the comments path for the Swagger JSON and UI.
        var xmlFile = $"{Assembly.GetExecutingAssembly().GetName().Name}.xml";
        var xmlPath = Path.Combine(AppContext.BaseDirectory, xmlFile);
        c.IncludeXmlComments(xmlPath);
    }
}
