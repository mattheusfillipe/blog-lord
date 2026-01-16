import { NextResponse } from 'next/server'
import * as cheerio from 'cheerio'

export async function GET() {
  const res = await fetch(
    'https://lordperfumaria.com.br/',
    {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      },
    }
  )
  const html = await res.text()
  const $ = cheerio.load(html)
  const produtos: any[] = []

  $('.section-featured-home .js-item-product').each((_, element) => {
    const title = $(element).find('.js-item-name').text().trim()
    const link = $(element).find('a').attr('href')
    const rawImage = $(element).find('.js-item-image').attr('data-srcset')
    const image = rawImage
      ? 'https:' + rawImage.split(',')[0].trim().split(' ')[0]
      : ''

    if (title && link && image) {
      produtos.push({
        title,
        link,
        image,
      })
    }
  })

  return NextResponse.json(produtos.slice(0, 5))
}
