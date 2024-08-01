import { getEventData } from './event';
import { getResourceData } from './resources';
import { getDelegatesData } from './delegates';
import { getPageBannerData, PageType } from './page-banner';

const getDelegatesPageData = async (slug: any, jwt: string) => {
  let eventData = await getEventData(slug, jwt)
  let resourceData = await getResourceData(slug, jwt)
  let delegatesData = await getDelegatesData(slug, jwt)
  let bannerData = await getPageBannerData(slug, PageType.Delegates, jwt);
  return {
    event: eventData,
    resource: resourceData,
    delegates: delegatesData,
    banner: bannerData,
  }
};

export { getDelegatesPageData }