'use client'

import { useState, useEffect, ChangeEvent, useTransition } from 'react'
import { useRouter } from 'next/navigation'

import Link from 'next/link'
import Image from 'next/image'
import WhiteLogo from '../../../../public/navbar/logowhite1.png'
import Logo from '../../../../public/navbar/logo1.png'
import globe from '../../../../public/navbar/world.png'

import MobileMenu from '@/app/components/en/NavbarMobile'

export default function Header() {
  const [scrolled, setScrolled] = useState<boolean>(false)
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  const router = useRouter();

  // detect whether user has scrolled the page down
  const scrollHandler = () => {
    setScrollPosition(window.pageYOffset)
    setScrolled(window.pageYOffset > 10)
  }  

  // const onSelectChange = (e: ChangeEvent<HTMLAnchorElement>) => {
  //   const nextLocale = e.target.value;
  //   startTransition(() => {
  //     router.push(`/${nextLocale}`);
  //   });
  // }

  // const onSelectChange = (e: React.ChangeEvent<HTMLAnchorElement>) => {
  //   e.preventDefault(); // Prevent the default behavior of the anchor tag
    
  //   const nextLocale = e.currentTarget.href; // Get the value of the href attribute
  //   startTransition(() => {
  //     router.push(nextLocale); // Push the next locale to the router
  //   });
  // }

  useEffect(() => {
    scrollHandler()
    window.addEventListener('scroll', scrollHandler)
    return () => window.removeEventListener('scroll', scrollHandler)
  }, [])

  return (
    <header className={`fixed w-full z-30 md:bg-opacity-100 transition duration-300 ease-in-out ${scrolled ? 'bg-white backdrop-blur-sm shadow-lg' : ''}`}>
      <div className="max-w-7xl mx-auto px-6 py-1 max-lg:py-2 ">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Site branding */}
          <div className="shrink-0 mr-4 z-30">
            <Link href="/">
              {scrolled ? (
                <Image src={Logo} alt='tes' className='w-[100px] max-md:w-[70px] drop-shadow-2xl'></Image>
              ) : (
                <Image src={WhiteLogo} alt='tes' className=' w-[100px] max-md:w-[70px] drop-shadow-2xl'></Image>
              )}
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link href="/aboutus" className={`font-medium text-[17px] ${scrolled ? 'text-black' : 'text-white'} hover:text-gray-600 px-5 py-3 flex items-center transition duration-150 ease-in-out drop-shadow-2xl`}>About Us</Link>
              </li>
              <li>
                <Link href="/signin" className={`font-medium text-[17px] ${scrolled ? 'text-black' : 'text-white'} hover:text-gray-600 px-5 py-3 flex items-center transition duration-150 ease-in-out drop-shadow-2xl`}>Services</Link>
              </li>
              <li>
                <Link href="/article" className={`font-medium text-[17px] ${scrolled ? 'text-black' : 'text-white'} hover:text-gray-600 px-5 py-3 flex items-center transition duration-150 ease-in-out drop-shadow-2xl`}>Article</Link>
              </li>
              <li>
                <Link href="/signin" className={`font-medium text-[17px] ${scrolled ? 'text-black' : 'text-white'} hover:text-gray-600 px-5 py-3 flex items-center transition duration-150 ease-in-out drop-shadow-2xl`}>Contact Us</Link>
              </li>
              <div className='flex flex-wrap items-center px-4'>
                <Image src={globe} alt='lang' className={`w-[30px] ${scrolled ? 'filter invert' : ''} drop-shadow-2xl`} />
                <button onClick={() => router.push("/en")} className={`font-medium text-[17px] ${scrolled ? 'text-black' : 'text-white'} hover:text-gray-600 px-1 py-3 flex items-center transition duration-150 ease-in-out drop-shadow-2xl focus:outline-none`}>EN</button>
                <p className={`font-medium text-[17px] ${scrolled ? 'text-black' : 'text-white'} py-3 flex items-center transition duration-150 ease-in-out drop-shadow-2xl`}>|</p>
                <button onClick={() => router.push("/id")} className={`font-medium text-[17px] ${scrolled ? 'text-black' : 'text-white'} hover:text-gray-600 px-1 py-3 flex items-center transition duration-150 ease-in-out drop-shadow-2xl focus:outline-none`}>ID</button>
              </div>
              {/* <label className="relative">
                <span className="sr-only">Change Language</span>
                <select
                  className={`block w-full h-full appearance-none font-medium text-[17px] ${scrolled ? 'text-black' : 'text-white'} hover:text-gray-600 px-5 py-3 flex items-center transition duration-150 ease-in-out drop-shadow-2xl bg-transparent outline-none focus:outline-none`}
                  onChange={onSelectChange}
                  defaultValue={localActive}
                >
                  <option className="text-black font-semibold" value="en">EN</option>
                  <option className="text-black font-semibold" value="id">ID</option>
                </select>
              </label> */}
            </ul>
          </nav>

          <MobileMenu />

        </div>
      </div>
    </header>
  )
}
