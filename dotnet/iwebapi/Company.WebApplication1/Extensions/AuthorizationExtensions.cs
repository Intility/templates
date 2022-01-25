using Microsoft.AspNetCore.Authorization;
using Microsoft.Identity.Web;

namespace Company.WebApplication1.Extensions;

public static class AuthorizationExtensions
{
    public static AuthorizationPolicyBuilder RequireNonGuests(this AuthorizationPolicyBuilder builder)
        => builder.AddRequirements(new NonGuestsRequirement());

    public static IServiceCollection AddNonGuestsHandler(this IServiceCollection services)
        => services.AddSingleton<IAuthorizationHandler, NonGuestsHandler>();
}

public class NonGuestsRequirement : IAuthorizationRequirement { }

public class NonGuestsHandler : AuthorizationHandler<NonGuestsRequirement>
{
    protected override Task HandleRequirementAsync(
        AuthorizationHandlerContext context, NonGuestsRequirement requirement)
    {
        var issuer = context.User.FindFirst(c => c.Type == "iss");
        var tenantId = context.User.FindFirst(c => c.Type == ClaimConstants.TenantId);

        if (issuer != null && tenantId != null && issuer.Value.Contains(tenantId.Value))
        {
            context.Succeed(requirement);
        }

        return Task.CompletedTask;
    }
}