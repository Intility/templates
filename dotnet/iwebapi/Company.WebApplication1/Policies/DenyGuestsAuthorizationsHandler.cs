using Microsoft.AspNetCore.Authorization;
using System.Security.Claims;

namespace Company.WebApplication1.Policies;

public class DenyGuestsAuthorizationsHandler : IAuthorizationHandler, IAuthorizationRequirement
{
	private const string IdentityProvider = "http://schemas.microsoft.com/identity/claims/identityprovider";
	private const string Idp = "idp";
	private const string Iss = "iss";
	private const string Acct = "acct";
	private const string TenantMember = "0";

	public Task HandleAsync(AuthorizationHandlerContext context)
	{
		// acct is an optional claim
		// if it is present, it dictates wether the user is a guest or not
		var acct = context.User.FindFirstValue(Acct);

		if (!string.IsNullOrEmpty(acct))
		{
			if (acct == TenantMember)
			{
				context.Succeed(this);
			}

			return Task.CompletedTask;
		}

		// if acct is not present
		// we can use the iss and idp claim to determine if the user is a guest
		var iss = context.User.FindFirstValue(Iss);
		var idp = GetIdentityProvider(context.User);

		if (!string.IsNullOrEmpty(iss) && iss == idp)
		{
			context.Succeed(this);
			return Task.CompletedTask;
		}

		return Task.CompletedTask;
	}

	private static string? GetIdentityProvider(ClaimsPrincipal claimsPrincipal)
	{
		return claimsPrincipal.FindFirstValue(IdentityProvider) ?? claimsPrincipal.FindFirstValue(Idp) ?? claimsPrincipal.FindFirstValue(Iss);
	}
}