import { getEventData } from './event';
import { getResourceData } from './resources';
import { getContentTabData } from './content-tabs';

const getContentTabPageData = async (slug: any, pageSlug: any, jwt: string) => {
  let eventData = await getEventData(slug, jwt)
  let contentTabData = await getContentTabData(slug, pageSlug, jwt)
  let resourceData = await getResourceData(slug, jwt)
  return {
    event: eventData,
    resource: resourceData,
    content: contentTabData,
  }
};

export { getContentTabPageData }