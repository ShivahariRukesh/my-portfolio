import gsap from "gsap"
import { useEffect } from "react"


const Navbar = () => {

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

        // <div className="navbar-main  flex justify-center  relative z-0  h-[400vh] bg-black text-gray-300 text-4xl">
        <div className="min-h-screen relative z-0 bg-black">

            {/* <div className="navbar flex items-center justify-center h-16 sticky top-0 rounded-lg bg-gray-900 w-11/12 "> */}

            <nav className="navbar mx-auto  z-10 w-8/12 bg-black rounded-full px-8 py-4 shadow-amber-800 shadow-2xl flex sticky top-0 items-center justify-between">
                <div className="nav-elements flex items-center gap-x-32">
                    <a
                        href="#about"
                        className="text-white text-lg font-medium hover:text-gray-300 transition-colors"
                    >
                        About
                    </a>
                    <a
                        href="#contact"
                        className="text-white text-lg font-medium hover:text-gray-300 transition-colors"
                    >
                        Contact
                    </a>
                    <a
                        href="#projects"
                        className="text-white text-lg font-medium hover:text-gray-300 transition-colors"
                    >
                        TheProj
                    </a>
                    <a
                        href="#experience"
                        className="text-white text-lg font-medium hover:text-gray-300 transition-colors"
                    >
                        InXp
                    </a>
                    <a
                        href="#others"
                        className="text-white text-lg font-medium hover:text-gray-300 transition-colors"
                    >
                        Others
                    </a>
                    <a
                        href="#news"
                        className="text-white text-lg font-medium hover:text-gray-300 transition-colors"
                    >
                        News
                    </a>
                </div>

                {/* <ul className="nav-elements flex  ">
                    <li className=" w-44 ">
                        About
                    </li>

                    <li className=" w-44 ">
                        Contact
                    </li>

                    <li className=" w-44 ">
                        The Proj
                    </li>

                    <li className=" w-44 ">
                        I XP
                    </li>

                    <li className=" w-44 ">
                        Objects
                    </li>

                    <li className=" w-44 ">
                        News
                    </li>
                </ul> */}
            </nav>





        </div>
    )
}

export default Navbar