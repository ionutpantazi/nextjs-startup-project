const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;
import { get } from 'lib/httpClient'

const getDelegatesData = async (slug: string, jwt: string) => {
  const config = {
    headers: {
      'Authorization': `Bearer ${jwt}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }
  const { data } = await get(`${NEXT_PUBLIC_API_URL}/event/${slug}/attendees/list?fields=attendee_id,profile_pic,parent_id,name,discussion_count,registration_date,title,first_name,last_name,company,delegate_type,force_delegate_type,attendance_status,date_created,last_modified,check_in_time,previous_attendance_status,is_unpaid,category,valid,registration,agenda,accommodation,email,bio`, config);
  return data
};

export { getDelegatesData }