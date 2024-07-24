import { getEventData } from './event';
import { getExhibitorsData } from './exhibitors';
import { getResourceData } from './resources';

const getExhibitorPageData = async (slug: any, jwt: string) => {
  let eventData = await getEventData(slug, jwt)
  let exhibitorData = await getExhibitorsData(slug, jwt)
  let resourceData = await getResourceData(slug, jwt)
  return {
    event: eventData,
    resource: resourceData,
    exhibitors: exhibitorData,
  }
};

export { getExhibitorPageData }