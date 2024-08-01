import { getEventData } from './event';
import { getExhibitorTabData, getExhibitorData } from './exhibitors';
import { getPageBannerData, PageType } from './page-banner';
import { getResourceData } from './resources';

const getExhibitorPageData = async (slug: any, pageSlug: any, jwt: string) => {
  let eventData = await getEventData(slug, jwt)
  let exhibitorData = await getExhibitorData(slug, pageSlug, jwt)
  let resourceData = await getResourceData(slug, jwt)
  let bannerData = await getPageBannerData(slug, PageType.Exhibitor, jwt);
  
  return {
    event: eventData,
    resource: resourceData,
    exhibitor: exhibitorData,
    banner: bannerData,
  }
};

const getExhibitorsPageData = async (slug: any, jwt: string) => {
  let eventData = await getEventData(slug, jwt)
  let resourceData = await getResourceData(slug, jwt)
  let bannerData = await getPageBannerData(slug, PageType.ExhibitorTab, jwt);

  return {
    event: eventData,
    resource: resourceData,
    exhibitors: {},
    banner: bannerData,
  }
};

export { getExhibitorsPageData, getExhibitorPageData }