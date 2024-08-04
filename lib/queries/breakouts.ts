const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;
import { get, post } from 'lib/httpClient'

const getBreakoutsData = async (slug: string, pageSlug: string, jwt: string) => {
  const config = {
    headers: {
      'Authorization': `Bearer ${jwt}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }
  let { data } = await get(`${NEXT_PUBLIC_API_URL}/event/${slug}/breakout-tab/${pageSlug}`, config);
  return data
};


export { getBreakoutsData }