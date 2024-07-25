import { getEventData } from './event';
import { getResourceData } from './resources';
import { getDelegatesData } from './delegates';

const getDelegatesPageData = async (slug: any, jwt: string) => {
  let eventData = await getEventData(slug, jwt)
  let resourceData = await getResourceData(slug, jwt)
  let delegatesData = await getDelegatesData(slug, jwt)
  return {
    event: eventData,
    resource: resourceData,
    delegates: delegatesData,
  }
};

export { getDelegatesPageData }