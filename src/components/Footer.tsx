import React from 'react'
import { HiOutlineMailOpen } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import Image from 'next/image';
import Link from 'next/link';
import Blank from './Blank';

const Footer = () => {
  const contactList = [
    {
      type: 'email',
      href: 'mailto:keepgo.studio@gmail.com',
      icon: <HiOutlineMailOpen />
    },
    {
      type: 'github',
      href: 'https://github.com/keepgo-studio',
      icon: <FaGithub />
    },
    {
      type: 'youtube',
      href: 'https://www.youtube.com/@bapsang',
      icon: <FaYoutube />
    },

  ]
  return (
    <footer className='h-52 inter border-t-4 border-personal bg-slate-100'>
      <div className='m-auto w-full h-full max-w-7xl grid grid-cols-[300px_1fr]'>
        <section className='p-6'>
          <div className='flex items-center'>
            <Image alt='favicon' src='/logo.png' width={24} height={24}/>
            <h4 className='ml-2 text-xs'>Keepgo&#39;s blog</h4>
          </div>
        </section>
        
        <section className='p-6 text-sm'>
          <div className='pl-5 relative'>
            <div className='bg-personal w-3 h-full absolute top-0 left-0'/>
            <h4 className='font-bold'>Contact</h4>
          </div>
          
          <Blank height={"1rem"}/>

          <ul className='flex flex-col'>
          {contactList.map(({ type, href, icon }) => (
            <li key={type}>
              <Link 
                className='flex w-fit gap-1 p-1 items-center hover:bg-gray-200 duration-300 rounded-md'
                href={href}
              >
                {" · "}
                <span>{icon}</span>
                <span>{type}</span>
              </Link>
            </li>
          ))}
          </ul>
        </section>
      </div>
    </footer>
  )
}

export default Footer;