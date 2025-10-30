import { useEffect, useRef, useState } from 'react';
import { TechSkillList } from './TechSkillList';
import gsap from 'gsap';
type PositionType = {
    x: string | number,
    y: string | number
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
                y: -20,
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: 'power1.inOut',
                delay: 1.5
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    const containerRef = useRef<HTMLDivElement>(null);
    const dragRef = useRef<HTMLDivElement>(null);

    const [position, setPosition] = useState<PositionType>({ x: '90%', y: '55%' });
    const [dragging, setDragging] = useState(false);
    const [rel, setRel] = useState<null | any>(null); // Mouse offset relative to top-left

    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;

        const targetRect = (e.target as HTMLDivElement).getBoundingClientRect();

        setDragging(true);
        setRel({
            x: e.clientX - targetRect.left,
            y: e.clientY - targetRect.top
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

    return (

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

        <section
            id="about"
            ref={containerRef}
            className='relative min-h-screen w-full p-10 bg-gradient-to-br from-slate-900 via-gray-600 to-slate-900 text-white overflow-hidden'
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
                    >
                        <p className='text-2xl font-light mb-2'>Hello There! I am</p>
                        <h2 className='text-4xl font-bold'>
                            Rukesh Shivahari
                        </h2>
                    </div>
                </div>

                {/* Title Section */}
                <div className='flex items-center justify-center p-6'>
                    <h1
                        ref={titleRef}
                        className='text-6xl md:text-8xl font-bold bg-clip-text leading-tight'
                    >
                        Software Developer
                    </h1>
                </div>

                {/* Skills Section */}
                <div className='md:row-span-2 w-full h-full p-6'>
                    <div className='bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/20 hover:border-purple-400 transition-all duration-300'>
                        <h3 className='text-3xl font-bold mb-6 text-blue-400'>Tech Stack</h3>
                        <ul ref={skillsRef} className='flex flex-col gap-y-4 text-xl '>
                            {TechSkillList.map((skill, index) => (
                                <li
                                    key={index}
                                    className='flex items-center gap-3 '
                                >

                                    <span className='w-2 h-2 bg-purple-400 rounded-full group-hover:w-4 transition-all duration-300'></span>
                                    <span className='group-hover:text-purple-300 transition-colors duration-300 '>{skill}</span>
                                </li>
                            ))}

                        </ul>
                    </div>
                </div>



                {/* Hobbies Section */}
                <div
                    ref={hobbiesRef}
                    className='flex items-center justify-center p-6'
                >
                    <div className='bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300'>
                        <h3 className='text-2xl font-bold mb-4 text-blue-300'>Hobbies</h3>
                        <p className='text-3xl md:text-4xl font-light leading-relaxed'>
                            Playing Sports, Singing and Jamming, Writing Music, Manga/Comics
                        </p>
                    </div>
                </div>

                {/* Footer Section */}
                <div
                    ref={footerRef}
                    className='col-span-1 md:col-span-3 flex items-center justify-center'
                >
                    <p className='text-3xl font-light italic text-gray-400 hover:text-white transition-colors duration-300 cursor-default'>
                        Well, see you around ✌️
                    </p>
                </div>
            </div>
            <div
                ref={dragRef}
                className='relative  w-56 h-56 rounded-full cursor-grabbing bg-yellow-100 mix-blend-difference'
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                style={{
                    position: 'absolute',
                    left: position.x,
                    top: position.y,


                    userSelect: 'none',
                    padding: 10
                }}
            >

            </div>
        </section>
    );
};

export default About;