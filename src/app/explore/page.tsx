import Image from 'next/image'
import { PostCard } from '../components/PostCard'

export default function Explore() {
  return (
    <main className='w-[1280px] flex flex-col mt-12'>
      <div className='flex items-center gap-2'>
        <Image
          src='/Journal.svg'
          alt='Simbbolo jornal'
          width={20}
          height={18}
        />
        <p className='font-semibold text-[var(--secondary)]'>Blog Lord</p>
      </div>

      {/* Cards */}
      <div className='grid grid-cols-3 grid-rows-3 w-full h-auto gap-5 mt-4'>
        {/* Card 1 */}
        <PostCard
          banner='/Banner.jpg'
          authorPhoto='/Banner.jpg'
          authorName='Jane Doe'
          date='12 Out, 2025'
          categories={['Beleza', 'Perfume']}
          title='Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        />
        {/* Card 2 */}
        <PostCard
          banner='/Banner.jpg'
          authorPhoto='/Banner.jpg'
          authorName='Jane Doe'
          date='12 Out, 2025'
          categories={['Beleza', 'Perfume']}
          title='Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        />
        {/* Card 3 */}
        <PostCard
          banner='/Banner.jpg'
          authorPhoto='/Banner.jpg'
          authorName='Jane Doe'
          date='12 Out, 2025'
          categories={['Beleza', 'Perfume']}
          title='Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        />
        {/* Card 4 */}
        <PostCard
          banner='/Banner.jpg'
          authorPhoto='/Banner.jpg'
          authorName='Jane Doe'
          date='12 Out, 2025'
          categories={['Beleza', 'Perfume']}
          title='Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        />
        {/* Card 5 */}
        <PostCard
          banner='/Banner.jpg'
          authorPhoto='/Banner.jpg'
          authorName='Jane Doe'
          date='12 Out, 2025'
          categories={['Beleza', 'Perfume']}
          title='Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        />
        {/* Card 6 */}
        <PostCard
          banner='/Banner.jpg'
          authorPhoto='/Banner.jpg'
          authorName='Jane Doe'
          date='12 Out, 2025'
          categories={['Beleza', 'Perfume']}
          title='Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        />
        {/* Card 7 */}
        <PostCard
          banner='/Banner.jpg'
          authorPhoto='/Banner.jpg'
          authorName='Jane Doe'
          date='12 Out, 2025'
          categories={['Beleza', 'Perfume']}
          title='Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        />
        {/* Card 8 */}
        <PostCard
          banner='/Banner.jpg'
          authorPhoto='/Banner.jpg'
          authorName='Jane Doe'
          date='12 Out, 2025'
          categories={['Beleza', 'Perfume']}
          title='Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        />
        {/* Card 9 */}
        <PostCard
          banner='/Banner.jpg'
          authorPhoto='/Banner.jpg'
          authorName='Jane Doe'
          date='12 Out, 2025'
          categories={['Beleza', 'Perfume']}
          title='Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        />
      </div>

      {/* Pagination */}
    </main>
  )
}
