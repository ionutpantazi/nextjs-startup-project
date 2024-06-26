const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;
import { get } from 'lib/httpClient'

const getEventData = async (slug: string, jwt: string) => {
  const config = {
    headers: {
      'Authorization': `Bearer ${jwt}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }
  const { data } = await get(`${NEXT_PUBLIC_API_URL}/event/${slug}?fields=event_id,title,home_banner,logo,sub_title,start_date,short_desc,long_desc,contact_form_1,contact_form_2,booking_conditions,payment_methods,date_created,last_modified,faqs`, config);
  return data
};

export { getEventData }