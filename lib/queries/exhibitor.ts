const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;
import { Title } from '@/components/Bootstrap/Common';
import { CardWidth, ComponentExhibitor } from '@/components/StrapiComponents/ComponentExhibitorPanel';
import { get } from 'lib/httpClient'

const getExhibitorData = async (slug: string, jwt: string) => {
  const config = {
    headers: {
      'Authorization': `Bearer ${jwt}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }
  const data : ComponentExhibitor = {
    id: '1',
    title: 'Live Group',
    subtitle: 'About Us',
    header: "Virtual events, live experiences or digital twins. Whatever you need support with, we've got your back.",
    description: `<p>We know how important your event is to you, your team and your organisation. That's why we've got your back, no matter what.</p><br><p>At Live Group, we pride ourselves on being able to take a step back to understand your needs. We hire leading experts in the events industry, experienced enough to make the big decisions. We've been a trusted events partner to the FTSE 100 and UK Government for over 45 years.<br><br>International summits, national conferences, virtual events to inspire, engage and empower. Whatever you're planning next, we'll be right by your side.&nbsp;</p>`,
    contact:`<strong>Get in touch</strong><br><br><a data-cke-saved-href="http://livegroup.co.uk" href="http://livegroup.co.uk" target="_blank">http://livegroup.co.uk</a><br>Phone:&nbsp;+44(0)20 8481 2000<br><a data-cke-saved-href="https://livegroup.co.uk/contact-us/" href="https://livegroup.co.uk/contact-us/" target="_blank">Contact us</a>`,
    videoUrl: "https://livegroup.s3-eu-west-1.amazonaws.com/LG/LG+Hub/videoplayback.mp4",
    items: {
      data: [
        {
          id: '1',
          title: 'Item 1',
          subtitle: 'Item 1',
          image: {
            data: {
              attributes: {
                name: 'Exhibitor 1',
                url: 'https://lg-strapi-s3.s3.us-east-1.amazonaws.com/b5_ddbf5c0643.jpeg',
                formats: {},
                alternativeText: 'Item 1',
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
          title: 'Item 2',
          subtitle: 'Subtitle 2',
          image: {
            data: {
              attributes: {
                name: 'Item 2',
                url: 'https://lg-strapi-s3.s3.us-east-1.amazonaws.com/b6_2b385e7e77.jpg',
                formats: {},
                alternativeText: 'Item 2',
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
          title: 'Item 3',
          subtitle: 'Subtitle 3',
          image: {
            data: {
              attributes: {
                name: 'Item 3',
                url: 'https://lg-strapi-s3.s3.us-east-1.amazonaws.com/b4_4156036621.jpg',
                formats: {},
                alternativeText: 'Item 3',
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
          title: 'Item 4',
          subtitle: 'Subtitle 4',
          image: {
            data: {
              attributes: {
                name: 'Item 4',
                url: 'https://lg-strapi-s3.s3.us-east-1.amazonaws.com/b1_c9a0e85b47.jpg',
                formats: {},
                alternativeText: 'Item 4',
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
          title: 'Item 5',
          subtitle: 'Subtitle 5',
          image: {
            data: {
              attributes: {
                name: 'Item 5',
                url: 'https://lg-strapi-s3.s3.us-east-1.amazonaws.com/Maggie_e5f7a8427d.jpg',
                formats: {},
                alternativeText: 'Item 5',
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
          title: 'Item 6',
          subtitle: 'Subtitle 6',
          image: {
            data: {
              attributes: {
                name: 'Item 6',
                url: 'https://lg-strapi-s3.s3.us-east-1.amazonaws.com/b1_c9a0e85b47.jpg',
                formats: {},
                alternativeText: 'Item 6',
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
          title: 'Item 7',
          subtitle: 'Subtitle 7',
          image: {
            data: {
              attributes: {
                name: 'Item 7',
                url: 'https://lg-strapi-s3.s3.us-east-1.amazonaws.com/Maggie_e5f7a8427d.jpg',
                formats: {},
                alternativeText: 'Item 7',
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

  return data;
};

export { getExhibitorData }