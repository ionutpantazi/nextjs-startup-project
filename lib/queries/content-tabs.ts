const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;
import { Title } from '@/components/Bootstrap/Common';
import { DownloadPageType, DownloadType } from '@/components/Pages/ContentPages';
import { url } from 'inspector';
import { get } from 'lib/httpClient'
import { title } from 'process';

const getContentTabData = async (slug: string, pageSlug: string, jwt: string) => {
  const config = {
    headers: {
      'Authorization': `Bearer ${jwt}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }

  // const data = {
  //   id: '1',
  //   title: 'Content Library',
  //   type: DownloadPageType.Downloads,
  //   categories: [
  //     {
  //       id: '1',
  //       title: 'Client Websites',
  //       downloads: [
  //         {
  //           id: '1',
  //           title: 'Live from the greenroom',
  //           type: DownloadType.Link,
  //           image: "https://dmsprod.azureedge.net/dms/Uploads/Event_1676/Images/content-placeholder-552-x-310-image-3.png",
  //           url: "https://registration.livegroup.co.uk/lgevents/",
  //         }
  //       ]
  //     },
  //     {
  //       id: '2',
  //       title: 'Event Footage',
  //       downloads: [
  //         {
  //           id: '1',
  //           title: 'Episode 8<br /><em>4th January</em>',
  //           type: DownloadType.Link,
  //           image: "https://dmsprod.azureedge.net/dms/Uploads/Event_1676/Images/episode-8-552-x-310.png",
  //           url: "https://www.youtube.com/watch?v=rgTrLDkkMZg",
  //         }
  //       ]
  //     },
  //     {
  //       id: '3',
  //       title: 'The Highlights',
  //       downloads: [
  //         {
  //           id: '1',
  //           title: 'Virtual Events For Marketing Teams (In Under 1 Minute)',
  //           type: DownloadType.Link,
  //           image: "https://dmsprod.azureedge.net/dms/Uploads/Event_1676/Images/LG20_YouTubeCover_2a.png 3 new branding.png",
  //           url: "https://www.youtube.com/watch?v=TWR8ThZO6kw&t=1s",
  //         },
  //         {
  //           id: '1',
  //           title: 'Virtual Events For Sales Teams (In Under 1 Minute)',
  //           type: DownloadType.Link,
  //           image: "https://dmsprod.azureedge.net/dms/Uploads/Event_1676/Images/552-x-310-image-1.png",
  //           url: "https://www.youtube.com/watch?v=rtySIsAdb9Y",
  //         }
  //       ]
  //     },
  //     {
  //       id: '4',
  //       title: 'Additional Resources',
  //       downloads: [
  //         {
  //           id: '1',
  //           title: 'Tips and Guidance for Creating PowerPoint Presentations',
  //           type: DownloadType.Document,
  //           image: "https://dmsprod.azureedge.net/dms/Uploads/Event_1676/Images/Creating-powerpoint-presenations_2.png",
  //           url: "https://dmsprod.azureedge.net/dms/Uploads/Event_1676/Downloads/LiveGroup_Guidance_BuildingYourPowerPoint.pdf",
  //         },{
  //           id: '2',
  //           title: 'Explore the potential of hybrid in our latest webinar',
  //           type: DownloadType.Link,
  //           image: "https://dmsprod.azureedge.net/dms/Uploads/Event_1676/Images/How-to-hybrid-events---552-x-310.png",
  //           url: "https://registration.livegroup.co.uk/lgevents/",
  //         },{
  //           id: '3',
  //           title: 'Virtual event series: Episode 1. BONUS CONTENT Q&A',
  //           type: DownloadType.Link,
  //           image: "https://dmsprod.azureedge.net/dms/Uploads/Event_1676/Images/toby-and-bruce-webinar552-x-310.png",
  //           url: "https://www.youtube.com/watch?v=y7ffVV5J8No",
  //         },{
  //           id: '4',
  //           title: 'How to Keep Your Comms Running as Planned',
  //           type: DownloadType.Link,
  //           image: "https://dmsprod.azureedge.net/dms/Uploads/Event_1676/Images/CONTENT-LIBARAY-PLACEHOLDER-1.png",
  //           url: "https://www.youtube.com/watch?v=v26-20biVQA",
  //         },{
  //           id: '5',
  //           title: 'LG Presents: Jordan Growth and Opportunity Summit',
  //           type: DownloadType.Link,
  //           image: "https://dmsprod.azureedge.net/dms/Uploads/Event_1676/Images/552-x-310-image-4.png",
  //           url: "https://www.youtube.com/watch?v=1DZUBgAnDgo",
  //         },{
  //           id: '6',
  //           title: 'LG Presents: International Africa Investment Summit',
  //           type: DownloadType.Link,
  //           image: "https://dmsprod.azureedge.net/dms/Uploads/Event_1676/Images/552-x-310-image-2.png",
  //           url: "https://www.youtube.com/watch?v=yd6DpJDZrW0",
  //         },{
  //           id: '7',
  //           title: 'Virtual event tips: How to plan a virtual event (in under 2 minutes)',
  //           type: DownloadType.Link,
  //           image: "https://dmsprod.azureedge.net/dms/Uploads/Event_1676/Images/522-x-310-image-6.png",
  //           url: "https://www.youtube.com/watch?v=eqtPpOcjKdI&t=57s",
  //         },{
  //           id: '8',
  //           title: 'Virtual Events Series: Episode 2. Run Kick-Ass Virtual Events',
  //           type: DownloadType.Link,
  //           image: "https://dmsprod.azureedge.net/dms/Uploads/Event_1676/Images/content-placeholder-552-x-310-image-4.png",
  //           url: "https://www.youtube.com/watch?v=WGCNQGYVuhw&feature=youtu.be",
  //         }
  //       ]
  //     }
  //   ]
  // }

  const { data } = await get(`${NEXT_PUBLIC_API_URL}/event/${slug}/pages/${pageSlug}`, config);
  // return data

  console.log("data", data)

  return data;
};

export { getContentTabData }