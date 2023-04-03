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
    private readonly string idpClaimType = "http://schemas.microsoft.com/identity/claims/identityprovider";
    private readonly string issClaimType = "iss";

    protected override Task HandleRequirementAsync(
        AuthorizationHandlerContext context, NonGuestsRequirement requirement)
    {
        var iss = context.User.FindFirstValue(issClaimType);
        var idp = context.User.FindFirstValue(idpClaimType) ?? iss;

        if (idp == iss)
        {
            context.Succeed(requirement);
        }

        return Task.CompletedTask;
    }
}