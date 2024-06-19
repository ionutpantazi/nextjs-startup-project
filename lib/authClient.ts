const NEXT_PUBLIC_AUTH_URL = process.env.NEXT_PUBLIC_AUTH_URL;
const NEXT_PUBLIC_CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID;
const NEXT_PUBLIC_CLIENT_SECRET = process.env.NEXT_PUBLIC_CLIENT_SECRET;
const NEXT_CLIENT_ID = process.env.NEXT_CLIENT_ID;
const NEXT_CLIENT_SECRET = process.env.NEXT_CLIENT_SECRET;
import { post, fetchPost } from 'lib/httpClient'

const credentialsGrant = async () => {
  const params = new URLSearchParams()
  params.append('grant_type', 'client_credentials')
  params.append('scope', 'events.read delegates.read delegates.write')
  params.append('client_id', NEXT_PUBLIC_CLIENT_ID ?? '')
  params.append('client_secret', NEXT_PUBLIC_CLIENT_SECRET ?? '')

  var details = {
    'grant_type': 'client_credentials',
    'scope': 'pwa.public',
    'client_id': NEXT_PUBLIC_CLIENT_ID ?? '',
    'client_secret': NEXT_PUBLIC_CLIENT_SECRET ?? ''
  };

  const formBody = new URLSearchParams(details).toString();

  const config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }

  const data = await fetchPost(`${NEXT_PUBLIC_AUTH_URL}/connect/token`, formBody, config);

  return data
};

const passwordGrant = async (email: string, password: string, eventID: string) => {
  const params = new URLSearchParams()
  params.append('grant_type', 'password')
  params.append('scope', 'openid profile email role pwa.write pwa.read')
  params.append('client_id', NEXT_CLIENT_ID ?? '')
  params.append('client_secret', NEXT_CLIENT_SECRET ?? '')
  params.append('username', email ?? '')
  params.append('password', password ?? '')
  params.append('event_id', eventID ?? '')

  const config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }

  const { data, err } = await post(`${NEXT_PUBLIC_AUTH_URL}/connect/token`, params, config);
  return {
    data, err
  }
};

export { credentialsGrant, passwordGrant }