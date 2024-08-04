import { NextApiRequest, NextApiResponse } from 'next'
import { post } from 'lib/httpClient'
import { getJwt, generateThemeData } from 'utils/helpers'
const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;

const removeBreakoutRating = async (slug: string, breakoutId: string, jwt: string) => {
  const config = {
    headers: {
      'Authorization': `Bearer ${jwt}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }
  let { data, err } = await post(`${NEXT_PUBLIC_API_URL}/event/${slug}/breakout/${breakoutId}/remove`, {}, config);
  return { data, err }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { eventId, breakoutId } = req.body;
    const jwt = getJwt(req, res)

    let { data, err } = await removeBreakoutRating(eventId, breakoutId, jwt)
    if (err?.status) {
      if (err.status === 401 || err.status === 403) {
        res.status(401).json(err)
      } else {
        res.status(500).json(err)
      }
    } else {
      res.status(200).json(data)
    }
  } catch (e) {
    res.status(500);
  }
}