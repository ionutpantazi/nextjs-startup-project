import { getEventData } from './event';
import { getResourceData } from './resources';
import { getAgendaData } from './agenda';

const getFaqsPageData = async (slug: any, jwt: string) => {
  let eventData = await getEventData(slug, jwt)
  let resourceData = await getResourceData(slug, jwt)
  return {
    event: eventData,
    resource: resourceData,
  }
};

export { getFaqsPageData }