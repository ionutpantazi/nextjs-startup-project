import { getDiscussionsData } from './discussions';
import { getEventData } from './event';
import { getPageBannerData, PageType } from './page-banner';
import { getResourceData } from './resources';

const getForumPageData = async (slug: any, jwt: string) => {
  let eventData = await getEventData(slug, jwt)
  let resourceData = await getResourceData(slug, jwt)
  let discussionData = await getDiscussionsData(slug, jwt)
  let bannerData = await getPageBannerData(slug, PageType.Forum, jwt)
  return {
    event: eventData,
    resource: resourceData,
    discussions: discussionData,
    banner: bannerData,
  }
};

export { getForumPageData }