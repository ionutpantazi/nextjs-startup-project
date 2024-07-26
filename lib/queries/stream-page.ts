import { getEventData } from './event';
import { getResourceData } from './resources';
import { getStreamData } from './stream';

const getStreamPageData = async (slug: any, jwt: string) => {
  let eventData = await getEventData(slug, jwt)
  let streamData = await getStreamData(slug, jwt)
  let resourceData = await getResourceData(slug, jwt)
  return {
    event: eventData,
    resource: resourceData,
    exhibitors: streamData,
  }
};

export { getStreamPageData }