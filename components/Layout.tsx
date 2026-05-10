'use client'

import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AtSign, Camera, Globe, Mail, Moon, Rss, Sun } from 'lucide-react'
import { cn } from '@/lib/utils'

const navItems = [
  { href: '/', label: 'Home', match: ['/'] },
  { href: '/articles', label: 'Articles', match: ['/articles'] },
  { href: '/photos', label: 'Photos', match: ['/photos'] },
  { href: '/projects', label: 'Projects', match: ['/projects'] },
  { href: '/about', label: 'About', match: ['/about'] },
  { href: '/links', label: 'Links', match: ['/links'] },
]

function NavItem({
  href,
  label,
  match,
}: {
  href: string
  label: string
  match: string[]
}) {
  const pathname = usePathname()
  const isActive = match.some((item) =>
    item === '/' ? pathname === '/' : pathname.startsWith(item),
  )

  return (
    <li>
      <Link
        href={href}
        className={cn(
          'relative block px-2.5 py-2 text-[13px] font-medium text-white/80 transition hover:text-white sm:text-sm',
          isActive && 'text-white',
        )}>
        {label}
        {isActive && (
          <span className='absolute inset-x-2 -bottom-px h-0.5 rounded-full bg-emerald-500' />
        )}
      </Link>
    </li>
  )
}

function ThemeToggle() {
  const [isDark, setIsDark] = React.useState(false)

  React.useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains('dark')
    setIsDark(isDarkMode)
  }, [])

  const toggleTheme = () => {
    const next = !isDark
    setIsDark(next)
    document.documentElement.classList.toggle('dark', next)
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label='Toggle dark mode'
      aria-pressed={isDark}
      className='inline-flex size-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/80 transition hover:bg-white/10 hover:text-white'>
      {isDark ? <Moon className='size-4' /> : <Sun className='size-4' />}
    </button>
  )
}

export function Header() {
  return (
    <header className='sticky top-0 z-50 border-b border-white/10 bg-zinc-950 text-white'>
      <div className='mx-auto flex min-h-16 w-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8'>
        <Link href='/' className='flex items-center gap-2 font-semibold'>
          <span className='inline-flex size-8 items-center justify-center rounded-lg border border-white/15 bg-white/5'>
            <Camera className='size-4' />
          </span>
          <span className='whitespace-nowrap text-sm sm:text-base'>
            Code & Capture
          </span>
        </Link>

        <nav className='hidden md:block'>
          <ul className='flex items-center gap-1'>
            {navItems.map((item) => (
              <NavItem key={item.label} {...item} />
            ))}
          </ul>
        </nav>

        <div className='flex items-center gap-2'>
          <ThemeToggle />
          <Link
            href='/links'
            className='inline-flex h-9 items-center rounded-lg bg-emerald-600 px-3 text-xs font-semibold text-white transition hover:bg-emerald-500 sm:px-4 sm:text-sm'>
            Contact Me
          </Link>
        </div>
      </div>
      <nav className='border-t border-white/10 px-3 md:hidden'>
        <ul className='mx-auto flex max-w-7xl items-center justify-center gap-1 overflow-x-auto'>
          {navItems.map((item) => (
            <NavItem key={item.label} {...item} />
          ))}
        </ul>
      </nav>
    </header>
  )
}

export function Footer() {
  return (
    <footer className='border-t border-zinc-100 bg-white py-8 text-zinc-500 dark:border-zinc-800 dark:bg-zinc-950'>
      <div className='mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-5 px-4 text-sm sm:px-6 md:flex-row lg:px-8'>
        <p>© 2026 Code & Capture. All rights reserved.</p>
        <div className='flex items-center gap-4 text-zinc-700 dark:text-zinc-300'>
          <Link
            href='https://github.com'
            aria-label='GitHub'
            className='hover:text-emerald-600'>
            <Globe className='size-4' />
          </Link>
          <Link
            href='https://x.com'
            aria-label='Twitter'
            className='hover:text-emerald-600'>
            <AtSign className='size-4' />
          </Link>
          <Link
            href='https://instagram.com'
            aria-label='Instagram'
            className='hover:text-emerald-600'>
            <Camera className='size-4' />
          </Link>
          <Link
            href='/feed.xml'
            aria-label='RSS'
            className='hover:text-emerald-600'>
            <Rss className='size-4' />
          </Link>
          <Link
            href='mailto:hello@example.com'
            aria-label='Email'
            className='hover:text-emerald-600'>
            <Mail className='size-4' />
          </Link>
        </div>
      </div>
    </footer>
  )
}
