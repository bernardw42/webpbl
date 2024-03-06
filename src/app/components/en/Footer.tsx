import Link from "next/link";
import Image from "next/image";
import Logo from "../../../../public/navbar/logo1.png";

import sos from "../../../../public/navbar/sos (1).png";
import sos1 from "../../../../public/navbar/sos (2).png";
import sos2 from "../../../../public/navbar/sos (3).png";

export default function Footer() {
    return (
        <div className="bg-[#F9F9F9] w-full flex max-sm:justify-center items-center pt-[100px] pb-[100px]">
            <div className="ml-[16%] max-sm:ml-[0px] max-sm:justify-center relative flex flex-wrap gap-y-[50px] gap-x-[100px] px-6">
                <div className="flex-col flex justify-between max-w-[400px] gap-y-[50px] px-2">
                    <Image src={Logo} alt="logo" className="w-[100px]"></Image>
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
                            <Link href="/aboutus" className="font-medium text-[17px] hover:text-[#2c365a] pr-5 py-3 flex items-center transition duration-150 ease-in-out">About Us</Link>
                        </li>
                        <li>
                            <Link href="/signin" className="font-medium text-[17px] hover:text-[#2c365a] px-5 py-3 flex items-center transition duration-150 ease-in-out">Services</Link>
                        </li>
                        <li>
                            <Link href="/signin" className="font-medium text-[17px] hover:text-[#2c365a] px-5 py-3 flex items-center transition duration-150 ease-in-out">Article</Link>
                        </li>
                        <li>
                            <Link href="/signin" className="font-medium text-[17px] hover:text-[#2c365a] px-5 py-3 flex items-center transition duration-150 ease-in-out">Contact Us</Link>
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
