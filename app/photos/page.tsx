import Image from 'next/image'
import { Camera } from 'lucide-react'
import { photos } from '@/lib/site-data'

const filters = ['All', 'Flowers', 'Mountains', 'Lakes', 'Sunset', 'Macro']

export const metadata = {
  title: 'Photos | Code & Capture',
  description: 'Capturing the beauty of nature with Nikon.',
}

export default function Photography() {
  return (
    <div className='bg-zinc-50 px-4 py-10 dark:bg-zinc-950 sm:px-6 lg:px-8'>
      <div className='mx-auto max-w-6xl'>
        <header>
          <h1 className='text-3xl font-black tracking-normal text-zinc-950 dark:text-white'>
            Photos
          </h1>
          <p className='mt-2 text-sm text-zinc-600 dark:text-zinc-400'>
            Capturing the beauty of nature with Nikon.
          </p>
        </header>

        <div className='mt-6 flex flex-wrap gap-2'>
          {filters.map((filter, index) => (
            <button
              key={filter}
              type='button'
              className={
                index === 0
                  ? 'rounded-md bg-emerald-700 px-4 py-2 text-xs font-bold text-white'
                  : 'rounded-md px-4 py-2 text-xs font-semibold text-zinc-700 transition hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-900'
              }
            >
              {filter}
            </button>
          ))}
        </div>

        <section className='mt-6 grid auto-rows-[180px] grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4'>
          {photos.map((photo, index) => (
            <figure
              key={photo.title}
              className={`group relative overflow-hidden rounded-lg bg-zinc-200 shadow-sm shadow-zinc-950/5 dark:bg-zinc-900 ${photo.className ?? ''}`}
            >
              <Image
                src={photo.src}
                alt={photo.title}
                fill
                sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw'
                className='object-cover transition duration-500 group-hover:scale-105'
              />
              {index === 5 && (
                <figcaption className='absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white'>
                  <p className='flex items-center gap-2 text-sm font-bold'>
                    <Camera className='size-4' />
                    {photo.title}
                  </p>
                  <p className='mt-1 text-xs text-white/80'>{photo.camera}</p>
                  <p className='mt-1 text-xs text-white/80'>{photo.settings}</p>
                </figcaption>
              )}
              {index !== 5 && (
                <figcaption className='absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-black/80 to-transparent p-4 text-white transition duration-300 group-hover:translate-y-0'>
                  <p className='text-sm font-bold'>{photo.title}</p>
                  <p className='mt-1 text-xs text-white/80'>
                    {photo.location}
                  </p>
                </figcaption>
              )}
            </figure>
          ))}
        </section>

      </div>
    </div>
  )
}
