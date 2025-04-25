import { NextResponse } from 'next/server'
import * as cheerio from 'cheerio'

export async function GET() {
  const response = await fetch(
    'https://lordperfumaria.com.br/produtos/?sort_by=created-descending'
  )
  const html = await response.text()

  const $ = cheerio.load(html)

  const produtos: {
    title: string
    link: string
    image: string
  }[] = []

  $('.js-item-with-secondary-image').each((_, element) => {
    const link = $(element).find('a').attr('href')
    const title = $(element).find('a').attr('title')
    const rawImage = $(element).find('img').attr('data-srcset')
    const image = rawImage?.split(',')[0]?.trim().split(' ')[0]

    if (link && title && image) {
      produtos.push({
        title,
        link,
        image,
      })
    }
  })

  return NextResponse.json(produtos.slice(0, 5))
}
