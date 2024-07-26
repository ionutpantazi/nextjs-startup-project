import { getEventData } from './event';
import { getResourceData } from './resources';
import { getDownloadsData } from './downloads';

const getDownloadsPageData = async (slug: any, jwt: string) => {
  let eventData = await getEventData(slug, jwt)
  let downloadsData = await getDownloadsData(slug, jwt)
  let resourceData = await getResourceData(slug, jwt)
  return {
    event: eventData,
    resource: resourceData,
    downloads: downloadsData,
  }
};

export { getDownloadsPageData }