import axios, { AxiosResponse } from 'axios'
const NEXT_PUBLIC_STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;
import { NextApiRequest, NextApiResponse } from 'next'
import { passwordGrant } from 'lib/authClient'
import { hasCookie, getCookie, setCookie } from 'cookies-next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email, password } = req.body;
  axios
    .post(`${NEXT_PUBLIC_STRAPI_URL}/api/auth/local`, {
      identifier: email,
      password: password,
    })
    .then(response => {
      setCookie('user', JSON.stringify({ email: email }), { req, res, maxAge: 3600 })
      res.status(200).json(response.data)
    })
    .catch(error => {
      res.status(200).json(error)
    });
}