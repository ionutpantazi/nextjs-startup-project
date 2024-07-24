import { getEventData } from './event';
import { getResourceData } from './resources';
import { getSpeakersData } from './speakers';

const getSpeakersPageData = async (slug: any, jwt: string) => {
  let eventData = await getEventData(slug, jwt)
  let resourceData = await getResourceData(slug, jwt)
  let speakersData = await getSpeakersData(slug, jwt)
  return {
    event: eventData,
    resource: resourceData,
    speakers: speakersData,
  }
};

export { getSpeakersPageData }