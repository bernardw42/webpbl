"use client"

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../../public/navbar/logo1.png';
import sos from "../../../public/navbar/sos (1).png";
import sos1 from "../../../public/navbar/sos (2).png";
import sos2 from "../../../public/navbar/sos (3).png";

export default function Footer({ lang }:any) {
    const pathname = usePathname();

    // Define language-specific navbar text
    const navbarText = {
        en: {
            about: 'About Us',
            services: 'Services',
            article: 'Article',
            contact: 'Contact Us',
        },
        id: {
            about: 'Tentang Kami',
            services: 'Layanan',
            article: 'Artikel',
            contact: 'Hubungi Kami',
        },
    };

    // Mapping object for English routes to Indonesian routes
    const routeMapping: Record<string, string> = {
        aboutus: 'tentangkami',
        services: 'layanan',
        article: 'artikel',
        contactus: 'kontak',
    };

    const generatePath = (route: string, lang: 'en' | 'id') => {
        if (lang === 'id') {
            const mappedRoute = routeMapping[route] || route;
            return `/${mappedRoute}`;
        } else {
            return `/${route}`;
        }
    };

    return (
        <div className="bg-[#F9F9F9] w-full flex max-sm:justify-center items-center pt-[100px] pb-[100px]">
            <div className="ml-[16%] max-sm:ml-[0px] max-sm:justify-center relative flex flex-wrap gap-y-[50px] gap-x-[100px] px-6">
                <div className="flex-col flex justify-between max-w-[400px] gap-y-[50px] px-2">
                    <Link href={`/${lang === 'id' ? 'id' : ''}`}>
                        <Image src={Logo} alt="logo" className="w-[100px]"></Image>
                    </Link>
                    <div className="flex flex-col text-[#033C5A]">
                        <h1 className="text-[25px] font-semibold">Adress</h1>
                        <p className="text-[18px] font-normal">Jl. KH. Agus Salim No.15, RT.002/RW.05,
                            Poris Plawad, Kec. Cipondoh, Kota Tangerang,
                            Banten 15141</p>
                    </div>
                    <p className="text-[18px] font-normal text-[#033C5A]">Copyright @ 2024 pancabudilogistindo.co.id
                        All rights reserved.</p>
                </div>
                <div className="flex flex-col justify-between max-w-[500px] gap-y-[50px] px-2 ">
                    <ul className="flex justify-center flex-wrap items-center text-[#033C5A] max-lg:hidden">
                        <li>
                            <Link href={generatePath('aboutus', pathname === '/id' ? 'id' : 'en')} className="font-medium text-[17px] hover:text-[#2c365a] pr-5 py-3 flex items-center transition duration-150 ease-in-out">{navbarText[pathname === '/id' ? 'id' : 'en'].about}</Link>
                        </li>
                        <li>
                            <Link href={generatePath('services', pathname === '/id' ? 'id' : 'en')} className="font-medium text-[17px] hover:text-[#2c365a] px-5 py-3 flex items-center transition duration-150 ease-in-out">{navbarText[pathname === '/id' ? 'id' : 'en'].services}</Link>
                        </li>
                        <li>
                            <Link href={generatePath('article', pathname === '/id' ? 'id' : 'en')} className="font-medium text-[17px] hover:text-[#2c365a] px-5 py-3 flex items-center transition duration-150 ease-in-out">{navbarText[pathname === '/id' ? 'id' : 'en'].article}</Link>
                        </li>
                        <li>
                            <Link href={generatePath('contactus', pathname === '/id' ? 'id' : 'en')} className="font-medium text-[17px] hover:text-[#2c365a] px-5 py-3 flex items-center transition duration-150 ease-in-out">{navbarText[pathname === '/id' ? 'id' : 'en'].contact}</Link>
                        </li>
                    </ul>
                    <div className="flex flex-col text-[#033C5A]">
                        <h1 className="text-[25px] font-semibold">Email</h1>
                        <p className="text-[18px] font-normal mb-[10px]">support@pancabudilogistindo.co.id</p>
                        <h1 className="text-[25px] font-semibold">Work Hours</h1>
                        <p className="text-[18px] font-normal">Monday - Friday, 09.00 - 21.00 GMT +7</p>
                    </div>
                    <div className='flex ml-[-12px]'>
                        <Link href="/">
                            <Image src={sos} alt='tes' className='w-[70px]'></Image>
                        </Link>
                        <Link href="/">
                            <Image src={sos1} alt='tes' className='w-[70px]'></Image>
                        </Link>
                        <Link href="/">
                            <Image src={sos2} alt='tes' className='w-[70px]'></Image>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

