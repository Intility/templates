using Azure.Identity;
using Company.Worker1;
using Intility.Extensions.Logging;

IHost host = Host.CreateDefaultBuilder(args)
    .ConfigureAppConfiguration(services =>
    {
        var configuration = services.Build();
        var endpoint = configuration["AppConfig"];

        if (!string.IsNullOrEmpty(endpoint))
        {
            services.AddAzureAppConfiguration(builder =>
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
    .UseIntilityLogging((ctx, logging) =>
    {
        logging.UseDefaultEnrichers()
            .UseElasticsearch()
            .UseSentry()
            .UseDynatrace();
    })
    .ConfigureServices(services =>
    {
        services.AddHostedService<Worker>();
    })
    .Build();

host.Run();