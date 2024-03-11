"use client"

import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Transition } from 'react-transition-group';
import Image from "next/image";
import map from "../../../../public/home/PETA.png";
import thumb from "../../../../public/home/album.jpg";
import img1 from '../../../../public/home/map/tes (1).png';
import img2 from '../../../../public/home/map/tes (2).png';
import img3 from '../../../../public/home/map/tes (3).png';
import img4 from '../../../../public/home/map/tes (4).png';
import img5 from '../../../../public/home/map/tes (5).png';
import img6 from '../../../../public/home/map/tes (6).png';
import img7 from '../../../../public/home/map/tes (7).png';
import img8 from '../../../../public/home/map/tes (8).png';
import truk from "../../../../public/home/trukgif.gif"

export default function Map() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        rootMargin: '-200px 0px',
    });

    const [textRef, textInView] = useInView({
        triggerOnce: true,
        rootMargin: '-150px 0px', // Adjust the root margin as needed
    });

    const [showDivs, setShowDivs] = useState(false);

    // When the section comes into view, set showDivs to true
    useEffect(() => {
        if (inView) {
            setShowDivs(true);
        }
    }, [inView]);

    return (
        <div className="flex flex-col justify-center items-center">
            <div className="bg-white w-full flex justify-center items-center pb-[150px] pt-[150px]" ref={textRef}>
                <h1 className={`text-center max-w-7xl text-red-500 font-bold text-3xl px-6 transition-all duration-[1500ms] leading-[60px] opacity-0 ${textInView ? 'opacity-100' : ''}`}>Kami menawarkan solusi logistik terbaik untuk meningkatkan efisiensi dalam distribusi di seluruh Indonesia</h1>
            </div>
            <div ref={ref} className="bg-[#F9F9F9] w-full flex flex-wrap justify-center items-center gap-x-[100px] gap-y-[50px] pb-[200px] pt-[200px]">
                {/* Truck image outside the Transition */}
                <Image src={thumb} alt="map" className="w-[800px] h-[500px] ml-[-50px] transition-opacity duration-[2000ms] opacity-0" style={{ opacity: showDivs ? 1 : 0 }} />

                {/* Other four images inside the Transition */}
                <Transition in={showDivs} timeout={200} mountOnEnter unmountOnExit>
                    {state => (
                        <div className="flex flex-col gap-y-[40px]">
                            <div className={`flex items-center transform gap-x-[20px] transition-all duration-[1500ms] ${state === 'entered' ? 'translate-x-0 opacity-100' : 'translate-x-[150px] opacity-0'}`}>
                                <Image src={img4} alt="map" width={70} height={70} />
                                <h1 className="text-blue-700 font-semibold text-xl">Layanan Logistik Terintegrasi Komprehensif <br></br> (Supply Chain Management)</h1>
                            </div>
                            <div className={`flex items-center transform gap-x-[20px] transition-all duration-[1500ms] ${state === 'entered' ? 'translate-x-0 opacity-100' : 'translate-x-[150px] opacity-0'}`}>
                                <Image src={img3} alt="map" width={70} height={70} />
                                <h1 className="text-blue-700 font-semibold text-xl">Manajemen Gudang</h1>
                            </div>
                            <div className={`flex items-center transform gap-x-[20px] transition-all duration-[1500ms] ${state === 'entered' ? 'translate-x-0 opacity-100' : 'translate-x-[150px] opacity-0'}`}>
                                <Image src={img6} alt="map" width={70} height={70} />
                                <h1 className="text-blue-700 font-semibold text-xl">Layanan Pengiriman Barang</h1>
                            </div>
                            <div className={`flex items-center transform gap-x-[20px] transition-all duration-[1500ms] ${state === 'entered' ? 'translate-x-0 opacity-100' : 'translate-x-[150px] opacity-0'}`}>
                                <Image src={img7} alt="map" width={70} height={70} />
                                <h1 className="text-blue-700 font-semibold text-xl">Tenaga Kerja Berpengalaman</h1>
                            </div>
                        </div>
                    )}
                </Transition>
            </div>

        </div>
    );
}
