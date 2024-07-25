const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;
import { Title } from '@/components/Bootstrap/Common';
import { CardWidth } from '@/components/StrapiComponents/ComponentExhibitorPanel';
import { ComponentExhibitors } from '@/components/StrapiComponents/ComponentExhibitorsPanel';
import { get } from 'lib/httpClient'

const getExhibitorsData = async (slug: string, jwt: string) => {
  const config = {
    headers: {
      'Authorization': `Bearer ${jwt}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }
  const data : ComponentExhibitors = {
    id: '1',
    title: 'Exhibitors',
    exhibitors: {
      data: [
        {
          id: '1',
          title: 'Exhibitor 1',
          subtitle: 'Subtitle 1',
          image: {
            data: {
              attributes: {
                name: 'Exhibitor 1',
                url: 'https://lg-strapi-s3.s3.us-east-1.amazonaws.com/b5_ddbf5c0643.jpeg',
                formats: {},
                alternativeText: 'Exhibitor 1',
                width: '400',
                height: '300'
              }
            }
          },
          target: "_blank",
          width: CardWidth.full
        },
        {
          id: '2',
          title: 'Exhibitor 2',
          subtitle: 'Subtitle 2',
          image: {
            data: {
              attributes: {
                name: 'Exhibitor 2',
                url: 'https://lg-strapi-s3.s3.us-east-1.amazonaws.com/b6_2b385e7e77.jpg',
                formats: {},
                alternativeText: 'Exhibitor 2',
                width: '400',
                height: '300'
              }
            }
          },
          target: "",
          width: CardWidth.half
        },
        {
          id: '3',
          title: 'Exhibitor 3',
          subtitle: 'Subtitle 3',
          image: {
            data: {
              attributes: {
                name: 'Exhibitor 3',
                url: 'https://lg-strapi-s3.s3.us-east-1.amazonaws.com/b4_4156036621.jpg',
                formats: {},
                alternativeText: 'Exhibitor 3',
                width: '400',
                height: '300'
              }
            }
          },
          target: "",
          width: CardWidth.half
        },
        {
          id: '4',
          title: 'Exhibitor 4',
          subtitle: 'Subtitle 4',
          image: {
            data: {
              attributes: {
                name: 'Exhibitor 4',
                url: 'https://lg-strapi-s3.s3.us-east-1.amazonaws.com/b1_c9a0e85b47.jpg',
                formats: {},
                alternativeText: 'Exhibitor 4',
                width: '400',
                height: '300'
              }
            }
          },
          target: "",
          width: CardWidth.quarter
        },
        {
          id: '5',
          title: 'Exhibitor 5',
          subtitle: 'Subtitle 5',
          image: {
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
          },
          target: "",
          width: CardWidth.quarter
        },
        {
          id: '6',
          title: 'Exhibitor 6',
          subtitle: 'Subtitle 6',
          image: {
            data: {
              attributes: {
                name: 'Exhibitor 6',
                url: 'https://lg-strapi-s3.s3.us-east-1.amazonaws.com/b1_c9a0e85b47.jpg',
                formats: {},
                alternativeText: 'Exhibitor 6',
                width: '400',
                height: '300'
              }
            }
          },
          target: "",
          width: CardWidth.quarter
        },
        {
          id: '7',
          title: 'Exhibitor 7',
          subtitle: 'Subtitle 7',
          image: {
            data: {
              attributes: {
                name: 'Exhibitor 7',
                url: 'https://lg-strapi-s3.s3.us-east-1.amazonaws.com/Maggie_e5f7a8427d.jpg',
                formats: {},
                alternativeText: 'Exhibitor 7',
                width: '400',
                height: '300'
              }
            }
          },
          target: "",
          width: CardWidth.quarter
        }
      ]
    }
  };

  console.log("data", data)

  return data
};

export { getExhibitorsData }