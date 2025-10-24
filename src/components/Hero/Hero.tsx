import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';



const Hero = () => {
    const mainRef = useRef<HTMLElement | null>(null);

    useEffect(() => {

        const triggers: ScrollTrigger[] = [];
        const elements = document.querySelectorAll(".section-title");


        elements.forEach((ele, index) => {

            gsap.set(ele.children[0].children[0], { opacity: 0 })

            const trigger = gsap.to(ele.children[0].children[0], {
                y: -520,
                opacity: 1,
                duration: 2,
                scrollTrigger: {
                    trigger: ele,
                    start: index === 0 ? "10% 5%" : "top center",
                    // toggleActions: "reverse none none none",
                    // markers: true,
                },
            });

            gsap.set(ele, { opacity: 0 })

            const backgroundTrigger = gsap.to(ele, {
                opacity: 1,
                duration: 2,
                scrollTrigger: {
                    trigger: ele,
                    start: index === 0 ? "10% 5%" : "top center",

                },
            });
            const newTrigger = gsap.to(ele.children[0].children[0], {

                ...(index === 2 && { letterSpacing: '200px', marginLeft: '150px', fontSize: '40px' }),

                scrollTrigger: {
                    trigger: ele,
                    start: "top top",
                    end: index === 2 ? "+=1500px" : "+=1300px",
                    pin: ele.children[0],
                    scrub: true,
                    pinSpacing: false,
                    // markers: true,
                },
            });




            triggers.push(trigger.scrollTrigger as ScrollTrigger);
            triggers.push(backgroundTrigger.scrollTrigger as ScrollTrigger);

            triggers.push(newTrigger.scrollTrigger as ScrollTrigger);

        });


        gsap.set('.action-container', { opacity: 1 })
        const actionOpacityTrigger = gsap.to('.action-container', {

            opacity: 0,
            scrollTrigger: {
                trigger: '.action-container',
                start: "50px top",
                end: "+=800px",
                scrub: true,
                // markers: true

            }
        })

        console.log("Created triggers")

        return () => {
            console.log("Killing triggers");
            triggers.forEach((t) => t.kill());
            actionOpacityTrigger.kill()
        };
    }, []);



    return (
        <section id="main" ref={mainRef} className=''>
            <section
                className="section-title  h-[200vh] text-9xl flex items-center justify-center "
                style={{
                    backgroundImage: 'url("/lights.jpg")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >

                <div className="">

                    <div>LIGHTS</div>
                </div>
            </section>

            <section

                className="section-title h-[200vh]  text-9xl  flex items-center justify-center"
                style={{
                    backgroundImage: 'url("/lightsAndCamera.jpg")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="">

                    <div>CAMERA</div>
                </div>
            </section>

            <section
                // here moving or spacing this "ACTION" can cause overflow-x
                className="section-title h-[200vh]  text-9xl  flex items-center justify-center "
                style={{
                    backgroundImage: 'url("/lightsAndCamera.jpg")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="flex items-center justify-center">

                    <div className='action-container'>ACTION</div>
                </div>

            </section>
        </section >
    );
};

export default Hero;