import { NextApiRequest, NextApiResponse } from 'next'
import { post } from 'lib/httpClient'
import { getJwt, generateThemeData } from 'utils/helpers'
const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;

const agendaItem = async (eventId: string, agendaItemId: string, method: string, jwt: string) => {
  const config = {
    headers: {
      'Authorization': `Bearer ${jwt}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }
  const { data, err } = await post(`${NEXT_PUBLIC_API_URL}/event/${eventId}/agendaitems/${agendaItemId}/${method}`, {}, config);
  return { data, err }
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { eventId, agendaItemId, method } = req.body;
    const jwt = getJwt(req, res)

    let { data, err } = await agendaItem(eventId, agendaItemId, method, jwt)
    if (err?.status) {
      res.status(500).json(err)
    } else {
      res.status(200).json(data)
    }
  } catch (e) {
    res.status(500);
  }
}