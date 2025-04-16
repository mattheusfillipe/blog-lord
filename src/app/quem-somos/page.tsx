import Image from 'next/image'

export default function QuemSomosPage() {
  return (
    <main className='mt-12 flex w-[1280px] gap-6 items-start justify-center'>
      <Image
        src='/quem-somos.png'
        alt='Logo Fachada Lord'
        width={703}
        height={542}
        className='w-full h-auto rounded-xl object-contain'
      />

      <div className='text-[var(--secondary)]'>
        <p className='font-bold'>Nossa História</p>
        <p>
          Fundada em 1964, a Lord Perfumaria nasceu com o propósito de oferecer
          os melhores produtos. Com mais de meio século de tradição, a marca se
          consolidou como referência em perfumaria de luxo, skincare, maquiagem
          e cuidados com os cabelos. Ao longo dos anos, expandimos nossa
          presença para os principais shoppings da cidade, sempre mantendo o
          compromisso com a qualidade, sofisticação e excelência no atendimento.
          Hoje, a Lord Perfumaria é reconhecida por oferecer uma experiência
          única e personalizada, conectando nossos clientes às melhores marcas
          internacionais de beleza.
        </p>
        <p className='font-bold mt-2'>Missão, Visão e Valores</p>
        <p>
          - <strong>Missão:</strong> Oferecer uma curadoria exclusiva de
          perfumes, maquiagem, skincare e produtos para cabelos, proporcionando
          beleza, sofisticação e bem-estar aos nossos clientes. <br />
          <strong>- Visão:</strong> Ser referência em perfumaria de luxo e
          cuidados com a beleza, mantendo a tradição e inovação no atendimento
          personalizado. <br />
          <strong>- Valores:</strong> Excelência no atendimento – Cada cliente é
          único e merece um atendimento especial. Compromisso com a qualidade –
          Selecionamos apenas as melhores marcas para oferecer aos nossos
          clientes. Sofisticação acessível – Beleza de alto padrão com uma
          experiência diferenciada.
        </p>
        <p className='font-bold mt-2'>
          O que torna a{' '}
          <strong className='text-[var(--primary)]'>Lord Perfumaria</strong>{' '}
          única?
        </p>

        <p>
          - Nossos consultores são treinados para oferecer orientação
          personalizada e ajudar na escolha da fragrância ou produto ideal.
          <br />- Trabalhamos com as melhores e mais desejadas marcas
          internacionais de perfumaria e cosméticos. <br />- Lojas elegantes e
          bem localizadas para oferecer uma experiência premium nos melhores
          shoppings de Brasília, além de atendimento online pelo nosso site ou
          WhatsApp. <br />- Oferecemos um ambiente sofisticado onde nossos
          clientes podem testar e sentir cada fragrância antes da compra.
        </p>
      </div>
    </main>
  )
}
