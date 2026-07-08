import { revalidatePath } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get('secret')

  if (secret !== process.env.SANITY_WEBHOOK_SECRET) {
    return NextResponse.json({ message: 'Invalid secret' }, { status: 401 })
  }

  const body = await req.json()
  const type = body._type

  // shared layout (header nav, footer) is cached per-route, so every
  // event must revalidate it or pages drift out of sync on their own
  // independent ISR clocks
  revalidatePath('/', 'layout')

  switch (type) {
    case 'property':
      revalidatePath('/')                  // homepage property cards
      revalidatePath('/[slug]', 'page')    // all property pages
      revalidatePath('/gallery')           // gallery groups by property name
      break
    case 'room':
      revalidatePath('/[slug]', 'page')    // hotel page shows rooms
      break
    case 'offer':
      revalidatePath('/')
      revalidatePath('/offers')
      break
    case 'testimonial':
      revalidatePath('/')
      break
    case 'gallery':
      revalidatePath('/')                  // homepage gallery preview
      revalidatePath('/gallery')
      break
    case 'blogPost':
      revalidatePath('/blog')
      revalidatePath('/blog/[slug]', 'page')
      break
    case 'siteSettings':
      revalidatePath('/')                  // homepage hero, about, experiences, map
      break
    default:
      revalidatePath('/')
  }

  return NextResponse.json({ revalidated: true, type })
}
