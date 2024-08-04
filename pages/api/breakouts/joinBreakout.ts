import { NextApiRequest, NextApiResponse } from 'next'
import { post } from 'lib/httpClient'
import { getJwt, generateThemeData } from 'utils/helpers'
const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;

const joinBreakout = async (slug: string, breakoutId: number, password: string, jwt: string) => {
  const config = {
    headers: {
      'Authorization': `Bearer ${jwt}`,
      'Content-Type': 'application/json'
    }
  }

  const { data, err } = await post(`${NEXT_PUBLIC_API_URL}/event/${slug}/breakout/${breakoutId}/join`, { Password: password }, config);
  return { data, err }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { eventId, breakoutId, password } = req.body;
    const jwt = getJwt(req, res)

    let { data, err } = await joinBreakout(eventId, breakoutId, password, jwt)
    console.log("test", data, err);
    if (err?.status) {
      res.status(500).json(err)
    } else {
      res.status(200).json(data)
    }
  } catch (e) {
    res.status(500);
  }
}