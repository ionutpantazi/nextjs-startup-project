const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;
import { get } from 'lib/httpClient'

const getAgendaData = async (slug: string, jwt: string) => {
  const config = {
    headers: {
      'Authorization': `Bearer ${jwt}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }
  const { data } = await get(`${NEXT_PUBLIC_API_URL}/event/${slug}/agendaitems?fields=agenda_item_id,event_id,title,start_date,end_date,short_desc,long_desc,room,badge,bookable,speakers,is_attending`, config);
  return data
};

export { getAgendaData }