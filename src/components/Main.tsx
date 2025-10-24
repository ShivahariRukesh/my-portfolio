import gsap from "gsap"
import { useEffect } from "react"
import About from "./About/About"
import Experience from "./Experience/Experience"
import Projects from "./Projects/Projects"
import Contact from "./Contact/Contact"
import Navbar from "./Navbar/Navbar"


const Main = () => {

    useEffect(() => {

        gsap.set(".navbar", { opacity: 0 })
        gsap.set(".nav-elements", { opacity: 0 })

        gsap.to(".navbar", {

            opacity: 1,
            scrollTrigger: {
                trigger: ".navbar",
                start: "top center",
                end: "bottom center",
                scrub: true,
                // markers: true,
            }
        })

        gsap.to(".nav-elements", {

            opacity: 1,
            scrollTrigger: {
                trigger: ".navbar",
                start: "40px center",
                end: "bottom 40%",
                scrub: true,
                // markers: true,
            }
        })

    }, [])

    return (

        <div className="min-h-screen relative z-0 bg-gray-800">


            <Navbar />

            <About />
            <Experience />
            <Projects />
            <Contact />



        </div>
    )
}

export default Main