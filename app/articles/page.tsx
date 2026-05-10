import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Calendar, Clock } from 'lucide-react'
import { articles, categories } from '@/lib/site-data'

export const metadata = {
  title: 'Articles | Code & Capture',
  description: 'Thoughts on code, tools, and photography.',
}

export default function Articles() {
  return (
    <div className='bg-zinc-50 px-4 py-10 dark:bg-zinc-950 sm:px-6 lg:px-8'>
      <div className='mx-auto max-w-6xl'>
        <header>
          <h1 className='text-3xl font-black tracking-normal text-zinc-950 dark:text-white'>
            Articles
          </h1>
          <p className='mt-2 text-sm text-zinc-600 dark:text-zinc-400'>
            Thoughts on code, tools, and photography.
          </p>
        </header>

        <div className='mt-8 grid gap-8 lg:grid-cols-[190px_1fr]'>
          <aside>
            <h2 className='text-sm font-bold text-zinc-950 dark:text-white'>
              Categories
            </h2>
            <nav className='mt-4 flex gap-2 overflow-x-auto pb-2 lg:block lg:space-y-1 lg:overflow-visible lg:pb-0'>
              {categories.map((category, index) => (
                <Link
                  key={category}
                  href='/articles'
                  className={
                    index === 0
                      ? 'block whitespace-nowrap rounded-md bg-emerald-100 px-3 py-2 text-sm font-semibold text-emerald-800 dark:bg-emerald-500/15 dark:text-emerald-300'
                      : 'block whitespace-nowrap rounded-md px-3 py-2 text-sm font-medium text-zinc-700 transition hover:bg-zinc-100 hover:text-zinc-950 dark:text-zinc-300 dark:hover:bg-zinc-900 dark:hover:text-white'
                  }
                >
                  {category}
                </Link>
              ))}
            </nav>
          </aside>

          <section className='overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm shadow-zinc-950/5 dark:border-zinc-800 dark:bg-zinc-900'>
            {articles.map((article) => (
              <article
                key={article.slug}
                className='grid gap-5 border-b border-zinc-100 p-4 last:border-b-0 dark:border-zinc-800 sm:grid-cols-[180px_1fr] sm:p-6'
              >
                <Link
                  href={`/articles/${article.slug}`}
                  className='relative h-36 overflow-hidden rounded-md sm:h-32'
                  aria-label={article.title}
                >
                  <Image
                    src={article.image}
                    alt=''
                    fill
                    sizes='(max-width: 640px) 100vw, 180px'
                    className='object-cover transition duration-500 hover:scale-105'
                  />
                </Link>
                <div>
                  <h2 className='text-lg font-bold leading-snug text-zinc-950 dark:text-white'>
                    <Link
                      href={`/articles/${article.slug}`}
                      className='transition hover:text-emerald-700 dark:hover:text-emerald-400'
                    >
                      {article.title}
                    </Link>
                  </h2>
                  <p className='mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400'>
                    {article.description}
                  </p>
                  <div className='mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-zinc-500 dark:text-zinc-400'>
                    <span className='inline-flex items-center gap-1.5'>
                      <Calendar className='size-3.5' />
                      {article.date}
                    </span>
                    <span className='inline-flex items-center gap-1.5'>
                      <Clock className='size-3.5' />
                      {article.readTime}
                    </span>
                    <span className='rounded-md bg-zinc-100 px-2 py-1 font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300'>
                      {article.category}
                    </span>
                  </div>
                </div>
              </article>
            ))}

            <div className='flex items-center justify-center gap-2 border-t border-zinc-100 p-5 text-sm dark:border-zinc-800'>
              {[1, 2, 3].map((page) => (
                <span
                  key={page}
                  className={
                    page === 1
                      ? 'inline-flex size-8 items-center justify-center rounded-md bg-emerald-100 font-bold text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300'
                      : 'inline-flex size-8 items-center justify-center rounded-md font-semibold text-zinc-600 dark:text-zinc-300'
                  }
                >
                  {page}
                </span>
              ))}
              <span className='px-2 text-zinc-400'>...</span>
              <span className='inline-flex size-8 items-center justify-center rounded-md font-semibold text-zinc-600 dark:text-zinc-300'>
                8
              </span>
              <ArrowRight className='size-4 text-zinc-500' />
            </div>
          </section>
        </div>

      </div>
    </div>
  )
}
