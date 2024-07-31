import { getEventData } from './event';
import { getExhibitorTabData } from './exhibitors';
import { getResourceData } from './resources';

const getExhibitorsPageData = async (slug: any, pageSlug: any, jwt: string) => {
  let eventData = await getEventData(slug, jwt)
  let exhibitorsData = await getExhibitorTabData(slug, pageSlug, jwt)
  let resourceData = await getResourceData(slug, jwt)
  return {
    event: eventData,
    resource: resourceData,
    exhibitors: exhibitorsData,
  }
};

export { getExhibitorsPageData }