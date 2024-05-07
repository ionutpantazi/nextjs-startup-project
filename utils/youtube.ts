import axios from 'axios'

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

export const parseYoutube = (attributes: any) => {
  // console.log(attributes)
  if (attributes.Page_Content.length) {
    // attributes.Page_Content.forEach((component: any, index: number) => {
    //   if (component.Video) {
    //     console.log(component.Video)
    //     component.Video.Videos.forEach(async (video: any) => {
    //       let youtubeID = video.YouTubeID
    //       if (youtubeID) {
    //         let data = await axios.post('api/youtube', {
    //           videoId: youtubeID
    //         });
    //         console.log(data)
    //       }
    //     })
    //   }
    // })
  }
  return attributes
}
