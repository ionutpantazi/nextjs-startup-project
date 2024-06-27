const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;
import { get } from 'lib/httpClient'

const getDelegatesData = async (slug: string, jwt: string) => {
  const config = {
    headers: {
      'Authorization': `Bearer ${jwt}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }
  const { data } = await get(`${NEXT_PUBLIC_API_URL}/event/${slug}/attendees/list?last_modified_gt=2023-05-01&last_modified_lt=2023-06-30&page_number=1&page_size=15&fields=attendee_id,parent_id,name,registration_date,title,first_name,last_name,profile_pic,company,delegate_type,force_delegate_type,attendance_status,date_created,last_modified,check_in_time,previous_attendance_status,is_unpaid,category,valid,registration,agenda,accommodation,email`, config);
  return data
};

export { getDelegatesData }