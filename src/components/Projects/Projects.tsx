import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ProjectDetails } from './ProjectDetails';
import ProjectCard from '../ProjectCard/ProjectCard';
declare global {
    interface Window {
        gsap: any;
        ScrollTrigger: any;
    }
}


export default function HorizontalScroll() {
    const containerRef = useRef<HTMLDivElement>(null);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let ctx: any;

        const loadGSAP = async () => {



            gsap.registerPlugin(ScrollTrigger);

            const container = containerRef.current;
            const scrollContainer = scrollRef.current;

            if (container && scrollContainer) {
                ctx = gsap.context(() => {
                    const sections = gsap.utils.toArray('.project-card');
                    const scrollWidth = scrollContainer.offsetWidth;

                    gsap.to(sections, {

                        xPercent: -100 * (sections.length - 1),
                        ease: "none",
                        scrollTrigger: {
                            trigger: container,
                            pin: true,
                            scrub: 2,
                            // markers: true,
                            start: "top 5%",
                            end: () => "+=" + scrollWidth
                        }
                    });
                });
            }
        };

        loadGSAP();

        return () => {
            if (ctx) ctx.revert();
        };
    }, []);

    return (
        <div className="bg-black text-white">

            {/* Hero Section */}
            <section id="projects" className=" text-center text-6xl px-8">
                <hr className="bg-white w-full " />
                <p className='py-12'>
                    The Projects
                </p>
            </section>

            {/* Horizontal Scroll Section */}
            <div ref={containerRef} className=" h-screen overflow-hidden">
                <div ref={scrollRef} className=" flex h-full">
                    {ProjectDetails.map((projectDetail, index) => (
                        <ProjectCard {...projectDetail} index={index} />
                    ))}
                </div>
            </div>


        </div>
    );
}