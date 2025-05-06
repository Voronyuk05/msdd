import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'




export default async function middleware(req: NextRequest) {
  if (req.nextUrl.pathname === '/' || req.nextUrl.pathname === '') {
    const url = req.nextUrl.clone();
    url.pathname = '/home';
    return NextResponse.redirect(url);
  }
  
  const nonce = Buffer.from(crypto.randomUUID()).toString('base64')
  const cspHeader = `
    default-src: 'self';
    script-src: 'self' 'nonce-${nonce}' 'strict-dynamic';
    style-src: 'self' blob: data:;
    font-src: 'self';
    object-src: 'none';
    base-uri: 'self';
    form-action: 'self';
    frame-ancestors: 'none';
    upgrade-insecure-requests;
  `

  const contentSecurityPolicyHeaderValue = cspHeader
    .replace(/\s{2,}/g, '')
    .trim()
  
  const requestHeaders = new Headers(req.headers)
  requestHeaders.set('x-nonce', nonce)

  requestHeaders.set(
    'Content-Security-Policy',
    contentSecurityPolicyHeaderValue
  )

  const response = NextResponse.next({
    request: {
      headers: requestHeaders
    }
  })

  response.headers.set(
    'Content-Security-Policy',
    contentSecurityPolicyHeaderValue
  )

  return response
}
 
export const config = {
  matcher: ['/'],
}


