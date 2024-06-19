import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { credentialsGrant } from './lib/authClient'

export async function middleware(request: NextRequest) {
  const response = NextResponse.next()
  let lgJwtCookie = request.cookies.get('lg-jwt')
  if(!lgJwtCookie){
    let { access_token, expires_in } = await credentialsGrant()
    if (access_token) {
      response.cookies.set('lg-jwt', access_token, { maxAge: expires_in })
      response.headers.set("lg-jwt-res", access_token)
    }
  }
  return response
}

export const config = {
  matcher: [
    '/pwa/:path*',
  ],
}