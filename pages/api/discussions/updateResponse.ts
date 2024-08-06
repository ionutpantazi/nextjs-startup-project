import { NextApiRequest, NextApiResponse } from 'next'
import { update } from 'lib/httpClient'
import { getJwt, generateThemeData } from 'utils/helpers'
const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;

const updateResponse = async (slug: string, discussionId: string, responseId: string, response: string, jwt: string) => {
  const config = {
    headers: {
      'Authorization': `Bearer ${jwt}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }

  let body = {
    response_text: response
  }

  let { data, err } = await update(`${NEXT_PUBLIC_API_URL}/event/${slug}/discussions/${discussionId}/response/${responseId}/update`, body, config);
  return { data, err }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { eventId, discussionId, responseId, response } = req.body;
    const jwt = getJwt(req, res)

    let { data, err } = await updateResponse(eventId, discussionId, responseId, response, jwt)
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