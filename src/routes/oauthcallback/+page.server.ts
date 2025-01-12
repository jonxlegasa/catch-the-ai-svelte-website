import { redirect } from '@sveltejs/kit';
import { RequestEvent } from '@sveltejs/kit';
import { OAuthService } from '$lib/utils/custom-api-calls/oauthservice';
import { error } from '@sveltejs/kit';

export async function load(event: RequestEvent): Promise<any> {
  const { cookies, url } = event;
  const paramCode: string | null = url.searchParams.get('code');
  const paramState: string | null = url.searchParams.get('state');
  const authToken: string | undefined = cookies.get("auth");

  if (!authToken) {
    console.log("No auth token, processing OAuth callback...");

    const { accessToken, tokenType, statusCode } = await OAuthService.googleCallback(paramCode, paramState);

    if (statusCode === 422) {
      throw error(422, "Validation Error: the server could not process the request due to client error.");
    } else if (statusCode === 503) {
      throw error(400, "Bad Request: the server could not process the request due to client error.");
    } else if (statusCode >= 500) {
      throw error(500, "There seems to be an issue with the authentication service.");
    }

    if (!accessToken) {
      console.error("Failed to retrieve access token.");
      throw error(500, "Failed to authenticate.");
    }

    cookies.set('auth', accessToken, {
      path: '/',
      httpOnly: true,
      sameSite: 'lax',
      secure: true,
      maxAge: 60 * 60 * 24 * 7
    });
    console.log("Auth cookie set, redirecting to /integrations");
    throw redirect(302, "/integrations");

  } else if (authToken) {
    console.log("Auth token found:", authToken);
    throw redirect(302, "/integrations");
  }
}
