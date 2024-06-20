const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;
import { get } from 'lib/httpClient'

const getResourceData = async (slug: string, jwt: string) => {
  const config = {
    headers: {
      'Authorization': `Bearer ${jwt}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }
  const { data } = await get(`${NEXT_PUBLIC_API_URL}/resource/page-details`, config);
  return data
};

export { getResourceData }