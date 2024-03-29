namespace Company.Worker1;

public class Worker : BackgroundService
{
    private readonly ILogger<Worker> _logger;
    #if (cronJob)
    private readonly IHostApplicationLifetime _lifetime;

    public Worker(ILogger<Worker> logger, IHostApplicationLifetime lifetime)
    {
        _logger = logger;
        _lifetime = lifetime;
    }
    #else
    private readonly PeriodicTimer _timer = new(TimeSpan.FromMilliseconds(1000));

    public Worker(ILogger<Worker> logger)
    {
        _logger = logger;
    }
    #endif

    protected override async Task ExecuteAsync(CancellationToken stoppingToken)
    {
        #if (cronJob)
        _logger.LogInformation("Worker running at: {time}", DateTimeOffset.Now);

        await Task.Delay(1000, stoppingToken);

        _logger.LogInformation("Worker stopping at: {time}", DateTimeOffset.Now);
        _lifetime.StopApplication();
        #else
        while (await _timer.WaitForNextTickAsync(stoppingToken) && !stoppingToken.IsCancellationRequested)
        {
            _logger.LogInformation("Worker running at: {time}", DateTimeOffset.Now);
        }
        #endif
    }
}