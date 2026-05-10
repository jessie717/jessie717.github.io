import { Mail, Send } from 'lucide-react'

export function SubscribeBanner() {
  return (
    <section className='rounded-lg border border-emerald-900/10 bg-emerald-50/70 p-4 shadow-sm shadow-zinc-950/5 dark:border-emerald-400/10 dark:bg-emerald-950/20 sm:p-5'>
      <div className='grid gap-4 md:grid-cols-[1fr_1.5fr] md:items-center'>
        <div className='flex items-center gap-3'>
          <span className='inline-flex size-10 items-center justify-center rounded-lg border border-emerald-600/20 bg-white text-emerald-700 dark:bg-zinc-950 dark:text-emerald-400'>
            <Mail className='size-5' />
          </span>
          <div>
            <h2 className='text-sm font-bold text-zinc-950 dark:text-white'>
              Subscribe to my updates
            </h2>
            <p className='mt-1 text-xs text-zinc-600 dark:text-zinc-400'>
              Get the latest articles and photos delivered to your inbox.
            </p>
          </div>
        </div>
        <form className='grid gap-3 sm:grid-cols-[1fr_1fr_auto]'>
          <input
            type='text'
            placeholder='Your name'
            className='h-10 rounded-md border border-zinc-200 bg-white px-3 text-sm outline-none transition placeholder:text-zinc-400 focus:border-emerald-500 dark:border-zinc-800 dark:bg-zinc-900'
          />
          <input
            type='email'
            placeholder='Your email'
            className='h-10 rounded-md border border-zinc-200 bg-white px-3 text-sm outline-none transition placeholder:text-zinc-400 focus:border-emerald-500 dark:border-zinc-800 dark:bg-zinc-900'
          />
          <button
            type='button'
            className='inline-flex h-10 items-center justify-center gap-2 rounded-md bg-emerald-700 px-4 text-sm font-semibold text-white transition hover:bg-emerald-600'
          >
            <Send className='size-4' />
            Subscribe
          </button>
        </form>
      </div>
    </section>
  )
}
