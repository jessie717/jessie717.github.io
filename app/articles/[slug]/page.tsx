import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight, Calendar, Clock } from 'lucide-react'
import { articles } from '@/lib/site-data'

type ArticlePageProps = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }))
}

export async function generateMetadata({ params }: ArticlePageProps) {
  const { slug } = await params
  const article = articles.find((item) => item.slug === slug)

  if (!article) {
    return {
      title: 'Article | Code & Capture',
    }
  }

  return {
    title: `${article.title} | Code & Capture`,
    description: article.description,
  }
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params
  const article = articles.find((item) => item.slug === slug)

  if (!article) {
    notFound()
  }

  return (
    <div className='bg-zinc-50 px-4 py-10 dark:bg-zinc-950 sm:px-6 lg:px-8'>
      <article className='mx-auto max-w-3xl'>
        <Link
          href='/articles'
          className='inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 hover:text-emerald-600 dark:text-emerald-400'
        >
          <ArrowRight className='size-4 rotate-180' />
          Back to Articles
        </Link>

        <header className='mt-8'>
          <span className='rounded-md bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-800 dark:bg-emerald-500/15 dark:text-emerald-300'>
            {article.category}
          </span>
          <h1 className='mt-5 text-3xl font-black leading-tight tracking-normal text-zinc-950 dark:text-white sm:text-5xl'>
            {article.title}
          </h1>
          <p className='mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400'>
            {article.description}
          </p>
          <div className='mt-5 flex flex-wrap items-center gap-4 text-sm text-zinc-500 dark:text-zinc-400'>
            <span className='inline-flex items-center gap-1.5'>
              <Calendar className='size-4' />
              {article.date}
            </span>
            <span className='inline-flex items-center gap-1.5'>
              <Clock className='size-4' />
              {article.readTime}
            </span>
          </div>
        </header>

        <div className='relative mt-8 aspect-[16/9] overflow-hidden rounded-lg'>
          <Image
            src={article.image}
            alt=''
            fill
            sizes='(max-width: 768px) 100vw, 768px'
            className='object-cover'
            priority
          />
        </div>

        <div className='mt-8 rounded-lg border border-zinc-200 bg-white p-6 shadow-sm shadow-zinc-950/5 dark:border-zinc-800 dark:bg-zinc-900 sm:p-8'>
          <div className='space-y-6 text-base leading-8 text-zinc-700 dark:text-zinc-300'>
            {article.content.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

      </article>
    </div>
  )
}
