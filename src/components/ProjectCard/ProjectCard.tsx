import type { ProjectDetailType } from '../../types/projectDetailType'

// type ProjectCardProps = ProjectDetailType & {
//     index: number;
// }

const ProjectCard = ({ index, title, image, githubLink, color, description }: ProjectDetailType & { index: number }) => {


    return (

        <div
            key={index}
            className="project-card flex-shrink-0 w-screen h-full flex items-center justify-center px-12"
        >
            <div className=" relative w-full max-w-6xl h-[80vh] overflow-hidden rounded-3xl group cursor-pointer">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className={`absolute inset-0 bg-gradient-to-t ${color} opacity-60 group-hover:opacity-40 transition-opacity duration-500`} />

                <div className="absolute bottom-0 left-0 right-0 p-10">
                    <div className="transform transition-transform duration-500 group-hover:translate-y-[-10px]">
                        <p className="text-sm uppercase tracking-widest text-gray-300 mb-3 truncate">
                            {description}
                        </p>
                        <h2 className="text-5xl md:text-6xl font-bold mb-6">
                            {title}
                        </h2>
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <a href={githubLink} target="_blank" rel="noopener noreferrer" className="">
                                <button className="px-8 py-4 bg-white text-black rounded-full font-medium cursor-grab hover:bg-gray-200 hover:text-blue-400 transition-colors">

                                    View Project →
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        // <div
        //     key={index}
        //     className="project-card perspective-distant flex-shrink-0 w-screen h-full flex items-center justify-center px-12"
        // >
        //     {/* <div className={` relative w-full max-w-6xl h-[80vh] rounded-3xl group cursor-pointer  [transform-style:preserve-3d] transition-transform duration-1000 hover:transform hover:rotate-y-180 `} */}

        //     <div className={` relative w-full max-w-6xl h-[80vh]  rounded-3xl group cursor-pointer  [transform-style:preserve-3d] transition-transform duration-1000 ${isCardClicked && 'transform rotate-y-180'} `}
        //         onClick={() => setIsCardClicked((prev) => !prev)}
        //     >

        //         <div className='absolute w-full h-full overflow-hidden backface-hidden'>

        //             {/* Image */}
        //             <img
        //                 src={image}
        //                 alt={title}
        //                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        //             />

        //             {/* Gradient Overlay */}
        //             <div className={`absolute inset-0 bg-gradient-to-t ${color} opacity-60 group-hover:opacity-40 transition-opacity duration-500`} />

        //             {/* Content */}
        //             <div className="absolute bottom-0 left-0 right-0 p-10 ">
        //                 <div className="transform transition-transform duration-500 group-hover:translate-y-[-10px]">
        //                     <p className="text-sm uppercase tracking-widest text-gray-300 mb-3 truncate">
        //                         {description}
        //                     </p>
        //                     <h2 className="text-5xl md:text-6xl font-bold mb-6">
        //                         {title}
        //                     </h2>
        //                     <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        //                         <a href={githubLink} target="_blank" rel="noopener noreferrer" className="">
        //                             <button className="px-8 py-4 bg-white text-black rounded-full font-medium cursor-grab hover:bg-gray-200 hover:text-blue-400 transition-colors">

        //                                 View Project →
        //                             </button>
        //                         </a>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>


        //         <div className={`absolute  w-full h-full inset-0 bg-gradient-to-t ${color} opacity-50 group-hover:opacity-80  transition-opacity duration-500 transform rotate-y-180 backface-hidden`}>
        //             {description}

        //         </div>
        //     </div>
        // </div >

    )
}

export default ProjectCard