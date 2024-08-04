import { getBreakoutsData } from './breakouts';
import { getEventData } from './event';
import { getResourceData } from './resources';

const getBreakoutsPageData = async (slug: any, pageSlug: any, jwt: string) => {
  let eventData = await getEventData(slug, jwt)
  let resourceData = await getResourceData(slug, jwt)
  let breakoutsData = await getBreakoutsData(slug, pageSlug, jwt);
  return {
    event: eventData,
    resource: resourceData,
    breakouts: breakoutsData,
  }
};

export { getBreakoutsPageData }