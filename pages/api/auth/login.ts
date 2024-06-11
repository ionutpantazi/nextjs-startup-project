import axios, { AxiosResponse } from 'axios'
const NEXT_PUBLIC_STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;
import { NextApiRequest, NextApiResponse } from 'next'
import { credentialsGrant } from 'lib/authClient'
import { hasCookie, getCookie, setCookie } from 'cookies-next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email, password } = req.body;
  axios
    .post(`${NEXT_PUBLIC_STRAPI_URL}/api/auth/local`, {
      identifier: email,
      password: password,
    })
    .then(async response => {
      let { access_token, expires_in } = await credentialsGrant()
      if (access_token && expires_in) {
        setCookie('lg-jwt', access_token, { req, res, maxAge: expires_in })
        res.status(200).json(response.data)
      }
      else {
        res.status(500).json('jwt error')
      }
    })
    .catch(error => {
      res.status(200).json(error)
    });
}