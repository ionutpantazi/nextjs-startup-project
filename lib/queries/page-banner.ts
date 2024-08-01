const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;
import { get } from 'lib/httpClient'

export enum PageType {
    Agenda = 2,
    ContentTab = 3,
    ContactUs = 4,
    Delegates = 5,
    Exhibitor = 7,
    ExhibitorTab = 8,
    FAQs = 9,
    Forum = 10,
    Home = 11,
    Venue = 15,
    BreakoutTab = 16,
}

const getPageBannerData = async (slug: any, pageType: PageType, jwt: string) => {
  const config = {
    headers: {
      'Authorization': `Bearer ${jwt}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }
  let { data } = await get(`${NEXT_PUBLIC_API_URL}/resource/${slug}/banner/${pageType}`, config);
  return data
};

export { getPageBannerData }