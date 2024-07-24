import { getEventData } from './event';
import { getResourceData } from './resources';
import { getAgendaData } from './agenda';

const getAgendaPageData = async (slug: any, jwt: string) => {
  let eventData = await getEventData(slug, jwt)
  let resourceData = await getResourceData(slug, jwt)
  let agendaData = await getAgendaData(slug, jwt)
  return {
    event: eventData,
    resource: resourceData,
    agenda: agendaData,
  }
};

export { getAgendaPageData }