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
                            markers: true,
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
            <section className="h-screen flex items-center justify-center px-8">
                <div className="text-center">
                    <h1 className="text-7xl md:text-9xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                        THE PROJECTS
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-400">
                        Scroll down to explore horizontally
                    </p>
                </div>
            </section>

            {/* Horizontal Scroll Section */}
            <section id="projects" ref={containerRef} className="h-screen overflow-hidden">
                <div ref={scrollRef} className=" flex h-full">
                    {ProjectDetails.map((projectDetail, index) => (
                        <ProjectCard {...projectDetail} index={index} />
                    ))}
                </div>
            </section>

            {/* Footer Section */}
            <section className="h-screen flex items-center justify-center px-8">
                <div className="text-center">
                    <h2 className="text-6xl md:text-8xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                        Let's Work Together
                    </h2>
                    <button className="px-10 py-5 bg-white text-black rounded-full text-xl font-medium hover:bg-gray-200 transition-colors shadow-2xl">
                        Get in Touch →
                    </button>
                </div>
            </section>
        </div>
    );
}