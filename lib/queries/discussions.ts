const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;
import { get } from 'lib/httpClient'

const getDiscussionsData = async (slug: string, jwt: string) => {
  const config = {
    headers: {
      'Authorization': `Bearer ${jwt}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }
  const { data } = await get(`${NEXT_PUBLIC_API_URL}/event/${slug}/discussions?fields=discussion_id,type,category,title,text,author_name,responses,date_posted,impressions,profile_pic`, config);
  return data
};

const getDiscussionData = async (slug: string, pageSlug: string, jwt: string) => {
  const config = {
    headers: {
      'Authorization': `Bearer ${jwt}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }
  const { data } = await get(`${NEXT_PUBLIC_API_URL}/event/${slug}/discussions/${pageSlug}?fields=discussion_id,type,category,title,text,author_name,responses,date_posted,impressions,profile_pic`, config);
  return data
};

export { getDiscussionsData, getDiscussionData }