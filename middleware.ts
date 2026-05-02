import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const preview = request.nextUrl.searchParams.get('preview');

  if (preview !== 'forja2026') {
    return NextResponse.redirect(new URL('/oferta', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/anuncio-preview'],
};
