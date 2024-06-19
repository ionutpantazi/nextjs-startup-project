import axios, { AxiosResponse } from 'axios'
const NEXT_PUBLIC_STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;
import { NextApiRequest, NextApiResponse } from 'next'
import { passwordGrant } from 'lib/authClient'
import { hasCookie, getCookie, setCookie } from 'cookies-next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email, password, eventID } = req.body;
  let { data, err } = await passwordGrant(email, password, eventID)
  if (data?.access_token) {
    let { access_token, expires_in } = data
    setCookie('lg-jwt', access_token, { req, res, maxAge: expires_in })
    setCookie('user', { email: email }, { req, res, maxAge: expires_in })
    res.status(200).json({ access_token, expires_in })
  }
  else {
    res.status(500).json(err?.error)
  }
}