export function Newsletter() {
  return (
    <section className='px-0 mt-12 w-full max-w-7xl'>
      <div className='w-full h-px bg-gray-300 mb-6' />
      <div className='bg-gray-200 p-8 rounded-xl xl:flex xl:gap-5 xl:justify-center'>
        <div>
          <h2 className='text-[var(--primary)] font-semibold'>
            Assine nossa Newsletter
          </h2>
          <p className='text-xs text-[var(--secondary)]'>
            Receba as novidades em primeira mão
          </p>
        </div>

        <form className='contents' onSubmit={(e) => e.preventDefault()}>
          <input
            type='text'
            placeholder='Nome'
            className='border text-[var(--secondary)] placeholder:text-[var(--secondary)] border-white bg-[var(--background)] rounded-lg text-sm p-3 w-full xl:w-64 focus:border-[var(--primary)] focus:outline-none focus:ring-[0.5px] focus:ring-[var(--primary)] mt-4 xl:mt-0'
          />

          <input
            type='email'
            placeholder='E-mail'
            className='border text-[var(--secondary)] placeholder:text-[var(--secondary)] border-white bg-[var(--background)] rounded-lg text-sm p-3 w-full xl:w-64 focus:border-[var(--primary)] focus:outline-none focus:ring-[0.5px] focus:ring-[var(--primary)] mt-4 xl:mt-0'
          />

          <button type="submit" className='relative group text-[var(--background)] font-semibold cursor-pointer p-3 rounded-lg overflow-hidden z-0 mt-4 xl:mt-0'>
            {/* Fundo */}
            <span className='absolute inset-0 bg-[#7A0026] transition duration-300 group-hover:brightness-70 z-[-1] rounded-lg' />
            Cadastrar
          </button>
        </form>
      </div>
    </section>
  )
}
