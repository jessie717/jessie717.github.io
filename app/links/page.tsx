import Image from 'next/image'
import Link from 'next/link'
import type { ComponentType } from 'react'
import {
  AtSign,
  Camera,
  Code2,
  ExternalLink,
  Globe,
  Mail,
  Mountain,
  Rss,
  Send,
} from 'lucide-react'
import { socialLinks } from '@/lib/site-data'

const bannerImage =
  'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1100&q=80'

const iconMap: Record<string, ComponentType<{ className?: string }>> = {
  GitHub: Code2,
  'Twitter / X': AtSign,
  Instagram: Camera,
  '500px': Mountain,
  掘金: Globe,
  Email: Mail,
  'Articles RSS': Rss,
  Vercel: Send,
  YouTube: ExternalLink,
}

export const metadata = {
  title: 'Links | Code & Capture',
  description: 'Connect with me on these platforms.',
}

export default function LinksPage() {
  return (
    <div className='bg-zinc-50 px-4 py-10 dark:bg-zinc-950 sm:px-6 lg:px-8'>
      <div className='mx-auto max-w-6xl'>
        <header>
          <h1 className='text-3xl font-black tracking-normal text-zinc-950 dark:text-white'>
            Links
          </h1>
          <p className='mt-2 text-sm text-zinc-600 dark:text-zinc-400'>
            Connect with me on these platforms.
          </p>
        </header>

        <section className='mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3'>
          {socialLinks.map((item) => {
            const Icon = iconMap[item.label] ?? Globe

            return (
              <Link
                key={item.label}
                href={item.href}
                className='group rounded-lg border border-zinc-200 bg-white p-5 shadow-sm shadow-zinc-950/5 transition hover:-translate-y-0.5 hover:border-emerald-200 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-emerald-900'>
                <div className='flex items-center gap-4'>
                  <span className='inline-flex size-10 items-center justify-center rounded-lg bg-zinc-50 text-zinc-800 ring-1 ring-zinc-200 transition group-hover:bg-emerald-50 group-hover:text-emerald-700 dark:bg-zinc-950 dark:text-zinc-200 dark:ring-zinc-800 dark:group-hover:bg-emerald-950/40 dark:group-hover:text-emerald-300'>
                    <Icon className='size-4' />
                  </span>
                  <div className='min-w-0'>
                    <h2 className='text-sm font-bold text-zinc-950 dark:text-white'>
                      {item.label}
                    </h2>
                    <p className='mt-1 truncate text-xs text-zinc-500 dark:text-zinc-400'>
                      {item.value}
                    </p>
                  </div>
                </div>
              </Link>
            )
          })}
        </section>

        <section className='mt-6 grid gap-5 rounded-lg border border-zinc-200 bg-white p-5 shadow-sm shadow-zinc-950/5 dark:border-zinc-800 dark:bg-zinc-900 lg:grid-cols-[1fr_360px] lg:items-center'>
          <div className='border-l-4 border-emerald-600 pl-4'>
            <p className='text-lg font-black leading-8 text-zinc-950 dark:text-white'>
              Stay curious. Keep building.
              <br />
              Capture beauty. That&apos;s my way.
            </p>
          </div>
          <div className='relative h-40 overflow-hidden rounded-lg'>
            <Image
              src={bannerImage}
              alt='Mountain sunset'
              fill
              sizes='(max-width: 1024px) 100vw, 360px'
              className='object-cover'
            />
          </div>
        </section>

      </div>
    </div>
  )
}
