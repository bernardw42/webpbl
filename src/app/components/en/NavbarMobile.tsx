"use client"

import { useState, useRef, useEffect } from 'react';
import { Transition } from '@headlessui/react';
import Link from 'next/link';

export default function MobileMenu() {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false);

  const trigger = useRef<HTMLButtonElement>(null);
  const mobileNav = useRef<HTMLDivElement>(null);

  // Close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }: { target: EventTarget | null }): void => {
      if (!mobileNav.current || !trigger.current) return;
      if (!mobileNavOpen || mobileNav.current.contains(target as Node) || trigger.current.contains(target as Node)) return;
      setMobileNavOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  }, [mobileNavOpen]);

  // Close the mobile menu if the Esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }): void => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  }, [mobileNavOpen]);

  return (
    <div className="flex md:hidden">
      {/* Hamburger button */}
      <button
        ref={trigger}
        className={`hamburger ${mobileNavOpen ? 'active' : ''} z-30 ${mobileNavOpen ? 'text-black' : 'text-white'}`}
        aria-controls="mobile-nav"
        aria-expanded={mobileNavOpen}
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
        <span className="sr-only">Menu</span>
        <svg className="w-7 h-7 fill-current font-bold drop-shadow-2xl" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <rect y="4" width="24" height="2" />
          <rect y="11" width="24" height="2" />
          <rect y="18" width="24" height="2" />
        </svg>
      </button>

      {/*Mobile navigation */}
      <div ref={mobileNav}>
        <Transition
          show={mobileNavOpen}
          as="nav"
          id="mobile-nav"
          className="absolute top-0 h-[100dvh] z-20 left-0 w-full overflow-scroll bg-[white]"
          enter="transition ease-out duration-200 transform"
          enterFrom="opacity-0 -translate-y-2"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-out duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <ul className="flex flex-col justify-between items-center px-5 py-2 pt-[120px] gap-y-[60px]">
            <li>
              <Link href="/signin" className="font-medium w-full text-black hover:text-gray-600 py-2 justify-center" onClick={() => setMobileNavOpen(false)}>About Us</Link>
            </li>
            <li>
              <Link href="/signin" className="font-medium w-full text-black hover:text-gray-600 py-2 justify-center" onClick={() => setMobileNavOpen(false)}>Services</Link>
            </li>
            <li>
              <Link href="/signin" className="font-medium w-full text-black hover:text-gray-600 py-2 justify-center" onClick={() => setMobileNavOpen(false)}>Article</Link>
            </li>
            <li>
              <Link href="/signin" className="font-medium w-full text-black hover:text-gray-600 py-2 justify-center" onClick={() => setMobileNavOpen(false)}>Contact Us</Link>
            </li>
          </ul>
        </Transition>
      </div>
    </div>
  );
}
