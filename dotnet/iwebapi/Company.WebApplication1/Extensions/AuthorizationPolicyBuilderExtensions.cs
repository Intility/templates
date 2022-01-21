using Microsoft.AspNetCore.Authorization;
using Microsoft.Identity.Web;

namespace Company.WebApplication1.Extensions;

public static class AuthorizationPolicyBuilderExtensions
{
    public static AuthorizationPolicyBuilder RequireNonGuests(this AuthorizationPolicyBuilder builder, IConfiguration configuration, string configurationSectionName = "AzureAd")
    {
        var tenantId = configuration.GetSection(configurationSectionName)["TenantId"];

        if (tenantId == default)
        {
            throw new NullReferenceException($"Could not find the key TenantId in the specified configuration section: {configurationSectionName}");
        }

        // if the tenant id is common or organizations
        // the application is multi-tenant, and we don't do anything
        if (tenantId == "common" || tenantId == "organizations")
        {
            return builder;
        }

        return builder.RequireClaim(ClaimConstants.TenantId, tenantId);
    }
}
