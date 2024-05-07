import axios from 'axios'
import { headers } from 'next/headers';

// const parseYoutubeData = (videos: [Videos]) => {
//   videos.map(async (video) => {
//     let YouTubeID = video.YouTubeID;
//     if (YouTubeID) {
//       let data = await axios.post('api/youtube', {
//         videoId: YouTubeID
//       });
//       console.log(data)
//     }
//   })

// }


// const getYoutubeThumbnail = async (host: string, youtubeID: string) => {
//   try {
//     let data =
//     return 'data'
//   }
//   catch(e){
//     console.log(e)
//   }
// }

// const myPromise = new Promise((resolve, reject) => {
//   await axios.post(`${host}/api/youtube`, {
//     videoId: youtubeID
//   }).then(data=>{
//     resolve(data)
//   })
// });

// export const parseYoutube = async (host: string, attributes: any) => {
//   if (host && attributes.Page_Content.length) {
//     var attributesCopy = JSON.parse(JSON.stringify(attributes));
//     await Promise.all(
//       attributes.Page_Content.map(async (component: any, index: number) => {
//         if (component.Video?.Videos?.length) {
//           await Promise.all(
//             component.Video.Videos.map(async (video: any, i: number) => {
//               // console.log(video)
//               let youtubeID = video.YouTubeID
//               if (youtubeID) {
//                 myPromise
//                 .then((value) => {
//                   console.log(value);
//                 })
//                 console.log('x')
//                 attributesCopy.Page_Content[index].Video.Videos[i]['Thumbnail'] = 'x'
//                 // attributesCopy.Page_Content[index].Video.Videos[i]['Thumbnail'] = x?.data?.thumbnail
//                 console.log(i)
//               }
//             })
//           )
  
          
//         }
//       })
//     )
//   }
//   console.log('return')
//   return attributesCopy
// }

// export async function parseYoutube(host: string, attributes: any) {
//   var attributesCopy = JSON.parse(JSON.stringify(attributes));
//   if (host && attributes.Page_Content.length) {
    
//     attributes.Page_Content.forEach(async (component: any, index: number) => {
//       if (component.Video) {
//         component.Video.Videos.forEach(async (video: any, i: number) => {
//           let youtubeID = video.YouTubeID
//           if (youtubeID) {
//             await getData(host, youtubeID)
//             console.log(i)
//           }
          
//         })
//       }
      
//     })
      
//     attributes.Page_Content.forEach(async (component: any, index: number) => {
//       if (component.Video) {
//         // console.log(component.Video)
//         component.Video.Videos.forEach(async (video: any, i: number) => {
//           let youtubeID = video.YouTubeID
//           if (youtubeID) {
//             try {
//               let data = await axios.post(`${host}/api/youtube`, {
//                 videoId: youtubeID
//               });
//               if (data?.data?.thumbnail) {
//                 console.log('da')
//                 video['Title'] = 'da'
//                 attributesCopy.Page_Content[index].Video.Videos[i]['Thumbnail'] = data?.data?.thumbnail
//               }
//             } catch (e: any) {
//               // console.log(e.cause)
//             }
//           }
//         })
//       }
//     })
//     console.log('return')
//     return attributesCopy
//   }
// }

// export const parseYoutube = (host: string, attributes: any) => {
//   var attributesCopy = JSON.parse(JSON.stringify(attributes));
//   if (host && attributesCopy.Page_Content.length) {
//     attributesCopy.Page_Content.forEach((component: any, index: number) => {
//       if (component.Video) {
//         console.log(component.Video)
//         component.Video.Videos.forEach(async (video: any, i:number) => {
//           let youtubeID = video.YouTubeID
//           if (youtubeID) {
//             try {
//               let data = await axios.post(`${host}/api/youtube`, {
//                 videoId: youtubeID
//               });
//               if(data?.data?.thumbnail){
//                 console.log('da')
//                 video['Title']='da'
//                 attributesCopy.Page_Content[index].Video.Videos[i]['Thumbnail'] = data?.data?.thumbnail
//               }
//             } catch (e:any) {
//               console.log(e.cause)
//             }
//           }
//         })
//       }
//     })
//   }
//   return attributesCopy
// }
