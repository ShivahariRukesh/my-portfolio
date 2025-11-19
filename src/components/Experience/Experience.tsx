import { useEffect, useRef } from "react";
import ExperienceCard from "../ExperienceCard/ExperienceCard";
import gsap from "gsap";
import type { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExperienceDetails } from "./ExperienceDetails";


const Experience = () => {

    const descRefs = useRef<HTMLParagraphElement[]>([])
    useEffect(() => {

        const triggers: ScrollTrigger[] = []
        const experienceTapeChildren = document.getElementsByClassName('experience-tape')
        const experienceTVChildren = document.getElementsByClassName('experience-tv')

        // const experienceTapeChildren = cardRef.current?.experienceTapeChildren;
        if (!experienceTapeChildren) return;
        gsap.set(experienceTVChildren, { opacity: 0 })


        Array.from(experienceTapeChildren).forEach((ele) => {
            gsap.set(ele, { opacity: 0 })


            const trigger = gsap.to(ele, {
                x: 200,
                opacity: 1,
                duration: 0.8,
                scrollTrigger: {
                    trigger: ele,
                    start: "top center",
                    // toggleActions: "play reverse play reverse"

                }
            });

            triggers.push(trigger.scrollTrigger as ScrollTrigger)
        });


        return () => {
            triggers.forEach((t) => t.kill())
        }
    }, []);


    const setDescRef = (el: HTMLParagraphElement | null, index: number) => {
        if (el) descRefs.current[index] = el;
    };

    const handlePlayTV = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, isClickedTape: boolean, index: number) => {
        const triggeredCurrentDiv = e.currentTarget
        let triggeredCurrentDivSibling;
        if (isClickedTape) {
            console.log(e.currentTarget.parentElement?.lastChild)

            triggeredCurrentDivSibling = e.currentTarget.parentElement?.lastChild as HTMLDivElement
        } else {
            console.log(e.currentTarget.parentElement?.firstChild)

            triggeredCurrentDivSibling = e.currentTarget.parentElement?.firstChild as HTMLDivElement
        }

        if (isClickedTape) {

            let description = descRefs.current[index]
            const descriptionText = description?.innerText
            description.innerHTML = ""

            descriptionText?.split("").forEach((character) => {
                const span = document.createElement("span")
                span.innerText = character
                span.style.opacity = "0"
                description?.appendChild(span)
            })



            const t1 = gsap.timeline()

            gsap.to(triggeredCurrentDiv, {
                x: -400,
                opacity: 0,
                duration: 0.8,
            })


            t1.to(triggeredCurrentDivSibling, {
                x: -400,
                opacity: 1,
                duration: 1,
                delay: 0.5
            })
            t1.to(description.children, {
                opacity: 1,
                duration: 0.05,
                stagger: 0.05,
                ease: "power1.inOut",
                delay: 0.3
            })


        } else {

            gsap.to(triggeredCurrentDiv, {
                x: 0,
                opacity: 0,
                duration: 0.8,
            })

            gsap.to(triggeredCurrentDivSibling, {
                x: 0,
                opacity: 1,
                duration: 1,
            })
        }
    }

    return (
        <section id="experience" className="bg-black h-[200vh] w-full p-16 ">
            <hr className="bg-white w-full" />
            <div
                className="flex flex-col justify-around items-center h-full w-full"
            >
                {ExperienceDetails.map((detail, index) => {

                    return <ExperienceCard key={index} {...detail} handlePlayTV={handlePlayTV} setDescRef={setDescRef} index={index} />

                }
                )
                }

            </div>

        </section>
    );
};

export default Experience;
