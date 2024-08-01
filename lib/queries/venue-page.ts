import { getEventData } from './event';
import { getPageBannerData, PageType } from './page-banner';
import { getResourceData } from './resources';

const getVenuePageData = async (slug: any, jwt: string) => {
  let eventData = await getEventData(slug, jwt)
  let resourceData = await getResourceData(slug, jwt)
  let bannerData = await getPageBannerData(slug, PageType.Venue, jwt);
  return {
    event: eventData,
    resource: resourceData,
    banner: bannerData,
  }
};

export { getVenuePageData }