import { instance } from "./instance";

async function authorizedFetch(
  url: string,
  init?: RequestInit
): Promise<Response> {
  let scopes: string[] = [];
  if (url?.toLowerCase().startsWith("https://graph.microsoft.com")) {
    scopes.push("User.Read");
  } else if (url?.toLowerCase().startsWith("http://localhost:5000")) {
    scopes.push("API_SCOPE");
  }

  if (scopes.length > 0) {
    let token = await instance.acquireTokenSilent({ scopes });

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
