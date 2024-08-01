import { getEventData } from './event';
import { getResourceData } from './resources';
import { getContentTabData } from './content-tabs';
import { getPageBannerData, PageType } from './page-banner';

const getContentTabPageData = async (slug: any, pageSlug: any, jwt: string) => {
  let eventData = await getEventData(slug, jwt)
  let contentTabData = await getContentTabData(slug, pageSlug, jwt)
  let resourceData = await getResourceData(slug, jwt)
  let bannerData = await getPageBannerData(slug, PageType.Delegates, jwt)
  return {
    event: eventData,
    resource: resourceData,
    content: contentTabData,
    banner: bannerData,
  }
};

export { getContentTabPageData }