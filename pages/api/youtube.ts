import axios, { AxiosResponse } from 'axios'
import { GOOGLE_API_KEY } from 'lib/constants'
import { NextApiRequest, NextApiResponse } from 'next'

export const config = {
  maxDuration: 5,
}

const getThumbnail = async (videoId: string) => {
  let data = await axios
    .get(`https://img.youtube.com/vi/${videoId}/sddefault.jpg`)
    .then((res) => { return res })
    .catch((err) => { })
  if (data?.status == 200) {
    return data.data;
  }
}

const getDetails = async (videoId: string) => {
  await axios
    .get(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${GOOGLE_API_KEY}`)
    .then((res) => { return res })
    .catch((err) => { console.log(err) })
  return null;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { videoId } = req.body;
    let thumbnail = await getThumbnail(videoId);
    // let details = await getDetails(videoId);
    if (thumbnail) {
      res.status(200).json({
        thumbnail
      })
    }
    res.status(200).json({
      error: 'thumbnail not found'
    })
  } catch (e) {
    res.status(500);
  }
}