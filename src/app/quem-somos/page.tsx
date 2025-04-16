import Image from 'next/image'

export default function QuemSomosPage() {
  return (
    <main className='mt-12 flex w-[1280px] gap-6 justify-center'>
      <Image
        src='/quem-somos.png'
        alt='Logo Fachada Lord'
        width={1280}
        height={720}
        className='w-full h-auto rounded-xl object-cover'
      />

      <p className='text-[var(--secondary)]'>
        <strong>Nossa História</strong>
        <br /> Fundada em 1964, a Lord Perfumaria nasceu com o propósito de
        oferecer as melhores produtos. Com mais de meio século de tradição, a
        marca se consolidou como referência em perfumaria de luxo, skincare,
        maquiagem e cuidados com os cabelos. Ao longo dos anos, expandimos nossa
        presença para os principais shoppings da cidade, sempre mantendo o
        compromisso com a qualidade, sofisticação e excelência no atendimento.
        Hoje, a Lord Perfumaria é reconhecida por oferecer uma experiência única
        e personalizada, conectando nossos clientes às melhores marcas
        internacionais de beleza.
        <br />
        <br />
        <strong>Missão, Visão e Valores</strong>
        <br />- Missão: Oferecer uma curadoria exclusiva de perfumes, maquiagem,
        skincare e produtos para cabelos, proporcionando beleza, sofisticação e
        bem-estar aos nossos clientes.
        <br />- Visão: Ser referência em perfumaria de luxo e cuidados com a
        beleza, mantendo a tradição e inovação no atendimento personalizado.
        <br />- Valores: Excelência no atendimento – Cada cliente é único e
        merece um atendimento especial. Compromisso com a qualidade –
        Selecionamos apenas as melhores marcas para oferecer aos nossos
        clientes. Sofisticação acessível – Beleza de alto padrão com uma
        experiência diferenciada.
        <br />
        <br />
        <strong>O que torna a Lord Perfumaria única?</strong>
        <br />- Nossos consultores são treinados para oferecer orientação
        personalizada e ajudar na escolha da fragrância ou produto ideal. <br />
        - Trabalhamos com as melhores e mais desejadas marcas internacionais de
        perfumaria e cosméticos. <br />- Lojas elegantes e bem localizadas para
        oferecer uma experiência premium nos melhores shoppings de Brasília,
        além de atendimento online pelo nosso site ou whatsapp. <br />-
        Oferecemos um ambiente sofisticado onde nossos clientes podem testar e
        sentir cada fragrância antes da compra.
      </p>
    </main>
  )
}
