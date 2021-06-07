using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Serilog;
using Serilog.Sinks.Elasticsearch;
using Serilog.Sinks.SystemConsole.Themes;
using System;
using System.Linq;

namespace Company.WebApplication1
{
    public class Program
    {
        public static IConfiguration Configuration { get; } = new ConfigurationBuilder()
            .AddEnvironmentVariables(prefix: "ASPNETCORE_")
            .AddEnvironmentVariables(prefix: "DOTNET_")
            .SetBasePath(AppContext.BaseDirectory)
            .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
            .AddJsonFile($"appsettings.{Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT") ?? "Production"}.json", optional: true)
            .AddUserSecrets(typeof(Program).Assembly, optional: true)
            .AddEnvironmentVariables()
            .Build();

        public static int Main(string[] args)
        {
            ConfigureLogging();

            try
            {
                Log.Logger.Information("Starting application...");
                CreateHostBuilder(args).Build().Run();
                Log.Logger.Information("Application terminated successfully");
                return 0;
            }
            catch (Exception ex)
            {
                Log.Logger.Fatal(ex, "Application exited unexpectedly");
                return 1;
            }
            finally
            {
                Log.CloseAndFlush();
            }
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .UseSerilog()
                .ConfigureAppConfiguration(builder =>
                {
                    builder.Sources.Clear();
                    builder.AddConfiguration(Configuration);
                })
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseSentry();
                    webBuilder.UseStartup<Startup>();
                });

        private static void ConfigureLogging()
        {
            var elasticConfig = Configuration.GetSection("ElasticSearch");
            var elasticEndpoints = elasticConfig["Endpoints"];
            var username = elasticConfig["Username"];
            var password = elasticConfig["Password"];
            var indexFormat = elasticConfig["IndexFormat"];
            var versionString = elasticConfig["Version"];

            var logConfig = new LoggerConfiguration()
                    .ReadFrom.Configuration(Configuration, sectionName: "Logging")
                    .Enrich.FromLogContext()
                    .Enrich.WithEnvironmentUserName()
                    .Enrich.WithMachineName()
                    .Enrich.WithAssemblyName()
                    .Enrich.WithMemoryUsage()
                    .WriteTo.Console(theme: AnsiConsoleTheme.Code);

            if (!string.IsNullOrWhiteSpace(Configuration["Logging:OutputFile"]))
            {
                logConfig.WriteTo.File(Configuration["Logging:OutputFile"], rollingInterval: RollingInterval.Day);
            }

            if (!string.IsNullOrWhiteSpace(elasticEndpoints))
            {
                var endpoints = elasticEndpoints.Split(',').Select(endpoint => new Uri(endpoint));

                var versionFormat = string.IsNullOrWhiteSpace(versionString)
                    ? AutoRegisterTemplateVersion.ESv7
                    : Enum.Parse<AutoRegisterTemplateVersion>(versionString);

                var options = new ElasticsearchSinkOptions(endpoints)
                {
                    TypeName = "logevent",
                    IndexFormat = indexFormat,
                    NumberOfShards = 1,
                    NumberOfReplicas = 1,
                    AutoRegisterTemplate = true,
                    AutoRegisterTemplateVersion = versionFormat
                };

                if (!string.IsNullOrWhiteSpace(username) && !string.IsNullOrWhiteSpace(password))
                {
                    options.ModifyConnectionSettings = c => c.BasicAuthentication(username, password);
                }

                logConfig.WriteTo.Elasticsearch(options);

            }

            if (!string.IsNullOrWhiteSpace(Configuration["Sentry:Dsn"]))
            {
                logConfig.WriteTo.Sentry(o => o.Dsn = Configuration["Sentry:Dsn"]);
            }

            Log.Logger = logConfig.CreateLogger();
        }
    }
}
