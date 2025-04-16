import Script from 'next/script'

export default function InstagramFeed() {
  return (
    <>
      <Script
        src='https://static.elfsight.com/platform/platform.js'
        data-use-service-core
        strategy='lazyOnload'
      />
      <div
        className='elfsight-app-fff0c0ef-7fa4-4a2c-beaf-acfd9dd7688f'
        data-elfsight-app-lazy
      ></div>
    </>
  )
}
