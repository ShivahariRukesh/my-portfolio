
// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// export default function PinnedSection() {


//     useEffect(() => {

//         const triggers: ScrollTrigger[] = [];
//         const elements = document.querySelectorAll(".main");

//         elements.forEach((ele) => {

//             gsap.set(ele.children[0].children[0], { opacity: 0 })
//             console.log(ele.children[0].children[0])

//             const trigger = gsap.to(ele.children[0].children[0], {
//                 y: -160,
//                 opacity: 1,
//                 duration: 2,
//                 scrollTrigger: {
//                     trigger: ele,
//                     start: "top center",
//                     markers: true,
//                 },
//             });

//             const newTrigger = gsap.to(ele.children[0], {

//                 scrollTrigger: {
//                     trigger: ele,
//                     start: "top top",
//                     end: "+=500px",
//                     pin: ele.children[0],
//                     scrub: true,
//                     pinSpacing: false,
//                     markers: true,
//                 },
//             });

//             triggers.push(trigger.scrollTrigger as ScrollTrigger);
//             triggers.push(newTrigger.scrollTrigger as ScrollTrigger);

//         });
//         console.log("Created triggers")

//         return () => {
//             console.log("Killing triggers");
//             triggers.forEach((t) => t.kill());
//         };
//     }, []);

//     return (
//         <div className="bg-black">
//             {/* Intro section */}
//             <div className="h-[100vh] flex items-center justify-center">

//             </div>

//             {/* Pinned section */}
//             <div className="main h-[100vh] w-full bg-gray-600  flex items-center  justify-center">

//                 <div className="border-2 border-white">

//                     <div
//                         className="bg-blue-500 w-28 h-28 rounded-2xl shadow-xl "
//                     >
//                     </div>
//                 </div>
//             </div>

//             <div className="main h-[100vh] w-full bg-amber-800  flex items-center  justify-center">
//                 <div className="border-2 border-white">

//                     <div
//                         className="bg-blue-500 w-28 h-28 rounded-2xl shadow-xl "
//                     >
//                     </div>
//                 </div>
//             </div>


//             <div className="main h-[100vh] w-full bg-green-800  flex items-center  justify-center">

//                 <div className="border-2 border-white">

//                     <div
//                         className="bg-blue-500 w-28 h-28 rounded-2xl shadow-xl "
//                     >
//                     </div>
//                 </div>
//             </div>

//         </div>
//     );
// }




// import './Practice.css'

// const projects = [
//     {
//         id: 1,
//         category: "ggod ",
//         title: "Nice"
//     },
//     {
//         id: 1,
//         category: "ggod ",
//         title: "Nice"
//     },
//     {
//         id: 1,
//         category: "ggod ",
//         title: "Nice"
//     },
//     {
//         id: 1,
//         category: "ggod ",
//         title: "Nice"
//     },
//     {
//         id: 1,
//         category: "ggod ",
//         title: "Nice"
//     },
//     {
//         id: 1,
//         category: "ggod ",
//         title: "Nice"
//     },
// ]

// const ScrollableSection = () => {
//     const scrollRef = useRef<HTMLDivElement | null>(null);

//     const scroll = (direction: string) => {
//         const container = scrollRef.current;
//         const scrollAmount = 320;

//         if (direction === 'left') {
//             container?.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
//         } else {
//             container?.scrollBy({ left: scrollAmount, behavior: 'smooth' });
//         }
//     };

//     return (
//         <div className="p-8 scrollbar-hide overflow-auto">



//             <div className="relative">
//                 <button
//                     onClick={() => scroll('left')}
//                     className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-20 hover:bg-opacity-30 text-black w-10 h-10 rounded-full"
//                 >
//                     ←
//                 </button>

//                 <button
//                     onClick={() => scroll('right')}
//                     className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-20 hover:bg-opacity-30 text-black w-10 h-10 rounded-full"
//                 >
//                     →
//                 </button>

//                 <div
//                     ref={scrollRef}
//                     className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
//                     style={{ scrollbarWidth: 'none' }}
//                 >
//                     {projects.map((project) => (
//                         <div key={project.id} className="flex-shrink-0">
//                             <div className="min-w-[350px] rounded-lg border-1 border-[#494949] overflow-hidden hover:transform hover:scale-105 transition-all duration-300 cursor-pointer ">

//                                 <div className="relative h-44 md:h-96 ">

//                                     <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
//                                 </div>

//                                 <div className="p-6">
//                                     <div className="flex flex-col gap-y-2 items-start mb-2">
//                                         <span className="text-sm rounded-full bg-gradient-to-r from-[#222222] via-[#7e6e6d] to-[#956b60] text-[#CECECE] p-2">
//                                             {project.category}
//                                         </span>
//                                         <h3 className="text-lg font-semibold text-white group-hover:text-gray-300 transition-colors">
//                                             {project.title}
//                                         </h3>
//                                         <span className="text-sm text-gray-400 whitespace-nowrap ml-2">
//                                             View Detail →
//                                         </span>
//                                     </div>



//                                 </div>
//                             </div>
//                         </div>
//                     ))}

//                     <div className="bg-[#282727] rounded-lg p-8 flex flex-col gap-y-7 justify-center items-center text-center min-w-[300px] h-[400px] border-1 border-[#494949]  flex-shrink-0">
//                         <h3 className="text-xl font-semibold text-white">Couldn&apos;t find what you need?

//                         </h3>
//                         <p>Suggest a tutorial, course or video. I read seek  feedback/suggestion!</p>
//                         <a href='/admin'>
//                             <button className="rounded-full bg-gradient-to-r from-[#222222] via-[#7e6e6d] to-[#956b60]  text-white px-6 py-3  transition-all hover:scale-105">
//                                 Request Now →
//                             </button>
//                         </a>
//                     </div>
//                 </div>
//             </div>


//         </div>
//     );
// };

// export default ScrollableSection;





// import React, { useEffect, useRef } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// declare global {
//     interface Window {
//         gsap: any;
//         ScrollTrigger: any;
//     }
// }

// const projects = [
//     {
//         id: 1,
//         title: "Fight Club",
//         category: "Film Design",
//         image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&h=1000&fit=crop",
//         color: "from-red-900 to-black"
//     },
//     {
//         id: 2,
//         title: "Neon Dreams",
//         category: "Brand Identity",
//         image: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=800&h=1000&fit=crop",
//         color: "from-purple-900 to-pink-900"
//     },
//     {
//         id: 3,
//         title: "Urban Stories",
//         category: "Photography",
//         image: "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=800&h=1000&fit=crop",
//         color: "from-blue-900 to-cyan-900"
//     },
//     {
//         id: 4,
//         title: "Midnight City",
//         category: "Digital Art",
//         image: "https://images.unsplash.com/photo-1477346611705-65d1883cee1e?w=800&h=1000&fit=crop",
//         color: "from-indigo-900 to-purple-900"
//     },
//     {
//         id: 5,
//         title: "Golden Hour",
//         category: "Editorial",
//         image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=1000&fit=crop",
//         color: "from-orange-900 to-yellow-900"
//     },
//     {
//         id: 6,
//         title: "Abstract Minds",
//         category: "Creative Direction",
//         image: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=800&h=1000&fit=crop",
//         color: "from-green-900 to-teal-900"
//     }
// ];

// export default function HorizontalScroll() {
//     const containerRef = useRef<HTMLDivElement>(null);
//     const scrollRef = useRef<HTMLDivElement>(null);

//     useEffect(() => {
//         let ctx: any;

//         const loadGSAP = async () => {



//             gsap.registerPlugin(ScrollTrigger);

//             const container = containerRef.current;
//             const scrollContainer = scrollRef.current;

//             if (container && scrollContainer) {
//                 ctx = gsap.context(() => {
//                     const sections = gsap.utils.toArray('.project-card');
//                     const scrollWidth = scrollContainer.offsetWidth;

//                     gsap.to(sections, {

//                         xPercent: -100 * (sections.length - 1),
//                         ease: "none",
//                         scrollTrigger: {
//                             trigger: container,
//                             pin: true,
//                             scrub: 2,
//                             markers: true,
//                             end: () => "+=" + scrollWidth
//                         }
//                     });
//                 });
//             }
//         };

//         loadGSAP();

//         return () => {
//             if (ctx) ctx.revert();
//         };
//     }, []);

//     return (
//         <div className="bg-black text-white">
//             {/* Hero Section */}
//             <section className="h-screen flex items-center justify-center px-8">
//                 <div className="text-center">
//                     <h1 className="text-7xl md:text-9xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
//                         Selected Works
//                     </h1>
//                     <p className="text-xl md:text-2xl text-gray-400">
//                         Scroll down to explore horizontally
//                     </p>
//                 </div>
//             </section>

//             {/* Horizontal Scroll Section */}
//             <section ref={containerRef} className="h-screen overflow-hidden">
//                 <div ref={scrollRef} className=" flex h-full">
//                     {projects.map((project, index) => (
//                         <div
//                             key={project.id}
//                             className="project-card flex-shrink-0 w-screen h-full flex items-center justify-center px-12"
//                         >
//                             <div className=" relative w-full max-w-6xl h-[80vh] overflow-hidden rounded-3xl group cursor-pointer">
//                                 {/* Image */}
//                                 <img
//                                     src={project.image}
//                                     alt={project.title}
//                                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                                 />

//                                 {/* Gradient Overlay */}
//                                 <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-60 group-hover:opacity-40 transition-opacity duration-500`} />

//                                 {/* Content */}
//                                 <div className="absolute bottom-0 left-0 right-0 p-10">
//                                     <div className="transform transition-transform duration-500 group-hover:translate-y-[-10px]">
//                                         <p className="text-sm uppercase tracking-widest text-gray-300 mb-3">
//                                             {project.category}
//                                         </p>
//                                         <h2 className="text-5xl md:text-6xl font-bold mb-6">
//                                             {project.title}
//                                         </h2>
//                                         <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//                                             <button className="px-8 py-4 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition-colors">
//                                                 View Project →
//                                             </button>
//                                         </div>
//                                     </div>
//                                 </div>

//                                 {/* Number Badge */}
//                                 <div className="absolute top-8 right-8 w-20 h-20 bg-white bg-opacity-20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white border-opacity-30">
//                                     <span className="text-3xl font-bold">
//                                         {String(index + 1).padStart(2, '0')}
//                                     </span>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </section>

//             {/* Footer Section */}
//             <section className="h-screen flex items-center justify-center px-8">
//                 <div className="text-center">
//                     <h2 className="text-6xl md:text-8xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
//                         Let's Work Together
//                     </h2>
//                     <button className="px-10 py-5 bg-white text-black rounded-full text-xl font-medium hover:bg-gray-200 transition-colors shadow-2xl">
//                         Get in Touch →
//                     </button>
//                 </div>
//             </section>
//         </div>
//     );
// }




// Implementing card flip

// import './Practice.css'
// import React from 'react'

// const Practice = () => {
//     return (
// <div className='perspective flex justify-center items-center h-screen w-screen border-2 border-red-400'>

//     <div className='main border-2 border-white relative  w-28 h-28'>

//         <div className='front absolute border-2 border-black w-full h-full bg-amber-900 '>
//             front

//         </div>

//         <div className='back absolute border-2 border-black w-full h-full bg-amber-900 '>
//             back

//         </div>

//     </div>
// </div>



// <div className='flex justify-center items-center h-screen w-screen border-2 border-red-400 '>
//     <div className='main w-28 h-28 relative'>
//         <div className='front absolute w-full h-full bg-amber-900 '>
//             front
//         </div>
//         <div className='back absolute w-full h-full bg-amber-500'>
//             back
//         </div>
//     </div>
// </div>

//     )
// }

// export default Practice

















//For about page
// import gsap from 'gsap'
// import React, { useEffect } from 'react'

// const Practice = () => {

//     useEffect(() => {

//         gsap.to('.light-projection', {

//             x: 800,
//             y: 500,

//             scrollTrigger: {
//                 trigger: '.light-projection',
//                 pin: true,
//                 start: "top top",
//                 end: "+=5000",
//                 scrub: true,

//                 markers: true,
//             }

//         })
//     })

//     return (
//         <div className='w-full h-[500vh] bg-black text-2xl text-white '>
//             About me

//             <div className='light-projection w-32 h-32 border-2 border-amber-200 rounded-full bg-yellow-100'></div>

//         </div>
//     )
// }

// export default Practice



//for creating the theatre spotlight in about us
// import { useState } from 'react';
// import './Practice.css';

// const Practice = () => {
//     const [position, setPosition] = useState({ x: 0, y: 0 });
//     const [dragging, setDragging] = useState(false);
//     const [rel, setRel] = useState<null | any>(null); // Mouse offset relative to top-left

//     const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
//         const rect = (e.target as HTMLDivElement).getBoundingClientRect();
//         console.log("first", rect)
//         console.log("page x and y", e.pageX, e.pageY)

//         setDragging(true);
//         setRel({
//             x: e.pageX - (rect.left + window.scrollX),
//             y: e.pageY - (rect.top + window.scrollY)
//         });
//         e.stopPropagation();
//         e.preventDefault();
//     };

//     const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
//         if (!dragging) return;
//         setPosition({
//             x: e.pageX - rel?.x,
//             y: e.pageY - rel?.y

//         });
//         e.stopPropagation();
//         e.preventDefault();
//     };

//     const handleMouseUp = () => {
//         setDragging(false);
//     };

//     return (

//         <section className='h-[200vh] w-[100vw] bg-gray-500 text-black' >
//             <p>
//                 The mix-blend-mode property specifies how an element's content should blend with its background:
//                 The mix-blend-mode property specifies how an element's content should blend with its background:
//                 The mix-blend-mode property specifies how an element's content should blend with its background:
//                 The mix-blend-mode property specifies how an element's content should blend with its background:
//                 The mix-blend-mode property specifies how an element's content should blend with its background:
//                 The mix-blend-mode property specifies how an element's content should blend with its background:
//                 The mix-blend-mode property specifies how an element's content should blend with its background:
//                 The mix-blend-mode property specifies how an element's content should blend with its background:
//                 The mix-blend-mode property specifies how an element's content should blend with its background:
//                 The mix-blend-mode property specifies how an element's content should blend with its background:
//                 The mix-blend-mode property specifies how an element's content should blend with its background:
//                 The mix-blend-mode property specifies how an element's content should blend with its background:The mix-blend-mode property specifies how an element's content should blend with its background:
//                 The mix-blend-mode property specifies how an element's content should blend with its background:
//                 The mix-blend-mode property specifies how an element's content should blend with its background:
//                 The mix-blend-mode property specifies how an element's content should blend with its background:
//                 The mix-blend-mode property specifies how an element's content should blend with its background:
//                 The mix-blend-mode property specifies how an element's content should blend with its background:
//             </p>
//             <div
//                 className='relative -top-10 w-14 h-14 bg-yellow-100 mix-blend-difference'
//                 onMouseDown={handleMouseDown}
//                 onMouseMove={handleMouseMove}
//                 onMouseUp={handleMouseUp}
//                 onMouseLeave={handleMouseUp}
//                 style={{
//                     position: 'absolute',
//                     left: position.x,
//                     top: position.y,

//                     border: '1px solid #aaa',
//                     cursor: 'move',
//                     userSelect: 'none',
//                     padding: 10
//                 }}
//             >

//             </div>
//         </section>
//     );
// };

// export default Practice;



// Contact section
// import React, { useState } from 'react';
// import { MailOutlined, LinkedinFilled, GithubFilled, FacebookFilled, PhoneOutlined, PushpinOutlined, ArrowRightOutlined } from '@ant-design/icons'
// export default function ContactSection() {

//     const contactItems = [
//         {
//             icon: MailOutlined,
//             label: 'Email',
//             value: '478gnujnoej@gmail.com',
//             href: 'mailto:478gnujnoej@gmail.com'
//         },
//         {
//             icon: PhoneOutlined,
//             label: 'Phone',
//             value: '+977 9863039295',
//         },
//         {
//             icon: PushpinOutlined,
//             label: 'Location',
//             value: 'San Francisco, CA',
//             href: null
//         }
//     ];

//     const socials = [
//         { icon: LinkedinFilled, label: 'LinkedIn', href: '#' },
//         { icon: GithubFilled, label: 'GitHub', href: '#' },
//         { icon: FacebookFilled, label: 'Twitter', href: '#' }
//     ];

//     return (
//         <section className="min-h-screen bg-neutral-900 py-24 px-6">
//             <div className="max-w-4xl mx-auto">
//                 {/* Header */}
//                 <div className="mb-20">
//                     <h2 className="text-5xl md:text-6xl font-light text-neutral-100 mb-4 tracking-tight">
//                         Let's Talk
//                     </h2>
//                     <div className="w-16 h-0.5 bg-neutral-100"></div>
//                 </div>

//                 {/* Contact Grid */}
//                 <div className="grid md:grid-cols-3 gap-8 mb-20">
//                     {contactItems.map((item, index) => {
//                         const Icon = item.icon;
//                         return (
//                             <div
//                                 key={index}
//                                 className="group cursor-pointer"
//                             >
//                                 <div className="border border-neutral-700 bg-neutral-800 p-8 transition-all duration-300 hover:border-neutral-500 hover:shadow-lg hover:shadow-neutral-950/50">
//                                     <Icon
//                                         className={`w-6 h-6 mb-6 text-neutral-300 transition-transform duration-300 
//                                             }`}
//                                     />
//                                     <h3 className="text-sm uppercase tracking-wider text-neutral-400 mb-2 font-medium">
//                                         {item.label}
//                                     </h3>
//                                     {item.href ? (
//                                         <a
//                                             href={item.href}
//                                             className="text-neutral-100 text-lg hover:text-neutral-300 transition-colors inline-flex items-center gap-2"
//                                         >
//                                             {item.value}
//                                             <ArrowRightOutlined
//                                                 className={`w-4 h-4 transition-transform duration-300
//                                                     }`}
//                                             />
//                                         </a>
//                                     ) : (
//                                         <p className="text-neutral-100 text-lg">{item.value}</p>
//                                     )}
//                                 </div>
//                             </div>
//                         );
//                     })}
//                 </div>

//                 {/* Divider */}
//                 <div className="border-t border-neutral-200 my-16"></div>

//                 {/* Social Links */}
//                 <div>
//                     <h3 className="text-sm uppercase tracking-wider text-neutral-500 mb-8 font-medium">
//                         Connect
//                     </h3>
//                     <div className="flex gap-6">
//                         {socials.map((social, index) => {
//                             const Icon = social.icon;
//                             return (
//                                 <a
//                                     key={index}
//                                     href={social.href}
//                                     className="group flex items-center gap-3 text-neutral-900 hover:scale-125 duration-700  transition-transform"
//                                 >
//                                     <div className=" p-3 group-hover:border-neutral-900 transition-all duration-300">
//                                         <Icon style={{ fontSize: '28px', color: '#08c' }} />
//                                     </div>

//                                 </a>
//                             );
//                         })}
//                     </div>
//                 </div>

//                 {/* Footer Note */}
//                 <div className="mt-20 pt-12 border-t border-neutral-200">
//                     <p className="text-neutral-500 text-sm font-light max-w-md">
//                         Open for work, <br />
//                         Feel free to reach out if you'd like to work together.
//                     </p>
//                 </div>
//             </div>
//         </section>
//     );
// }



// Background added in hero section
// import { useEffect, useRef } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';



// const Hero = () => {
//     const mainRef = useRef<HTMLElement | null>(null);

//     useEffect(() => {

//         const triggers: ScrollTrigger[] = [];
//         const elements = document.querySelectorAll(".section-title");


//         elements.forEach((ele, index) => {

//             gsap.set(ele.children[0].children[0], { opacity: 0 })

//             const trigger = gsap.to(ele.children[0].children[0], {
//                 y: -520,
//                 opacity: 1,
//                 duration: 2,
//                 scrollTrigger: {
//                     trigger: ele,
//                     start: index === 0 ? "10% 5%" : "top center",
//                     // toggleActions: "reverse none none none",
//                     // markers: true,
//                 },
//             });

//             gsap.set(ele, { opacity: 0 })

//             const backgroundTrigger = gsap.to(ele, {
//                 opacity: 1,
//                 duration: 2,
//                 scrollTrigger: {
//                     trigger: ele,
//                     start: index === 0 ? "10% 5%" : "top center",

//                 },
//             });
//             const newTrigger = gsap.to(ele.children[0].children[0], {

//                 ...(index === 2 && { letterSpacing: '200px', marginLeft: '150px', fontSize: '40px' }),

//                 scrollTrigger: {
//                     trigger: ele,
//                     start: "top top",
//                     end: index === 2 ? "+=1500px" : "+=1300px",
//                     pin: ele.children[0],
//                     scrub: true,
//                     pinSpacing: false,
//                     // markers: true,
//                 },
//             });




//             triggers.push(trigger.scrollTrigger as ScrollTrigger);
//             triggers.push(backgroundTrigger.scrollTrigger as ScrollTrigger);

//             triggers.push(newTrigger.scrollTrigger as ScrollTrigger);

//         });


//         gsap.set('.action-container', { opacity: 1 })
//         const actionOpacityTrigger = gsap.to('.action-container', {

//             opacity: 0,
//             scrollTrigger: {
//                 trigger: '.action-container',
//                 start: "50px top",
//                 end: "+=800px",
//                 scrub: true,
//                 // markers: true

//             }
//         })

//         console.log("Created triggers")

//         return () => {
//             console.log("Killing triggers");
//             triggers.forEach((t) => t.kill());
//             actionOpacityTrigger.kill()
//         };
//     }, []);



//     return (
//         <section id="main" ref={mainRef} className=''>
//             <section
//                 className="section-title  h-[200vh] text-9xl text-white flex items-center justify-center "
//                 style={{
//                     backgroundImage: 'url("/lights.jpg")',
//                     backgroundSize: 'cover',
//                     backgroundPosition: 'center',
//                 }}
//             >

//                 <div className="">

//                     <div>LIGHTS</div>
//                 </div>
//             </section>

//             <section

//                 className="section-title h-[200vh] bg-red-700 text-9xl text-blue-200 flex items-center justify-center"
//                 style={{
//                     backgroundImage: 'url("/lightsAndCamera.jpg")',
//                     backgroundSize: 'cover',
//                     backgroundPosition: 'center',
//                 }}
//             >
//                 <div className="">

//                     <div>CAMERA</div>
//                 </div>
//             </section>

//             <section
//                 // here moving or spacing this "ACTION" can cause overflow-x
//                 className="section-title h-[200vh] bg-lime-900 text-9xl text-gray-950 flex items-center justify-center "
//                 style={{
//                     backgroundImage: 'url("/lightsAndCamera.jpg")',
//                     backgroundSize: 'cover',
//                     backgroundPosition: 'center',
//                 }}
//             >
//                 <div className="flex items-center justify-center">

//                     <div className='action-container'>ACTION</div>
//                 </div>

//             </section>
//         </section >
//     );
// };

// export default Hero;


//About page
import React from 'react'

const Practice = () => {
    return (
        <section className=' h-screen w-screen p-5'>

            <div className='w-full h-full grid grid-cols-3 grid-flow-row grid-rows-2  gap-5 justify-items-center items-center border-2 border-white'>

                <div className='row-span-2 border-2 w-full h-full flex flex-col border-blue-500'>

                    <img src="/about_profile.jpg" alt="about_profile_picture" className='border-2 rounded-full hover:scale-90 transition-transform duration-500' />
                    <div>
                        Hello There ! I am  Rukesh Shivahari
                    </div>

                </div>

                <div className=' border-2 border-blue-500'>

                    <p className='text-8xl'>
                        Software Developer
                    </p>
                </div>


                <div className='row-span-2  p-6 border-2 border-blue-500'>
                    <div className='flex flex-col gap-y-5 text-2xl'>
                        <li>Mern</li>
                        <li>Mern</li>
                        <li>Mern</li>
                        <li>Mern</li>
                        <li>Mern</li>
                        <li>Mern</li>
                        <li>Mern</li>
                        <li>Mern</li>
                        <li>Mern</li>
                        <li>Mern</li>
                        <li>Mern</li>
                        <li>Mern</li>
                        <li>Mern</li>
                        <li>Mern</li>

                    </div>
                </div>

                <div className='border-2 border-blue-500'>
                    <p className='text-5xl'>
                        Hobbies : Playing Sports, Singing and Jamming, Writing Musics, Manga/Comics
                    </p>

                </div>
                <div className='col-span-3 border-2 border-blue-500'>
                    <p>

                        Well see you around
                    </p>
                </div>






            </div>
        </section >
    )
}

export default Practice



