import { getEventData } from './event';
import { getExhibitorsData } from './exhibitors';
import { getResourceData } from './resources';

const getExhibitorsPageData = async (slug: any, jwt: string) => {
  let eventData = await getEventData(slug, jwt)
  let exhibitorsData = await getExhibitorsData(slug, jwt)
  let resourceData = await getResourceData(slug, jwt)
  return {
    event: eventData,
    resource: resourceData,
    exhibitors: exhibitorsData,
  }
};

export { getExhibitorsPageData }