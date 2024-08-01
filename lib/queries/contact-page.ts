import { getEventData } from './event';
import { getPageBannerData, PageType } from './page-banner';
import { getResourceData } from './resources';

const getContactPageData = async (slug: any, jwt: string) => {
  let eventData = await getEventData(slug, jwt)
  let resourceData = await getResourceData(slug, jwt)
  let bannerData = await getPageBannerData(slug, PageType.ContactUs, jwt);
  return {
    event: eventData,
    resource: resourceData,
    banner: bannerData,
  }
};

export { getContactPageData }