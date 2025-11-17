import { useEffect } from "react";
import ExperienceCard from "../ExperienceCard/ExperienceCard";
import gsap from "gsap";
import type { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExperienceDetails } from "./ExperienceDetails";


const Experience = () => {

    useEffect(() => {

        const triggers: ScrollTrigger[] = []
        const experienceTapeChildren = document.getElementsByClassName('experience-tape')
        const experienceTVChildren = document.getElementsByClassName('experience-tv')

        // const experienceTapeChildren = cardRef.current?.experienceTapeChildren;
        console.log(experienceTapeChildren)
        if (!experienceTapeChildren) return;
        gsap.set(experienceTVChildren, { opacity: 0 })


        Array.from(experienceTapeChildren).forEach((ele, index) => {
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

    const handlePlayTV = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, isClickedTape: boolean) => {
        const triggeredCurrentDiv = e.currentTarget
        let triggeredCurrentDivSibling;
        if (isClickedTape) {
            console.log(e.currentTarget.parentElement?.lastChild)

            triggeredCurrentDivSibling = e.currentTarget.parentElement?.lastChild as HTMLDivElement
        } else {
            console.log(e.currentTarget.parentElement?.firstChild)

            triggeredCurrentDivSibling = e.currentTarget.parentElement?.firstChild as HTMLDivElement
        }

        console.log(isClickedTape)
        if (isClickedTape) {

            gsap.to(triggeredCurrentDiv, {
                x: -400,
                opacity: 0,
                duration: 0.8,
            })

            gsap.to(triggeredCurrentDivSibling, {

                x: -400,
                opacity: 1,
                duration: 1,
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

                    return <ExperienceCard key={index} {...detail} handlePlayTV={handlePlayTV} />

                }
                )
                }

            </div>

        </section>
    );
};

export default Experience;
