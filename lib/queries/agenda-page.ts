import { getEventData } from './event';
import { getResourceData } from './resources';
import { getAgendaData } from './agenda';
import { getPageBannerData, PageType } from './page-banner';

const getAgendaPageData = async (slug: any, jwt: string) => {
  let eventData = await getEventData(slug, jwt)
  let resourceData = await getResourceData(slug, jwt)
  let agendaData = await getAgendaData(slug, jwt)
  let bannerData = await getPageBannerData(slug, PageType.Agenda, jwt)
  return {
    event: eventData,
    resource: resourceData,
    agenda: agendaData,
    banner: bannerData
  }
};

export { getAgendaPageData }