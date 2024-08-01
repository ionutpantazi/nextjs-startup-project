import { getDiscussionData } from './discussions';
import { getEventData } from './event';
import { getPageBannerData, PageType } from './page-banner';
import { getResourceData } from './resources';

const getDiscussionPageData = async (slug: any, pageSlug: any, jwt: string) => {

  let eventData = await getEventData(slug, jwt)
  let resourceData = await getResourceData(slug, jwt)
  let discussionData = await getDiscussionData(slug, pageSlug, jwt)
  let bannerData = await getPageBannerData(slug, PageType.Forum, jwt);
  return {
    event: eventData,
    resource: resourceData,
    discussion: discussionData,
    banner: bannerData,
  }
};

export { getDiscussionPageData }