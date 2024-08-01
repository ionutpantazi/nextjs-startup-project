import { getEventData } from './event';
import { getFaqsData } from './faqs';
import { getPageBannerData, PageType } from './page-banner';
import { getResourceData } from './resources';

const getFaqsPageData = async (slug: any, jwt: string) => {
  let eventData = await getEventData(slug, jwt)
  let resourceData = await getResourceData(slug, jwt)
  let faqsData = await getFaqsData(slug, jwt);
  let bannerData = await getPageBannerData(slug, PageType.FAQs, jwt);
  return {
    event: eventData,
    resource: resourceData,
    faqs: faqsData,
    banner: bannerData
  }
};

export { getFaqsPageData }