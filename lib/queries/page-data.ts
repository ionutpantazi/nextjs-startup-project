const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;
import { get } from 'lib/httpClient'
import { getEventData } from './event';
import { getResourceData } from './resources';
import { getAgendaData } from './agenda';
import { getDelegatesData } from './delegates';
import { getSpeakersData } from './speakers';
import { getDiscussionsData } from './discussions'
import { getFaqsData } from './faqs';

const getPageData = async (slug: any, jwt: string) => {
  let eventData = await getEventData(slug, jwt)
  let resourceData = await getResourceData(slug, jwt)
  let agendaData = await getAgendaData(slug, jwt)
  let delegatesData = await getDelegatesData(slug, jwt)
  let speakersData = await getSpeakersData(slug, jwt)
  let discussionsData = await getDiscussionsData(slug, jwt)
  let faqData = await getFaqsData(slug, jwt)
  return {
    event: eventData,
    resource: resourceData,
    agenda: agendaData,
    delegates: delegatesData,
    speakers: speakersData,
    discussions: discussionsData,
    faqs: faqData,
  }
};

export { getPageData }