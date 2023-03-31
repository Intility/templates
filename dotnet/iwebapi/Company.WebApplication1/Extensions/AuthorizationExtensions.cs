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
        // This method checks for the presence of a claim with the type "idp" in the user's context. 
        // If the claim is not found, it grants the specified requirement. This ensures that no 
        // guest users in an Azure tenant can access this resource. 

        var idp = context.User.FindFirst(c => c.Type == "http://schemas.microsoft.com/identity/claims/identityprovider");
        if (idp == null)
        {
            context.Succeed(requirement);
        }

        return Task.CompletedTask;
    }
}