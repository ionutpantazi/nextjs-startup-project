const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;
import { get } from 'lib/httpClient'

const getSpeakersData = async (slug: string, jwt: string) => {
  const config = {
    headers: {
      'Authorization': `Bearer ${jwt}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }
  const { data } = await get(`${NEXT_PUBLIC_API_URL}/event/${slug}/speakers?fields=speaker_id,first_name,surname,company,position,profile_pic,bio,twitter,linked_in,workshops`, config);
  return data
};

export { getSpeakersData }