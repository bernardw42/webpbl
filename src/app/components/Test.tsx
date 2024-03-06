"use client"

// import React, { useRef } from 'react';
// import Slider from 'react-slick';
// import Image from 'next/image';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import Card from './ServiceCard/Card';
// import img1 from '../../../public/home/tes (1).png';
// import img2 from '../../../public/home/tes (2).png';
// import img3 from '../../../public/home/tes (3).png';
// import img4 from '../../../public/home/tes (4).png';
// import img5 from '../../../public/home/tes (5).png';
// import img6 from '../../../public/home/tes (6).png';
// import img7 from '../../../public/home/tes (7).png';
// import left from '../../../public/home/left.png';
// import right from '../../../public/home/right.png';
// import { useInView } from 'react-intersection-observer';

// const CardData = [
//   {
//     title: 'DIGITAL CONSULTANCY',
//     desc: "We've developed an approach to shaping digital strategies for our clients that result in defining prioritized cost-effective solutions that deliver a measurable Return on Investment (ROI).",
//     image: img1,
//   },
//   {
//     title: 'CONVERSION RATE OPTIMIZATION',
//     desc: "We've developed an asdasdasdasdasd approach to shaping digital strategies for our client that result in defining prioritized cost-effective solutions that deliver a measurable Return on Investment",
//     image: img2,
//   },
//   {
//     id: 'asdasdqwr',
//     title: 'ONLINE REPUTATION MANAGEMENT',
//     desc: "We've developed an approach to shaping digital strategies for our clients that result in defining prioritized cost-effective solutions that deliver a.",
//     image: img3,
//   },
//   {
//     id: 'asdasdqwr',
//     title: 'ONLINE REPUTATION MANAGEMENT',
//     desc: "We've developed an approach to shaping digital strategies for our clients that result in defining prioritized cost-effective solutions that deliver a.",
//     image: img4,
//   },
//   {
//     id: 'asdasdqwr',
//     title: 'ONLINE REPUTATION MANAGEMENT',
//     desc: "We've developed an approach to shaping digital strategies for our clients that result in defining prioritized cost-effective solutions that deliver a.",
//     image: img5,
//   },
//   {
//     id: 'asdasdqwr',
//     title: 'ONLINE REPUTATION MANAGEMENT',
//     desc: "We've developed an approach to shaping digital strategies for our clients that result in defining prioritized cost-effective solutions that deliver a.",
//     image: img6,
//   },
//   {
//     id: 'asdasdqwr',
//     title: 'ONLINE REPUTATION MANAGEMENT',
//     desc: "We've developed an approach to shaping digital strategies for our clients that result in defining prioritized cost-effective solutions that deliver a.",
//     image: img7,
//   },
// ];

// const Service = () => {
//   const sliderRef = useRef(null);
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     rootMargin: '-200px 0px',
//   });

//   const settings = {
//     dots: false,
//     infinite: true,
//     arrows: false,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//     ],
//   };

//   const handlePrev = () => {
//     if (sliderRef.current) {
//       sliderRef.current.slickPrev();
//     }
//   };

//   const handleNext = () => {
//     if (sliderRef.current) {
//       sliderRef.current.slickNext();
//     }
//   };

//   return (
//     <div className="bg-[#033C5A] w-full pt-[150px] pb-[200px] flex flex-col justify-center items-center" ref={ref}>
//       <div className="flex flex-col justify-center items-center text-[white]">
//         <h1 className='text-[40px] max-w-7xl px-6 text-center font-semibold'>Our Service</h1>
//         <p className='text-[18px] max-w-7xl px-6 text-center mb-[70px] font-extralight'>Panca Budi Logistindo berkomitmen menjadi partner terpercaya di seluruh Indonesia. Inilah 3 alasan tepat untuk memilih Panca Budi Logistindo</p>
//       </div>
//       <div id="slide" className={`flex justify-center items-center w-full transition-opacity duration-[2000ms] ${inView ? 'opacity-100' : 'opacity-0'}`}>
//         <button onClick={handlePrev} className="absolute left-[420px] cursor-pointer z-20">
//           <Image src={left} alt="Left Arrow" width={50} height={50} />
//         </button>
//         <Slider ref={sliderRef} {...settings} className='w-[1000px]'>
//           {CardData.map((CardDetail, index) => (
//             <div key={index} className="px-[13px]">
//               <Card {...CardDetail} />
//             </div>
//           ))}
//         </Slider>
//         <button onClick={handleNext} className="absolute right-[420px] cursor-pointer z-20">
//           <Image src={right} alt="Right Arrow" width={50} height={50} />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Service;

export default function Test() {
  return(
    <div>
      <h1>TESSSSSSSSSSSS</h1>
    </div>
  )
}