import { instance } from "./instance";

/**
 * A wrapper for the global fetch function, which acquires and injects a token if the resource requires it.
 *
 * @param url The url of the resource you want to fetch.
 * @param init An object containing any custom settings that you want to apply to the request.
 * @returns A Promise that resolves to a Response object.
 * @see https://developer.mozilla.org/en-US/docs/Web/API/fetch
 * @see https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/acquire-token.md
 */
async function authorizedFetch(
  url: string,
  init?: RequestInit,
): Promise<Response> {
  const scopes: string[] = [];
  if (url?.toLowerCase().startsWith("https://graph.microsoft.com")) {
    scopes.push("User.Read");
  }

  if (scopes.length > 0) {
    const token = await instance.acquireTokenSilent({ scopes });

    init = {
      ...init,
      headers: {
        ...init?.headers,
        Authorization: "Bearer " + token.accessToken,
      },
    };
  }

  return await fetch(url, init);
}

export { authorizedFetch };
