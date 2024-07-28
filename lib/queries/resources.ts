const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;
import { get } from 'lib/httpClient'
import { convertTempData } from 'utils/helpers'

const getResourceData = async (slug: any, jwt: string) => {
  const config = {
    headers: {
      'Authorization': `Bearer ${jwt}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }
  let { data } = await get(`${NEXT_PUBLIC_API_URL}/resource/${slug}/page-details`, config);
  data = convertTempData(null, data, null)
  return data
};

export { getResourceData }