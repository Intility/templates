using Microsoft.AspNetCore.Mvc;

namespace Company.WebApplication1.Controllers
{
    [ApiController]
    [Route("api/health")]
    public class HealthController : ControllerBase
    {
        [HttpGet]
        public IActionResult Get() => Ok();
    }
}
