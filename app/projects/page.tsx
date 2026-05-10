import Image from 'next/image'
import Link from 'next/link'
import { Code2, ExternalLink } from 'lucide-react'
import { projects } from '@/lib/site-data'

export const metadata = {
  title: 'Projects | Code & Capture',
  description: 'Selected web apps and tools I have built.',
}

export default function Projects() {
  return (
    <div className='bg-zinc-50 px-4 py-10 dark:bg-zinc-950 sm:px-6 lg:px-8'>
      <div className='mx-auto max-w-6xl'>
        <header>
          <h1 className='text-3xl font-black tracking-normal text-zinc-950 dark:text-white'>
            Projects
          </h1>
          <p className='mt-2 text-sm text-zinc-600 dark:text-zinc-400'>
            Selected web apps and tools I have built.
          </p>
        </header>

        <section className='mt-8 grid gap-5 sm:grid-cols-2'>
          {projects.map((project) => (
            <article
              key={project.name}
              className='overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm shadow-zinc-950/5 dark:border-zinc-800 dark:bg-zinc-900'>
              <div className='relative h-48'>
                <Image
                  src={project.image}
                  alt=''
                  fill
                  sizes='(max-width: 768px) 100vw, 50vw'
                  className='object-cover'
                />
              </div>
              <div className='p-5'>
                <h2 className='text-lg font-bold text-zinc-950 dark:text-white'>
                  {project.name}
                </h2>
                <p className='mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400'>
                  {project.description}
                </p>
                <div className='mt-4 flex flex-wrap gap-2'>
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className='rounded-md bg-zinc-100 px-2 py-1 text-xs font-semibold text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300'>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className='mt-5 flex items-center gap-3 text-sm font-semibold'>
                  <Link
                    href={project.href}
                    className='inline-flex items-center gap-1.5 text-zinc-500 transition hover:text-emerald-700 dark:text-zinc-400 dark:hover:text-emerald-400'>
                    <Code2 className='size-4' />
                    GitHub
                  </Link>
                  <Link
                    href={project.href}
                    className='inline-flex items-center gap-1.5 text-zinc-500 transition hover:text-emerald-700 dark:text-zinc-400 dark:hover:text-emerald-400'>
                    <ExternalLink className='size-4' />
                    Live Demo
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </section>
      </div>
    </div>
  )
}
