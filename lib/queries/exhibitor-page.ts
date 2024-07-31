import { getEventData } from './event';
import { getExhibitorData } from './exhibitors';
import { getResourceData } from './resources';

const getExhibitorPageData = async (slug: any, pageSlug: any, jwt: string) => {
  let eventData = await getEventData(slug, jwt)
  let exhibitorData = await getExhibitorData(slug, pageSlug, jwt)
  let resourceData = await getResourceData(slug, jwt)
  return {
    event: eventData,
    resource: resourceData,
    exhibitor: exhibitorData,
  }
};

export { getExhibitorPageData }