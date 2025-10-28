import gsap from "gsap"
import { useEffect, useState } from "react"


const Navbar = () => {
    const [active, setActive] = useState("#about");

    const navItems = [
        { label: "About", href: "#about" },
        { label: "Contact", href: "#contact" },
        { label: "TheProj", href: "#projects" },
        { label: "InExp", href: "#experience" },
        { label: "Others", href: "#maintenance" },
        { label: "News", href: "#maintenance" },
    ];
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
                start: "110px center",
                end: "+=10px",
                scrub: true,
                // markers: true,
            }
        })

    }, [])

    return (

        // <div className="navbar-main  flex justify-center  relative z-0  h-[400vh] bg-black text-gray-300 text-4xl">

        //  <div className="navbar flex items-center justify-center h-16 sticky top-0 rounded-lg bg-gray-900 w-11/12 ">

        <nav className="navbar mx-auto z-10 w-9/12 bg-black/30 backdrop-blur-md rounded-full px-8 py-4 shadow-amber-800 shadow-2xl flex sticky top-0 items-center justify-between">
            <div className="nav-elements flex items-center gap-x-20 text-[35px]">
                {navItems.map((item) => (
                    <a
                        key={item.label}
                        href={item.href}
                        onClick={() => setActive(item.href)}
                        className={`relative text-white font-medium transition-colors duration-800 hover:text-gray-300
                after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[3px] after:w-full
                after:rounded-full after:bg-white after:origin-left after:scale-x-0 after:opacity-0
                after:transition-all after:duration-800
                hover:after:scale-x-100 hover:after:opacity-100
                ${active === item.href ? "after:scale-x-100 after:opacity-100" : ""}
              `}
                    >
                        {item.label}
                    </a>
                ))}
            </div>
        </nav>







        // </div>
    )
}

export default Navbar