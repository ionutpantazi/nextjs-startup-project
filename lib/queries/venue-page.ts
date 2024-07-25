import { getEventData } from './event';
import { getResourceData } from './resources';

const getVenuePageData = async (slug: any, jwt: string) => {
  let eventData = await getEventData(slug, jwt)
  let resourceData = await getResourceData(slug, jwt)
  return {
    event: eventData,
    resource: resourceData,
  }
};

export { getVenuePageData }