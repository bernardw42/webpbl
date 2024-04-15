"use client"

import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Transition } from 'react-transition-group';
import Image from 'next/image';
import Card from './Card/Card';
import img from "../../../../public/article/a.jpg"
import img2 from "../../../../public/article/b.jpg"
import img3 from "../../../../public/article/c.jpg"
import img4 from "../../../../public/article/d.jpg"
import img5 from "../../../../public/article/e.jpg"
import img6 from "../../../../public/article/f.jpg"
import error from "../../../../public/article/unders.png"

const CardData = [
    {
      title: 'DIGITAL CONSULTANCY',
      date: "16 January 2024",
      desc:
        "We've developed an approach to shaping digital strategies for our clients that result in defining prioritized cost-effective solutions that deliver a measurable Return on Investment (ROI).",
      image: img,
    },
    {
      title: 'CONVERSION RATE OPTIMIZATION',
      date: "16 January 2024",
      desc:
        "We've developed an asdasdasdasdasd approach to shaping digital strategies for our client that result in defining prioritized cost-effective solutions that deliver a measurable Return on Investment",
      image: img2,
    },
    {
      title: 'ONLINE REPUTATION MANAGEMENT',
      date: "16 January 2024",
      desc:
        "We've developed an approach to shaping digital strategies for our clients that result in defining prioritized cost-effective solutions that deliver a.",
      image: img3,
    },
    {
        title: 'ONLINE REPUTATION MANAGEMENT',
        date: "16 January 2024",
        desc:
          "We've developed an approach to shaping digital strategies for our clients that result in defining prioritized cost-effective solutions that deliver a.",
        image: img4,
    },
    {
        title: 'ONLINE REPUTATION MANAGEMENT',
        date: "16 January 2024",
        desc:
          "We've developed an approach to shaping digital strategies for our clients that result in defining prioritized cost-effective solutions that deliver a.",
        image: img5,
    },
    {
        title: 'ONLINE REPUTATION MANAGEMENT',
        date: "16 January 2024",
        desc:
          "We've developed an approach to shaping digital strategies for our clients that result in defining prioritized cost-effective solutions that deliver a.",
        image: img6,
    },
  ];

  export default function Head(){
    const [windowWidth, setWindowWidth] = useState(0);

    const [textRef, textInView] = useInView({
      triggerOnce: true,
      rootMargin: '-150px 0px', // Adjust the root margin as needed
    });

    const [cardRef, cardInView] = useInView({
        triggerOnce: true,
        rootMargin: '-50px 0px', // Adjust the root margin as needed
    });
    

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Initial width

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return(
        <>
            <div className="bg-[white] w-full min-h-[1000px] flex flex-col justify-center items-center pt-[230px] pb-[200px]">
                <div className="max-w-7xl flex flex-col px-8 justify-center">
                    <div ref={textRef}>
                      <h1 className={`text-[#033C5A] font-bold md:text-5xl sm:text-4xl lg:text-6xl text-4xl mb-[70px] max-lg:text-center text-left duration-[1500ms] opacity-0 ${textInView ? 'opacity-100' : ''}`}>Article</h1>
                    </div>
                    <div className="flex justify-center flex-wrap gap-y-[50px] items-center gap-x-[50px] text-center mb-[100px]" ref={cardRef}>
                        {/* {CardData.slice(0, windowWidth >= 1024 ? 6 : 3).map((CardDetail, index) => (
                            <Transition key={CardDetail.title} in={cardInView} timeout={400 * index}>
                                {(state: string) => (
                                    <Card
                                        key={CardDetail.title}
                                        {...CardDetail}
                                        className={`${
                                            state === 'entered' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[-50px]'
                                        } transition-all duration-[1000ms] ease-in-out`}
                                    />
                                )}
                            </Transition>
                        ))} */}
                    </div>
                </div>
                <Image src={error} alt={''} className='w-[600px] h-auto mb-[100px] px-8'></Image>
                <h2 className='text-center font-semibold text-[25px] mb-[20px] p-8 text-[#2E364D]'>Join the newsletter to receive the latest updates in your inbox</h2>
                <div className="border border-outline rounded-lg flex items-center justify-between outline-[#033C5A] w-[500px] max-md:w-[400px] max-sm:w-[300px]">
                  <input type="email" placeholder="Your email address" className="bg-white px-3 rounded-lg w-[400px] max-md:w-[200px] focus:outline-none" />
                  <button className="bg-[#22546E] text-white px-4 py-4 rounded-l-none rounded-r-lg">Subscribe</button>
                </div>
            </div>
        </>
    );
}