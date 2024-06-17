const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;
import { get, post } from 'lib/httpClient'

const getEventData = async (slug: string) => {
  
    // const config = {
    //   headers: {
    //     'Content-Type': 'application/x-www-form-urlencoded'
    //   }
    // }
  
    // const { data } = await get(`${NEXT_PUBLIC_API_URL}/event/${slug}?fields=event_id,title,start_date,date_created,last_modified`, config);
    // console.log(data)
    // return {
    //   access_token, expires_in
    // }
  };
  
  export { getEventData }