import Image from 'next/image'
import Link from 'next/link'
import { ProductCard } from '../components/ProductCard'

export default function LeituraMateria() {
  return (
    <main className='mt-12 flex flex-col w-[1280px] gap-6 justify-center'>
      {/* Imagem principal */}
      <div className='relative rounded-xl h-96 overflow-hidden p-3'>
        <Image src='/Banner.jpg' alt='Banner' fill className='object-cover' />
        <div className='absolute backdrop-blur-md bg-black/40 rounded-xl h-[110px] inset-x-0 mx-3 px-8 py-3 bottom-3 border-gray-300/80 border-[0.5px]'>
          <div className='flex items-center justify-between'>
            <h2 className='text-4xl font-bold max-w-[900px] line-clamp-2'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad
            </h2>

            <div className='flex flex-col items-end gap-4'>
              <div className='flex gap-6 items-center'>
                <div className='flex items-center gap-2'>
                  <Image
                    src='/Banner.jpg'
                    alt='Foto autor do post'
                    width={28}
                    height={28}
                    className='object-cover rounded-full overflow-hidden w-7 h-7'
                  />
                  <p className='font-medium text-[var-(--primary)]'>Jane Doe</p>
                </div>

                <div className='flex gap-2 items-center'>
                  <Image
                    src='/Calendar.svg'
                    alt='Calendário ícone'
                    width={24}
                    height={24}
                  />
                  <p className='font-medium text-[var-(--primary)]'>
                    12 Out, 2025
                  </p>
                </div>
              </div>

              <div className='flex gap-2 items-center'>
                <div className='border-[0.5px] bg-black/20 border-[var(--background)] rounded-md py-1 px-2'>
                  <p className='text-[12px]'>Beleza</p>
                </div>

                <div className='border-[0.5px] bg-black/20 border-[var(--background)] rounded-md py-1 px-2'>
                  <p className='text-[12px]'>Perfume</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Texto da matéria */}
      <p className='text-[var(--secondary)] font-normal leading-8 text-justify'>
        <strong>The standard Lorem Ipsum passage, used since the 1500s</strong>
        <br /> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
        sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum." Section 1.10.32 of "de Finibus Bonorum et
        Malorum", written by Cicero in 45 BC "Sed ut perspiciatis unde omnis
        iste natus error sit voluptatem accusantium doloremque laudantium, totam
        rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
        architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
        quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
        magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
        quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
        adipisci velit, sed quia non numquam eius modi tempora incidunt ut
        labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
        veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,
        nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure
        reprehenderit qui in ea voluptate velit esse quam nihil molestiae
        consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
        pariatur?" 1914 translation by H. Rackham "But I must explain to you how
        all this mistaken idea of denouncing pleasure and praising pain was born
        and I will give you a complete account of the system, and expound the
        actual teachings of the great explorer of the truth, the master-builder
        of human happiness. No one rejects, dislikes, or avoids pleasure itself,
        because it is pleasure, but because those who do not know how to pursue
        pleasure rationally encounter consequences that are extremely painful.
        Nor again is there anyone who loves or pursues or desires to obtain pain
        of itself, because it is pain, but because occasionally circumstances
        occur in which toil and pain can procure him some great pleasure. To
        take a trivial example, which of us ever undertakes laborious physical
        exercise, except to obtain some advantage from it? But who has any right
        to find fault with a man who chooses to enjoy a pleasure that has no
        annoying consequences, or one who avoids a pain that produces no
        resultant pleasure?" Section 1.10.33 of "de Finibus Bonorum et Malorum",
        written by Cicero in 45 BC "At vero eos et accusamus et iusto odio
        dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque
        corrupti quos dolores et quas molestias excepturi sint occaecati
        cupiditate non provident, similique sunt in culpa qui officia deserunt
        mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum
        facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis
        est eligendi optio cumque nihil impedit quo minus id quod maxime placeat
        facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
        Temporibus autem quibusdam et aut officiis debitis aut rerum
        necessitatibus saepe eveniet ut et voluptates repudiandae sint et
        molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente
        delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut
        perferendis doloribus asperiores repellat." 1914 translation by H.
        Rackham "On the other hand, we denounce with righteous indignation and
        dislike men who are so beguiled and demoralized by the charms of
        pleasure of the moment, so blinded by desire, that they cannot foresee
        the pain and trouble that are bound to ensue; and equal blame belongs to
        those who fail in their duty through weakness of will, which is the same
        as saying through shrinking from toil and pain. These cases are
        perfectly simple and easy to distinguish. In a free hour, when our power
        of choice is untrammelled and when nothing prevents our being able to do
        what we like best, every pleasure is to be welcomed and every pain
        avoided. But in certain circumstances and owing to the claims of duty or
        the obligations of business it will frequently occur that pleasures have
        to be repudiated and annoyances accepted. The wise man therefore always
        holds in these matters to this principle of selection: he rejects
        pleasures to secure other greater pleasures, or else he endures pains to
        avoid worse pains."
      </p>

      {/* Produtos relacionados e leia mais */}
      <section>
        {/* Produtos relacionados */}
        <div className='w-full h-px bg-gray-300 mb-6' />
        <div className='flex items-center gap-2'>
          <Image
            src='/Lancamentos.svg'
            alt='Simbbolo jornal'
            width={15}
            height={20}
          />
          <p className='font-semibold text-[var(--secondary)]'>
            Produtos Relacionados
          </p>
        </div>

        {/* Cards */}
        <div className='flex gap-10 mt-6'>
          {/* Card1  */}
          <div className='flex flex-col gap-1'>
            <ProductCard image='/image.png' title='Toy Boy' link='#' />
            <button className='bg-[var(--primary)] py-1.5 rounded-lg font-semibold'>
              R$999,99
            </button>
          </div>

          {/* Card2  */}
          <div className='flex flex-col gap-1'>
            <ProductCard image='/image-1.png' title='Toy Boy' link='#' />
            <button className='bg-[var(--primary)] py-1.5 rounded-lg font-semibold'>
              R$999,99
            </button>
          </div>

          {/* Card3  */}
          <div className='flex flex-col gap-1'>
            <ProductCard image='/image-1.png' title='Toy Boy' link='#' />
            <button className='bg-[var(--primary)] py-1.5 rounded-lg font-semibold'>
              R$999,99
            </button>
          </div>
        </div>

        {/* Leia mais */}
        {/* Título e link "Ver todas" */}
        <div className='w-full h-px bg-gray-300 mt-8' />
        <div className='flex items-center justify-between mt-6'>
          <div className='flex items-center gap-2'>
            <Image
              src='/Journal.svg'
              alt='Simbbolo jornal'
              width={20}
              height={18}
            />
            <p className='font-semibold text-[var(--secondary)]'>Leia Mais</p>
          </div>
          <Link
            href={'/explore'}
            className='flex items-center gap-2 text-[var(--secondary)] font-semibold'
          >
            <p>Ver todas</p>
            <Image src='/Chevron.svg' alt='' width={6} height={12} />
          </Link>
        </div>

        {/* Cards de posts */}
        <div className='flex justify-between gap-5 mt-6'>
          {/* Card1 */}
          <div className='relative w-full h-56 rounded-xl overflow-hidden'>
            <Image
              src='/Banner.jpg'
              alt='Banner'
              fill
              className='object-cover'
            />

            {/* Overlay com informações do post */}
            <div className='absolute flex justify-between items-center bg-black/40 rounded-lg top-3 mx-3 px-4 py-2 border-gray-300/80 border-[0.5px] backdrop-blur-md'>
              <div className='flex gap-3 items-center'>
                <div className='flex items-center gap-1'>
                  <Image
                    src='/Banner.jpg'
                    alt='Foto autor do post'
                    width={16}
                    height={16}
                    className='object-cover rounded-full overflow-hidden w-4 h-4'
                  />
                  <p className='text-sm font-medium text-[var-(--primary)]'>
                    Jane Doe
                  </p>
                </div>

                <div className='flex gap-1 items-center'>
                  <Image
                    src='/Calendar.svg'
                    alt='Calendário ícone'
                    width={16}
                    height={16}
                  />
                  <p className='text-sm font-medium text-[var-(--primary)]'>
                    12 Out, 2025
                  </p>
                </div>
              </div>
            </div>

            {/* Overlay com categorias */}
            <div className='absolute top-3 right-3 flex gap-2 items-center '>
              <div className='border-[0.5px] bg-black/40 border-[var(--background)] rounded-md py-1 px-2 backdrop-blur-md'>
                <p className='text-[12px]'>Beleza</p>
              </div>

              <div className='border-[0.5px] bg-black/40 border-[var(--background)] rounded-md py-1 px-2 backdrop-blur-md'>
                <p className='text-[12px]'>Perfume</p>
              </div>
            </div>

            {/* Overlay com título e botão de leitura */}
            <div className='absolute flex justify-between backdrop-blur-md bg-black/40 rounded-xl inset-x-0 py-2 px-4 bottom-3 mx-3 border-gray-300/80 border-[0.5px]'>
              <h2 className='font-bold max-w-[400px] truncate'>
                Lorem ipsum dolor sit amet, consectetur ad...
              </h2>
              <Link href={'/leitura-materia'}>
                <Image
                  src='/Arrow.svg'
                  alt=''
                  width={24}
                  height={24}
                  className='cursor-pointer'
                />
              </Link>
            </div>
          </div>
          {/* Card2 */}
          <div className='relative w-full h-56 rounded-xl overflow-hidden'>
            <Image
              src='/Banner.jpg'
              alt='Banner'
              fill
              className='object-cover'
            />

            {/* Overlay com informações do post */}
            <div className='absolute flex justify-between items-center bg-black/40 rounded-lg top-3 mx-3 px-4 py-2 border-gray-300/80 border-[0.5px] backdrop-blur-md'>
              <div className='flex gap-3 items-center'>
                <div className='flex items-center gap-1'>
                  <Image
                    src='/Banner.jpg'
                    alt='Foto autor do post'
                    width={16}
                    height={16}
                    className='object-cover rounded-full overflow-hidden w-4 h-4'
                  />
                  <p className='text-sm font-medium text-[var-(--primary)]'>
                    Jane Doe
                  </p>
                </div>

                <div className='flex gap-1 items-center'>
                  <Image
                    src='/Calendar.svg'
                    alt='Calendário ícone'
                    width={16}
                    height={16}
                  />
                  <p className='text-sm font-medium text-[var-(--primary)]'>
                    12 Out, 2025
                  </p>
                </div>
              </div>
            </div>

            {/* Overlay com categorias */}
            <div className='absolute top-3 right-3 flex gap-2 items-center '>
              <div className='border-[0.5px] bg-black/40 border-[var(--background)] rounded-md py-1 px-2 backdrop-blur-md'>
                <p className='text-[12px]'>Beleza</p>
              </div>

              <div className='border-[0.5px] bg-black/40 border-[var(--background)] rounded-md py-1 px-2 backdrop-blur-md'>
                <p className='text-[12px]'>Perfume</p>
              </div>
            </div>

            {/* Overlay com título e botão de leitura */}
            <div className='absolute flex justify-between backdrop-blur-md bg-black/40 rounded-xl inset-x-0 py-2 px-4 bottom-3 mx-3 border-gray-300/80 border-[0.5px]'>
              <h2 className='font-bold max-w-[400px] truncate'>
                Lorem ipsum dolor sit amet, consectetur ad...
              </h2>
              <Link href={'/leitura-materia'}>
                <Image
                  src='/Arrow.svg'
                  alt=''
                  width={24}
                  height={24}
                  className='cursor-pointer'
                />
              </Link>
            </div>
          </div>
          {/* Card3 */}
          <div className='relative w-full h-56 rounded-xl overflow-hidden'>
            <Image
              src='/Banner.jpg'
              alt='Banner'
              fill
              className='object-cover'
            />

            {/* Overlay com informações do post */}
            <div className='absolute flex justify-between items-center bg-black/40 rounded-lg top-3 mx-3 px-4 py-2 border-gray-300/80 border-[0.5px] backdrop-blur-md'>
              <div className='flex gap-3 items-center'>
                <div className='flex items-center gap-1'>
                  <Image
                    src='/Banner.jpg'
                    alt='Foto autor do post'
                    width={16}
                    height={16}
                    className='object-cover rounded-full overflow-hidden w-4 h-4'
                  />
                  <p className='text-sm font-medium text-[var-(--primary)]'>
                    Jane Doe
                  </p>
                </div>

                <div className='flex gap-1 items-center'>
                  <Image
                    src='/Calendar.svg'
                    alt='Calendário ícone'
                    width={16}
                    height={16}
                  />
                  <p className='text-sm font-medium text-[var-(--primary)]'>
                    12 Out, 2025
                  </p>
                </div>
              </div>
            </div>

            {/* Overlay com categorias */}
            <div className='absolute top-3 right-3 flex gap-2 items-center '>
              <div className='border-[0.5px] bg-black/40 border-[var(--background)] rounded-md py-1 px-2 backdrop-blur-md'>
                <p className='text-[12px]'>Beleza</p>
              </div>

              <div className='border-[0.5px] bg-black/40 border-[var(--background)] rounded-md py-1 px-2 backdrop-blur-md'>
                <p className='text-[12px]'>Perfume</p>
              </div>
            </div>

            {/* Overlay com título e botão de leitura */}
            <div className='absolute flex justify-between backdrop-blur-md bg-black/40 rounded-xl inset-x-0 py-2 px-4 bottom-3 mx-3 border-gray-300/80 border-[0.5px]'>
              <h2 className='font-bold max-w-[400px] truncate'>
                Lorem ipsum dolor sit amet, consectetur ad...
              </h2>
              <Link href={'/leitura-materia'}>
                <Image
                  src='/Arrow.svg'
                  alt=''
                  width={24}
                  height={24}
                  className='cursor-pointer'
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
