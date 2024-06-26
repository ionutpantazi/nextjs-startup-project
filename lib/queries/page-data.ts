const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;
import { get } from 'lib/httpClient'
import { getEventData } from './event';
import { getResourceData } from './resources';
import { getAgendaData } from './agenda';
import { getDelegatesData } from './delegates';

const getPageData = async (slug: string, jwt: string) => {
  let eventData = await getEventData(slug, jwt)
  let resourceData = await getResourceData(slug, jwt)
  let agendaData = await getAgendaData(slug, jwt)
  let delegatesData = await getDelegatesData(slug, jwt)
  return {
    event: eventData,
    resource: resourceData,
    agenda: agendaData,
    delegates: delegatesData,
  }
};

export { getPageData }