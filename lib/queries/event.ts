const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;
import { get } from 'lib/httpClient'
import { convertTempData } from 'utils/helpers'

const getEventData = async (slug: string, jwt: string) => {
  const config = {
    headers: {
      'Authorization': `Bearer ${jwt}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }
  let { data } = await get(`${NEXT_PUBLIC_API_URL}/event/${slug}/page`, config);
  data = convertTempData(data, null, null)
  return data
};

export { getEventData }