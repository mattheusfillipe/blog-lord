const fs = require('fs');
const cheerio = require('cheerio');

const html = fs.readFileSync('homepage.html', 'utf-8');
const $ = cheerio.load(html);

console.log('Total length:', html.length);
console.log('Title:', $('title').text());

const selectors = [
    '.section-featured-home',
    '.section-new',
    '.js-swiper-featured-demo',
    '.js-item-product',
    '.js-item-name',
    '.js-price-display',
    '[class*="featured"]',
    'section'
];

selectors.forEach(sel => {
    const count = $(sel).length;
    console.log(`Selector "${sel}" count:`, count);
    if (count > 0 && count < 5) {
        // Print first match class
        console.log(`  - Classes:`, $(sel).first().attr('class'));
    }
});
