const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;
import { Title } from '@/components/Bootstrap/Common';
import { ComponentStream, DownloadType } from '@/components/StrapiComponents/ComponentStreamPanel';
import { url } from 'inspector';
import { get } from 'lib/httpClient'
import { title } from 'process';

const getStreamData = async (slug: string, jwt: string) => {
  const config = {
    headers: {
      'Authorization': `Bearer ${jwt}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }

  const data = {
    id: '1',
    title: 'Stream',
    streams: [
      {
        id: '1',
        title: 'Stream 1',
        categories: [
          {
            title: 'Previous sessions',
            downloads: [
              {
                id: '1',
                title: 'Speaker Briefing',
                type: DownloadType.Link,
                image: "https://dmsprod.azureedge.net/dms/Uploads/Event_1676/Images/preparing-for-virtual-session-image-1.png",
                url: "https://livegroup.s3.eu-west-1.amazonaws.com/ey/TaxTech/LG_YourDigitalSession_v1.mp4",
              },{
                id: '2',
                title: 'LG Webinar: Episode 6<br /> <em>12th November</em>',
                type: DownloadType.Link,
                image: "https://dmsprod.azureedge.net/dms/Uploads/Event_1676/Images/Episode-6-552-x-310.png",
                url: "https://www.youtube.com/watch?v=RFpRLaRaxbA"
              },{
                id: '3',
                title: 'Virtual Events For Sales Teams (In Under 1 Minute)',
                type: DownloadType.Link,
                image: "https://dmsprod.azureedge.net/dms/Uploads/Event_1676/Images/552-x-310-image-1_2.png",
                url: "https://www.youtube.com/watch?v=eqtPpOcjKdI"
              },{
                id: '4',
                title: 'Plan a Virtual Event in 2 Minutes',
                type: DownloadType.Link,
                image: "https://dmsprod.azureedge.net/dms/Uploads/Event_1676/Images/522-x-310-image-6_2.png",
                url: "https://www.youtube.com/watch?v=eqtPpOcjKdI"
              },{
                id: '5',
                title: 'LG Webinar: Episode 5<br /> <em>26th May</em>',
                type: DownloadType.Link,
                image: "https://dmsprod.azureedge.net/dms/Uploads/Event_1676/Images/522-x-310-image-6_2.png",
                url: "https://www.youtube.com/watch?v=x0KDNm6rWWY"
              },{
                id: '6',
                title: 'LG Webinar: Episode 4<br /> <em>1st May</em>',
                type: DownloadType.Link,
                image: "https://dmsprod.azureedge.net/dms/Uploads/Event_1676/Images/content-placeholder-552-x-310-image-4_3.png",
                url: "https://www.youtube.com/watch?v=sjvT-drQSt8"
              }
            ]
          }
        ]
      },
      {
        id: '2',
        title: 'Stream 2',
        categories: []
      },
      {
        id: '3',
        title: 'Stream 3',
        categories: []
      }
    ]
  }

  console.log("data", data)

  return data;
};

export { getStreamData }