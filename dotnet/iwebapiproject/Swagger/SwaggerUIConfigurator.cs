using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Mvc.ApiExplorer;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Options;
using Swashbuckle.AspNetCore.SwaggerUI;

namespace Company.WebApplication1.Swagger
{
    public class SwaggerUIConfigurator : IConfigureOptions<SwaggerUIOptions>
    {
        private readonly IApiVersionDescriptionProvider _apiVersionProvider;
        private readonly IConfiguration _config;

        public SwaggerUIConfigurator(IApiVersionDescriptionProvider apiVersionProvider, IConfiguration config)
        {
            _apiVersionProvider = apiVersionProvider;
            _config = config;
        }

        public void Configure(SwaggerUIOptions options)
        {
            foreach (var description in _apiVersionProvider.ApiVersionDescriptions)
            {
                options.SwaggerEndpoint(
                    $"/swagger/{description.GroupName}/swagger.json",
                    $"Company.WebApplication1 {description.ApiVersion}"
                );
            }
            options.OAuthAppName(_config["Swagger:AppName"]);
            options.OAuthClientId(_config["Swagger:ClientId"]);
            options.OAuthScopes($"api://{_config["AzureAd:ClientId"]}/api-scope");
            options.OAuthUsePkce();
            options.RoutePrefix = string.Empty;
        }
    }
}
