import axios, { AxiosResponse } from 'axios'
const NEXT_PUBLIC_STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email, password } = req.body;
  axios
    .post(`${NEXT_PUBLIC_STRAPI_URL}/api/auth/local`, {
      identifier: email,
      password: password,
    })
    .then(response => {
      res.status(200).json(response.data)
    })
    .catch(error => {
      res.status(200).json(error)
    });
}