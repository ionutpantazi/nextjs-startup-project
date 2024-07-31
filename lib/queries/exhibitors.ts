const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;
import { get } from 'lib/httpClient'

const getExhibitorTabData = async (slug: string, pageSlug: string, jwt: string) => {
  const config = {
    headers: {
      'Authorization': `Bearer ${jwt}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }
  const { data } = await get(`${NEXT_PUBLIC_API_URL}/event/${slug}/exhibitor-tab/${pageSlug}`, config);
  return data
};

const getExhibitorData = async (slug: string, pageSlug: string, jwt: string) => {
  const config = {
    headers: {
      'Authorization': `Bearer ${jwt}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }
  const { data } = await get(`${NEXT_PUBLIC_API_URL}/event/${slug}/exhibitor/${pageSlug}`, config);
  return data
};

export { getExhibitorTabData, getExhibitorData }