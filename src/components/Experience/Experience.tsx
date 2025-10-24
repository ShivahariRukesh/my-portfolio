import { useEffect, useRef } from "react";
import ExperienceCard from "../ExperienceCard/ExperienceCard";
import gsap from "gsap";
import type { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExperienceDetails } from "./ExperienceDetails";

const Experience = () => {
    const cardRef = useRef<HTMLDivElement>(null); // ✅ Typed correctly

    useEffect(() => {

        const triggers: ScrollTrigger[] = []
        const children = cardRef.current?.children;
        if (!children) return;

        Array.from(children).forEach((ele, index) => {

            gsap.set(ele, { opacity: 0 })

            const trigger = gsap.to(ele, {
                x: index % 2 === 0 ? -300 : 300,
                opacity: 1,
                duration: 0.8,
                scrollTrigger: {
                    trigger: ele,
                    start: "top center",
                    toggleActions: "play reverse play reverse"

                }
            });

            triggers.push(trigger.scrollTrigger as ScrollTrigger)
        });

        return () => {
            triggers.forEach((t) => t.kill())
        }
    }, []);

    return (
        <section id="experience" className="h-[200vh] w-full p-16 ">
            <div
                ref={cardRef}
                className="flex flex-col justify-around items-center h-full w-full"
            >
                {ExperienceDetails.map((detail) => {

                    return <ExperienceCard {...detail} />

                }
                )
                }

            </div>
        </section>
    );
};

export default Experience;
