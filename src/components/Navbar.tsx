'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaHome } from "react-icons/fa";

/**
 * 1. About me
 * 2. Projects
 * 3. Posts
 * 4. Experiences
 */

const ITEMS = [
  {
    title: <FaHome />,
    href: '/'
  },
  {
    title: "about me",
    href: '/about'
  },
  {
    title: "posts",
    href: '/posts'
  },
  {
    title: "experiences",
    href: '/exp'
  },
] as const;

const Navbar = () => {
  const pathname = usePathname();

  useEffect(() => {}, [pathname])

  return (
    <nav className='bg-semi-dark noto-sans flex sticky top-0 left-0 h-14 items-center justify-between px-4 shadow-md'>
      <section>
        <Link href='/' className='block hover:scale-[1.05] duration-300'>
          <Image alt='favicon icon' src='/logo.png' width={32} height={32}/>
        </Link>
      </section>

      <ul className='flex gap-1 text-sm'>
      {ITEMS.map(({ title, href })=> (
        <li key={href} className={`
          fcenter
          capitalize
          ${pathname === href ? 'text-red-500' : ''}
        `}>
          <Link
            className='block hover:bg-gray-950 duration-300 p-2 rounded-md'
            href={href}
          >{title}</Link>
        </li>
      ))}
      </ul>
    </nav>
  )
}

export default Navbar