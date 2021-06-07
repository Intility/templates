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
                    $"Company.WebApplication1 {description.ApiVersion.ToString()}"
                );
            }
            options.OAuthAppName("Company.WebApplication1");
            options.OAuthClientId(_config["AzureAd:ClientId"]);
            options.RoutePrefix = string.Empty;
        }
    }
}
