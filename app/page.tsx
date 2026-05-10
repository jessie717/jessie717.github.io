import Image from 'next/image'
import Link from 'next/link'
import type { ComponentType, ReactNode } from 'react'
import {
  Aperture,
  ArrowRight,
  Camera,
  Code2,
  Database,
  ExternalLink,
  Heart,
  ImageIcon,
  Laptop,
  Leaf,
  MapPin,
  Newspaper,
  Server,
} from 'lucide-react'

const heroImage =
  'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=2200&q=85'

const profileImage =
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80'

const projects = [
  {
    name: 'next-fullstack-starter',
    description:
      'A full-stack Next.js starter with auth, database, and deployment.',
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=500&q=80',
    tags: ['Next.js', 'TypeScript', 'TailwindCSS'],
  },
  {
    name: 'bun-elysia-api-kit',
    description: 'Modern RESTful API kit with Bun, Elysia, and TypeScript.',
    image:
      'https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?auto=format&fit=crop&w=500&q=80',
    tags: ['Bun', 'Elysia', 'TypeScript'],
  },
  {
    name: 'react-photo-gallery',
    description: 'Beautiful responsive photo gallery built with React.',
    image:
      'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=500&q=80',
    tags: ['React', 'TailwindCSS'],
  },
  {
    name: 'LensNote',
    description: 'A photography notes app for locations, settings, and ideas.',
    image:
      'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=500&q=80',
    tags: ['Next.js', 'PostgreSQL'],
  },
]

const photos = [
  {
    title: 'Lotus after rain',
    src: 'https://images.unsplash.com/photo-1508610048659-a06b669e3321?auto=format&fit=crop&w=700&q=80',
    className: 'sm:row-span-2',
  },
  {
    title: 'Alpine mirror',
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=700&q=80',
    className: '',
  },
  {
    title: 'Sunset shore',
    src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=700&q=80',
    className: '',
  },
  {
    title: 'Wild daisies',
    src: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=700&q=80',
    className: '',
  },
  {
    title: 'Valley river',
    src: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=900&q=80',
    className: 'sm:col-span-2',
  },
]

const techStack = [
  { name: 'React', icon: Code2 },
  { name: 'Next.js', icon: Laptop },
  { name: 'Node.js', icon: Server },
  { name: 'Bun.js', icon: Aperture },
  { name: 'Elysia', icon: Leaf },
  { name: 'TypeScript', icon: Code2 },
  { name: 'TailwindCSS', icon: ImageIcon },
  { name: 'PostgreSQL', icon: Database },
]

function SectionTitle({
  icon: Icon,
  title,
  action,
}: {
  icon: ComponentType<{ className?: string }>
  title: string
  action?: ReactNode
}) {
  return (
    <div className='mb-5 flex items-center justify-between gap-4'>
      <h2 className='flex items-center gap-2 text-base font-bold text-zinc-950 dark:text-white'>
        <Icon className='size-4 text-zinc-700 dark:text-zinc-300' />
        {title}
      </h2>
      {action}
    </div>
  )
}

export default function Home() {
  return (
    <div className='bg-zinc-50 dark:bg-zinc-950'>
      <section className='relative min-h-130 overflow-hidden bg-zinc-950'>
        <Image
          src={heroImage}
          alt='Sunset over a mountain valley'
          fill
          priority
          sizes='(max-width: 1280px) 100vw, 1280px'
          className='object-cover'
        />
        <div className='absolute inset-0 bg-linear-to-r from-black/85 via-black/45 to-black/10' />
        <div className='absolute inset-0 bg-linear-to-t from-black/55 via-transparent to-transparent' />

        <div className='relative mx-auto flex min-h-130 max-w-7xl items-center px-4 py-16 sm:px-6 lg:px-8'>
          <div className='max-w-2xl text-white'>
            <p className='text-sm font-semibold text-emerald-400'>
              Hi, I&apos;m a Developer & Photographer
            </p>
            <h1 className='mt-4 max-w-xl text-4xl font-black leading-tight tracking-normal sm:text-6xl'>
              I code for a living, I shoot to feel alive.
            </h1>
            <p className='mt-5 max-w-lg text-base leading-7 text-white/85'>
              A frontend developer who loves building beautiful web experiences
              and capturing the beauty of nature with Nikon.
            </p>
            <div className='mt-8 flex flex-wrap gap-3'>
              <Link
                href='/articles'
                className='inline-flex h-11 items-center gap-2 rounded-lg bg-emerald-600 px-5 text-sm font-bold text-white transition hover:bg-emerald-500'>
                <Newspaper className='size-4' />
                Latest Articles
              </Link>
              <Link
                href='/photos'
                className='inline-flex h-11 items-center gap-2 rounded-lg border border-white/35 bg-black/25 px-5 text-sm font-bold text-white backdrop-blur transition hover:bg-white/10'>
                <Camera className='size-4' />
                View My Photos
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className='mx-auto max-w-7xl space-y-12 px-4 py-8 sm:px-6 sm:py-10 lg:px-8'>
        <section
          id='about'
          className='grid gap-5 lg:grid-cols-[1.08fr_0.92fr]'
          aria-label='About and tech stack'>
          <div className='rounded-lg border border-zinc-200 bg-white p-5 shadow-sm shadow-zinc-950/5 dark:border-zinc-800 dark:bg-zinc-900'>
            <h2 className='border-l-4 border-emerald-600 pl-3 text-base font-bold text-zinc-950 dark:text-white'>
              About Me
            </h2>
            <div className='mt-5 grid gap-5 sm:grid-cols-[140px_1fr]'>
              <div className='relative mx-auto size-32 overflow-hidden rounded-full sm:mx-0'>
                <Image
                  src={profileImage}
                  alt='Portrait of Jessie'
                  fill
                  sizes='128px'
                  className='object-cover'
                />
              </div>
              <div>
                <p className='text-sm leading-7 text-zinc-700 dark:text-zinc-300'>
                  I&apos;m a frontend developer based in China. I love building
                  clean, responsive web applications and exploring modern
                  technologies.
                </p>
                <p className='mt-3 text-sm leading-7 text-zinc-700 dark:text-zinc-300'>
                  Nature keeps me inspired. I use Nikon to capture flowers,
                  mountains, lakes, and the beauty of the world around me.
                </p>
                <div className='mt-5 grid gap-3 text-sm text-zinc-700 dark:text-zinc-300 sm:grid-cols-2'>
                  <span className='flex items-center gap-2'>
                    <Code2 className='size-4 text-zinc-500' />
                    Frontend Developer
                  </span>
                  <span className='flex items-center gap-2'>
                    <Camera className='size-4 text-zinc-500' />
                    Nikon Photographer
                  </span>
                  <span className='flex items-center gap-2'>
                    <MapPin className='size-4 text-zinc-500' />
                    China
                  </span>
                  <span className='flex items-center gap-2'>
                    <Heart className='size-4 text-zinc-500' />
                    Nature Lover
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className='rounded-lg border border-zinc-200 bg-white p-5 shadow-sm shadow-zinc-950/5 dark:border-zinc-800 dark:bg-zinc-900'>
            <h2 className='border-l-4 border-emerald-600 pl-3 text-base font-bold text-zinc-950 dark:text-white'>
              Tech Stack
            </h2>
            <div className='mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3'>
              {techStack.map(({ name, icon: Icon }) => (
                <div
                  key={name}
                  className='flex h-12 items-center gap-2 rounded-lg border border-zinc-200 bg-white px-3 text-sm font-medium text-zinc-800 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200'>
                  <Icon className='size-4 text-emerald-600' />
                  {name}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className='grid gap-8 lg:grid-cols-[1fr_1fr]'>
          <div>
            <SectionTitle
              icon={Laptop}
              title='Latest Projects'
              action={
                <Link
                  href='/projects'
                  className='inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 hover:text-emerald-600 dark:text-emerald-400'>
                  View all projects
                  <ArrowRight className='size-3.5' />
                </Link>
              }
            />
            <div className='divide-y divide-zinc-100 rounded-lg border border-zinc-200 bg-white dark:divide-zinc-800 dark:border-zinc-800 dark:bg-zinc-900'>
              {projects.map((project) => (
                <article
                  key={project.name}
                  className='grid gap-4 p-4 sm:grid-cols-[76px_1fr]'>
                  <div className='relative h-20 overflow-hidden rounded-md sm:h-[76px]'>
                    <Image
                      src={project.image}
                      alt=''
                      fill
                      sizes='96px'
                      className='object-cover'
                    />
                  </div>
                  <div>
                    <h3 className='text-sm font-bold text-zinc-950 dark:text-white'>
                      {project.name}
                    </h3>
                    <p className='mt-1 text-xs leading-5 text-zinc-600 dark:text-zinc-400'>
                      {project.description}
                    </p>
                    <div className='mt-3 flex flex-wrap items-center gap-2'>
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className='rounded-md bg-zinc-100 px-2 py-1 text-[11px] font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300'>
                          {tag}
                        </span>
                      ))}
                      <Link
                        href='https://github.com'
                        className='ml-auto inline-flex items-center gap-1 text-[11px] font-semibold text-zinc-500 hover:text-emerald-600'>
                        <Code2 className='size-3' />
                        GitHub
                      </Link>
                      <Link
                        href='/projects'
                        className='inline-flex items-center gap-1 text-[11px] font-semibold text-zinc-500 hover:text-emerald-600'>
                        <ExternalLink className='size-3' />
                        Live Demo
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div>
            <SectionTitle
              icon={ImageIcon}
              title='Latest Photos'
              action={
                <Link
                  href='/photos'
                  className='inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 hover:text-emerald-600 dark:text-emerald-400'>
                  View all photos
                  <ArrowRight className='size-3.5' />
                </Link>
              }
            />
            <div className='grid auto-rows-[150px] grid-cols-1 gap-3 sm:grid-cols-3'>
              {photos.map((photo) => (
                <figure
                  key={photo.title}
                  className={`relative overflow-hidden rounded-lg ${photo.className}`}>
                  <Image
                    src={photo.src}
                    alt={photo.title}
                    fill
                    sizes='(max-width: 1024px) 33vw, 220px'
                    className='object-cover transition duration-500 hover:scale-105'
                  />
                </figure>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
