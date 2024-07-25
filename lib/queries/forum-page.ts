import { getDiscussionsData } from './discussions';
import { getEventData } from './event';
import { getResourceData } from './resources';

const getForumPageData = async (slug: any, jwt: string) => {
  let eventData = await getEventData(slug, jwt)
  let resourceData = await getResourceData(slug, jwt)
  let discussionData = await getDiscussionsData(slug, jwt)
  return {
    event: eventData,
    resource: resourceData,
    discussions: discussionData,
  }
};

export { getForumPageData }