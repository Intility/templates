using Intility.Extensions.Logging;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Linq;
using Azure.Identity;

namespace Company.WebApplication1
{
    public class Program
    {
        public static void Main(string[] args)
        {
            CreateHostBuilder(args).Build().Run();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureAppConfiguration(builder =>
                {
                    var configuration = builder.Build();
                    var endpoint = configuration["AppConfig"];

                    if (!string.IsNullOrEmpty(endpoint))
                    {
                        builder.AddAzureAppConfiguration(builder =>
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
                })
                .UseIntilityLogging((ctx,logging) =>
                {
                    logging.UseDefaultEnrichers()
                        .UseElasticsearch()
                        .UseSentry();
                })
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });
    }
}
