import About from "./About/About"
import Experience from "./Experience/Experience"
import Projects from "./Projects/Projects"
import Contact from "./Contact/Contact"
import Navbar from "./Navbar/Navbar"
import MaintenanceSection from "./MaintenanceSection"


const Main = () => {



    return (

        <div className="min-h-screen relative z-0 bg-gray-600">


            <Navbar />

            <About />
            <Experience />
            <Projects />
            <Contact />
            <MaintenanceSection />


        </div>
    )
}

export default Main