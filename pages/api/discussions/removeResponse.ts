import { NextApiRequest, NextApiResponse } from 'next'
import { remove } from 'lib/httpClient'
import { getJwt } from 'utils/helpers'
const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;

const removeResponse = async (slug: string, discussionId: string, responseId: string, jwt: string) => {
  const config = {
    headers: {
      'Authorization': `Bearer ${jwt}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }

  let { data, err } = await remove(`${NEXT_PUBLIC_API_URL}/event/${slug}/discussions/${discussionId}/response/${responseId}/delete`, config);
  return { data, err }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { eventId, discussionId, responseId } = req.body;
    const jwt = getJwt(req, res)

    let { data, err } = await removeResponse(eventId, discussionId, responseId, jwt)
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