import Image from 'next/image'
import {
  Aperture,
  BookOpen,
  Camera,
  Code2,
  Cpu,
  GraduationCap,
  Leaf,
  MapPin,
  Sparkles,
  Workflow,
} from 'lucide-react'

const profileImage =
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=700&q=80'

const cameraImage =
  'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=600&q=80'

const timeline = [
  {
    years: '2024 - Now',
    title: 'Freelance Developer & Photographer',
    description: 'Building web apps and capturing the beauty of nature.',
  },
  {
    years: '2021 - 2024',
    title: 'Frontend Developer',
    description: 'Worked on multiple SaaS products and design systems.',
  },
  {
    years: '2016 - 2021',
    title: 'Computer Science Degree',
    description: 'Focused on web technologies and user experience.',
  },
  {
    years: '2016 - 2018',
    title: 'Started Photography',
    description: 'Began my photography journey with Nikon DSLR.',
  },
]

const focusItems = [
  'Clean Code',
  'User Experience',
  'Performance',
  'Nature Photography',
  'Minimalism',
  'Continuous Learning',
]

export const metadata = {
  title: 'About | Code & Capture',
  description: 'A developer, a photographer, and a nature lover.',
}

export default function AboutPage() {
  return (
    <div className='bg-zinc-50 px-4 py-10 dark:bg-zinc-950 sm:px-6 lg:px-8'>
      <div className='mx-auto max-w-6xl'>
        <header>
          <h1 className='text-3xl font-black tracking-normal text-zinc-950 dark:text-white'>
            About Me
          </h1>
          <p className='mt-2 text-sm text-zinc-600 dark:text-zinc-400'>
            A developer, a photographer, and a nature lover.
          </p>
        </header>

        <section className='mt-8 grid gap-6 lg:grid-cols-[1fr_1fr]'>
          <div className='rounded-lg border border-zinc-200 bg-white p-6 shadow-sm shadow-zinc-950/5 dark:border-zinc-800 dark:bg-zinc-900'>
            <div className='grid gap-6 sm:grid-cols-[160px_1fr]'>
              <div className='relative mx-auto size-36 overflow-hidden rounded-full sm:mx-0'>
                <Image
                  src={profileImage}
                  alt='Portrait of Jessie'
                  fill
                  sizes='144px'
                  className='object-cover'
                />
              </div>
              <div>
                <h2 className='text-lg font-bold text-zinc-950 dark:text-white'>
                  Hi, I am Jessie.
                </h2>
                <p className='mt-3 text-sm leading-7 text-zinc-700 dark:text-zinc-300'>
                  I build clean, responsive web applications and write about the
                  small decisions that make product interfaces feel calm,
                  practical, and easy to use.
                </p>
                <p className='mt-3 text-sm leading-7 text-zinc-700 dark:text-zinc-300'>
                  Away from the keyboard, I take my Nikon outside and look for
                  flowers, mountains, lakes, and the quiet light in ordinary
                  places.
                </p>
              </div>
            </div>

            <div className='mt-6 grid gap-3 text-sm text-zinc-700 dark:text-zinc-300 sm:grid-cols-2'>
              <span className='flex items-center gap-2'>
                <Code2 className='size-4 text-emerald-600' />
                Frontend Developer
              </span>
              <span className='flex items-center gap-2'>
                <Camera className='size-4 text-emerald-600' />
                Nikon Photographer
              </span>
              <span className='flex items-center gap-2'>
                <MapPin className='size-4 text-emerald-600' />
                China
              </span>
              <span className='flex items-center gap-2'>
                <Leaf className='size-4 text-emerald-600' />
                Nature Lover
              </span>
            </div>

            <div className='mt-8'>
              <h2 className='flex items-center gap-2 text-base font-bold text-zinc-950 dark:text-white'>
                <BookOpen className='size-4 text-zinc-600 dark:text-zinc-300' />
                My Journey
              </h2>
              <div className='mt-5 space-y-0'>
                {timeline.map((item, index) => (
                  <div key={item.title} className='relative flex gap-4 pb-6 last:pb-0'>
                    {index !== timeline.length - 1 && (
                      <span className='absolute left-2 top-5 h-full w-px bg-emerald-200 dark:bg-emerald-800' />
                    )}
                    <span className='relative mt-1 size-4 rounded-full border-4 border-emerald-100 bg-emerald-600 dark:border-emerald-950' />
                    <div>
                      <p className='text-xs font-semibold text-zinc-500'>
                        {item.years}
                      </p>
                      <h3 className='mt-1 text-sm font-bold text-zinc-950 dark:text-white'>
                        {item.title}
                      </h3>
                      <p className='mt-1 text-sm leading-6 text-zinc-600 dark:text-zinc-400'>
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className='space-y-5'>
            <section className='rounded-lg border border-zinc-200 bg-white p-6 shadow-sm shadow-zinc-950/5 dark:border-zinc-800 dark:bg-zinc-900'>
              <h2 className='flex items-center gap-2 text-base font-bold text-zinc-950 dark:text-white'>
                <Sparkles className='size-4 text-zinc-600 dark:text-zinc-300' />
                My Philosophy
              </h2>
              <p className='mt-3 text-sm leading-7 text-zinc-700 dark:text-zinc-300'>
                Code is logic. Photography is emotion. Both help me to express,
                create, and connect with the world.
              </p>
            </section>

            <section className='rounded-lg border border-zinc-200 bg-white p-6 shadow-sm shadow-zinc-950/5 dark:border-zinc-800 dark:bg-zinc-900'>
              <h2 className='flex items-center gap-2 text-base font-bold text-zinc-950 dark:text-white'>
                <Aperture className='size-4 text-zinc-600 dark:text-zinc-300' />
                My Gear
              </h2>
              <div className='mt-4 grid gap-5 sm:grid-cols-[1fr_160px] sm:items-center'>
                <ul className='space-y-2 text-sm text-zinc-700 dark:text-zinc-300'>
                  <li>Nikon Z6 II</li>
                  <li>NIKKOR Z 24-70mm f/2.8 S</li>
                  <li>NIKKOR Z 70-300mm f/2.8 VR S</li>
                  <li>NIKKOR Z 50mm f/1.8 S</li>
                </ul>
                <div className='relative h-28 overflow-hidden rounded-lg'>
                  <Image
                    src={cameraImage}
                    alt='Nikon camera'
                    fill
                    sizes='160px'
                    className='object-cover'
                  />
                </div>
              </div>
            </section>

            <section className='rounded-lg border border-zinc-200 bg-white p-6 shadow-sm shadow-zinc-950/5 dark:border-zinc-800 dark:bg-zinc-900'>
              <h2 className='flex items-center gap-2 text-base font-bold text-zinc-950 dark:text-white'>
                <Workflow className='size-4 text-zinc-600 dark:text-zinc-300' />
                My Focus
              </h2>
              <div className='mt-4 flex flex-wrap gap-2'>
                {focusItems.map((item) => (
                  <span
                    key={item}
                    className='rounded-md border border-zinc-200 px-3 py-2 text-xs font-semibold text-zinc-700 dark:border-zinc-800 dark:text-zinc-300'
                  >
                    {item}
                  </span>
                ))}
              </div>
            </section>

            <section className='grid gap-3 sm:grid-cols-3'>
              {[
                { label: 'Tech', value: '8+', icon: Cpu },
                { label: 'Years', value: '6', icon: GraduationCap },
                { label: 'Photos', value: '1k+', icon: Camera },
              ].map(({ label, value, icon: Icon }) => (
                <div
                  key={label}
                  className='rounded-lg border border-zinc-200 bg-white p-4 shadow-sm shadow-zinc-950/5 dark:border-zinc-800 dark:bg-zinc-900'
                >
                  <Icon className='size-4 text-emerald-600' />
                  <p className='mt-3 text-2xl font-black text-zinc-950 dark:text-white'>
                    {value}
                  </p>
                  <p className='text-xs font-semibold text-zinc-500'>{label}</p>
                </div>
              ))}
            </section>
          </div>
        </section>

      </div>
    </div>
  )
}
