const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;
import { Title } from '@/components/Bootstrap/Common';
import { SectionsSectionExhibitorsCarousel } from '@/components/StrapiComponents/ComponentExhibitorsCarousel';
import { get } from 'lib/httpClient'

const getExhibitorsData = async (slug: string, jwt: string) => {
  const config = {
    headers: {
      'Authorization': `Bearer ${jwt}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }
  const data : SectionsSectionExhibitorsCarousel = {
    id: '1',
    Title: 'Exhibitors',
    Exhibitors: {
      data: [
        {
          id: '1',
          attributes: {
            Title: 'Exhibitor 1',
            Subtitle: 'Subtitle 1',
            Image: {
              data: {
                attributes: {
                  name: 'Exhibitor 1',
                  url: 'https://lg-strapi-s3.s3.us-east-1.amazonaws.com/Maggie_e5f7a8427d.jpg',
                  formats: {},
                  alternativeText: 'Exhibitor 1',
                  width: '400',
                  height: '300'
                }
              }
            }
          }
        },
        {
          id: '1',
          attributes: {
            Title: 'Exhibitor 2',
            Subtitle: 'Subtitle 2',
            Image: {
              data: {
                attributes: {
                  name: 'Exhibitor 2',
                  url: 'https://lg-strapi-s3.s3.us-east-1.amazonaws.com/Maggie_e5f7a8427d.jpg',
                  formats: {},
                  alternativeText: 'Exhibitor 2',
                  width: '400',
                  height: '300'
                }
              }
            }
          }
        },
        {
          id: '1',
          attributes: {
            Title: 'Exhibitor 3',
            Subtitle: 'Subtitle 3',
            Image: {
              data: {
                attributes: {
                  name: 'Exhibitor 3',
                  url: 'https://lg-strapi-s3.s3.us-east-1.amazonaws.com/Maggie_e5f7a8427d.jpg',
                  formats: {},
                  alternativeText: 'Exhibitor 3',
                  width: '400',
                  height: '300'
                }
              }
            }
          }
        },
        {
          id: '1',
          attributes: {
            Title: 'Exhibitor 4',
            Subtitle: 'Subtitle 4',
            Image: {
              data: {
                attributes: {
                  name: 'Exhibitor 4',
                  url: 'https://lg-strapi-s3.s3.us-east-1.amazonaws.com/Maggie_e5f7a8427d.jpg',
                  formats: {},
                  alternativeText: 'Exhibitor 4',
                  width: '400',
                  height: '300'
                }
              }
            }
          }
        },
        {
          id: '1',
          attributes: {
            Title: 'Exhibitor 5',
            Subtitle: 'Subtitle 5',
            Image: {
              data: {
                attributes: {
                  name: 'Exhibitor 5',
                  url: 'https://lg-strapi-s3.s3.us-east-1.amazonaws.com/Maggie_e5f7a8427d.jpg',
                  formats: {},
                  alternativeText: 'Exhibitor 5',
                  width: '400',
                  height: '300'
                }
              }
            }
          }
        },
        {
          id: '1',
          attributes: {
            Title: 'Exhibitor 6',
            Subtitle: 'Subtitle 6',
            Image: {
              data: {
                attributes: {
                  name: 'Exhibitor 6',
                  url: 'https://lg-strapi-s3.s3.us-east-1.amazonaws.com/Maggie_e5f7a8427d.jpg',
                  formats: {},
                  alternativeText: 'Exhibitor 6',
                  width: '400',
                  height: '300'
                }
              }
            }
          }
        }
      ]
    }
  };

  console.log("data", data)

  return data
};

export { getExhibitorsData }