import { useEffect, useRef, useState } from 'react';
import { TechSkillList } from './TechSkillList';
import gsap from 'gsap';

type PositionType = {
    x: number,
    y: number
}

const About = () => {
    const profileRef = useRef(null);
    const titleRef = useRef(null);
    const skillsRef = useRef<HTMLUListElement>(null);
    const hobbiesRef = useRef(null);
    const nameRef = useRef(null);
    const footerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Profile image animation
            gsap.from(profileRef.current, {
                scale: 0,
                rotation: -180,
                opacity: 0,
                duration: 1.2,
                ease: 'back.out(1.7)',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top center',
                    toggleActions: 'play none none reverse'
                }
            });

            // Name animation
            gsap.from(nameRef.current, {
                y: 50,
                opacity: 0,
                duration: 0.8,
                delay: 0.5,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top center',
                    toggleActions: 'play none none reverse'
                }
            });

            // Title animation with text reveal
            gsap.from(titleRef.current, {
                x: -100,
                opacity: 0,
                duration: 1,
                delay: 0.3,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top center',
                    toggleActions: 'play none none reverse'
                }
            });

            // Skills animation - stagger effect
            gsap.from(skillsRef.current && skillsRef.current.children, {
                x: 100,
                opacity: 0,
                duration: 0.6,
                stagger: 0.15,
                delay: 0.5,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top center',
                    toggleActions: 'play none none reverse'
                }
            });

            // Hobbies animation
            gsap.from(hobbiesRef.current, {
                y: 100,
                opacity: 0,
                duration: 1,
                delay: 0.8,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top center',
                    toggleActions: 'play none none reverse'
                }
            });

            // Footer animation
            gsap.from(footerRef.current, {
                opacity: 0,
                scale: 0.8,
                duration: 0.8,
                delay: 1.2,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top center',
                    toggleActions: 'play none none reverse'
                }
            });

            // Floating animation for profile image
            gsap.to(profileRef.current, {
                y: -40,
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: 'power1.inOut',
                delay: 1.5
            });
            console.log()

            if (dragRef.current?.firstChild) {

                gsap.to(dragRef.current?.firstChild, {
                    y: -20,
                    duration: 1,
                    repeat: -1,
                    yoyo: true,

                })
            }

        }, containerRef);



        return () => {
            ctx.revert()
        };
    }, []);

    const containerRef = useRef<HTMLDivElement>(null);
    const dragRef = useRef<HTMLDivElement>(null);
    const titleContainerRef = useRef<HTMLDivElement>(null);

    const [position, setPosition] = useState<PositionType>({ x: 0, y: 0 });
    const [dragging, setDragging] = useState(false);
    const [rel, setRel] = useState<null | any>(null);

    // Initialize position on mount
    useEffect(() => {
        if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            setPosition({
                x: rect.width * 0.9,
                y: rect.height * 0.55
            });
        }
    }, []);

    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current || !dragRef.current) return;

        const dragRect = dragRef.current.getBoundingClientRect();
        // const parentRect = containerRef.current.getBoundingClientRect();

        setDragging(true);
        setRel({
            x: e.clientX - dragRect.left,
            y: e.clientY - dragRect.top
        });
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!dragging || !containerRef.current || !dragRef.current) return;

        const parentRect = containerRef.current.getBoundingClientRect();
        const dragRect = dragRef.current.getBoundingClientRect();

        const newX = e.clientX - parentRect.left - rel.x;
        const newY = e.clientY - parentRect.top - rel.y;
        const maxX = parentRect.width - dragRect.width;
        const maxY = parentRect.height - dragRect.height;

        setPosition({
            x: Math.max(0, Math.min(newX, maxX)),
            y: Math.max(0, Math.min(newY, maxY)),
        });
    };

    const handleMouseUp = () => {
        setDragging(false);
    };

    // Helper: returns spotlight mask style for any container
    const getSpotlightStyle = (ref: React.RefObject<HTMLElement | null>) => {
        if (!ref.current || !containerRef.current) return {};

        const containerRect = containerRef.current.getBoundingClientRect();
        const targetRect = ref.current.getBoundingClientRect();

        const spotlightCenterX = position.x + 112; // same radius logic
        const spotlightCenterY = position.y + 112;

        const relativeX = spotlightCenterX - (targetRect.left - containerRect.left);
        const relativeY = spotlightCenterY - (targetRect.top - containerRect.top);

        return {
            maskImage: `radial-gradient(circle 112px at ${relativeX}px ${relativeY}px, black 100%, transparent 100%)`,
            WebkitMaskImage: `radial-gradient(circle 112px at ${relativeX}px ${relativeY}px, black 100%, transparent 100%)`
        };
    };

    const handleRemoveDragRefChild = () => {
        const child = dragRef.current?.querySelector('p')
        if (child) {
            gsap.to(child, {
                opacity: 0,
                duration: 1.5,
                ease: 'back.out',


                onComplete: () => {

                    child.remove()
                }
            })

        }
    }

    return (
        <section
            id="about"
            ref={containerRef}
            className='relative min-h-screen w-full p-10 bg-gradient-to-br from-black via-gray-950 to-black text-gray-900 overflow-hidden'
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
        >
            <div className='relative w-full h-full grid grid-cols-1 md:grid-cols-3 grid-flow-row md:grid-rows-2 gap-8 justify-items-center items-center'>

                {/* Profile Section */}
                <div className='md:row-span-2 w-full h-full flex flex-col items-center justify-center gap-6'>
                    <div className='relative group'>
                        <div className='absolute rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000'></div>
                        <img
                            ref={profileRef}
                            src="about_profile.jpg"
                            alt="about_profile_picture"
                            className='relative rounded-full w-96 h-96 object-cover border-4 border-white shadow-2xl hover:scale-110 transition-transform duration-500 cursor-pointer'
                        />
                    </div>
                    <div
                        ref={nameRef}
                        className='text-center'
                        style={getSpotlightStyle(nameRef)}
                    >
                        <p className='text-2xl font-light mb-2 text-white'>Hello There! I am</p>
                        <h2 className='text-4xl font-bold text-white'>
                            Rukesh Shivahari
                        </h2>
                    </div>
                </div>

                {/* Title Section */}
                <div
                    ref={titleContainerRef}
                    className='relative bg-black flex items-center justify-center p-6 overflow-hidden'
                    style={getSpotlightStyle(titleContainerRef)}
                >
                    <h1
                        ref={titleRef}
                        className='text-white text-6xl md:text-8xl font-bold leading-tight select-none'
                    >
                        Software Developer
                    </h1>
                </div>

                {/* Skills Section */}
                <div className='md:row-span-2 w-full h-full p-6'
                >
                    <div className='bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/20 hover:border-purple-400 transition-all duration-300'>
                        <h3 className='text-3xl font-bold mb-6 text-blue-400'>Tech Stack</h3>
                        <ul
                            ref={skillsRef}
                            className='flex flex-col gap-y-4 text-xl text-white'
                            style={getSpotlightStyle(skillsRef)}

                        >
                            {TechSkillList.map((skill, index) => (
                                <li
                                    key={index}
                                    className='flex items-center gap-3 group'
                                >
                                    <span className='w-2 h-2 bg-purple-400 rounded-full group-hover:w-4 transition-all duration-300'></span>
                                    <span className='group-hover:text-purple-300 transition-colors duration-300'>{skill}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Hobbies Section */}
                <div
                    ref={hobbiesRef}
                    className='flex items-center justify-center p-6'
                    style={getSpotlightStyle(hobbiesRef)}
                >
                    <div className='bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300'>
                        <h3 className='text-2xl font-bold mb-4 text-blue-300'>Hobbies</h3>
                        <p className='text-3xl md:text-4xl font-light leading-relaxed text-white'>
                            Playing Sports, Singing and Jamming, Writing Music, Manga/Comics
                        </p>
                    </div>
                </div>

                {/* Footer Section */}
                <div
                    ref={footerRef}
                    className='col-span-1 md:col-span-3 flex items-center justify-center'
                    style={getSpotlightStyle(footerRef)}
                >
                    <p className='text-3xl font-light italic text-gray-400 hover:text-white transition-colors duration-300 cursor-default'>
                        Well, see you around ✌️
                    </p>
                </div>
            </div>

            {/* Draggable Spotlight */}
            <div
                ref={dragRef}
                className='w-56 h-56 rounded-full ring-2 ring-amber-200 shadow-[0_0_100px_rgba(251,191,36,0.7)] bg-yellow-100 mix-blend-difference'
                onMouseDown={handleMouseDown}
                style={{
                    position: 'absolute',
                    left: position.x,
                    top: position.y,
                    cursor: dragging ? 'grabbing' : 'grab',
                    userSelect: 'none',
                    padding: 10
                }}
                onMouseEnter={() => { handleRemoveDragRefChild() }}
            >
                <p className='flex  justify-center text-4xl mt-[50%] 
              font-semibold text-black 
             tracking-wide select-none'>
                    Drag me!!</p>
            </div>
        </section>
    );
};

export default About;





// <section id="about" ref={containerRef} className='relative h-screen w-screen p-10 bg-gray-500 text-black' >
//     <div className='w-full h-full grid grid-cols-3 grid-flow-row grid-rows-2  gap-5 justify-items-center items-center '>

//         <div className='row-span-2  w-full h-full flex flex-col '>

//             <img src="about_profile.jpg" alt="about_profile_picture" className=' rounded-full hover:scale-90 transition-transform duration-500' />
//             <div>
//                 Hello There ! I am  Rukesh Shivahari
//             </div>

//         </div>

//         <div className='  '>

//             <p className='text-8xl'>
//                 Software Developer
//             </p>
//         </div>


//         <div className='row-span-2  p-6  '>
//             <div className='flex flex-col gap-y-5 text-2xl'>
//                 {TechSkillList.map((skill, index) =>
//                     <li key={index}>
//                         {skill}
//                     </li>
//                 )}


//             </div>
//         </div>

//         <div className=' '>
//             <p className='text-5xl'>
//                 Hobbies : Playing Sports, Singing and Jamming, Writing Musics, Manga/Comics
//             </p>

//         </div>
//         <div className='col-span-3  '>
//             <p>

//                 Well see you around
//             </p>
//         </div>






//     </div>