import { useEffect, useRef, useState } from 'react';
import { TechSkillList } from './TechSkillList';
import gsap from 'gsap';

type PositionType = {
    x: number,
    y: number
}

const About = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const dragRef = useRef<HTMLDivElement>(null);

    const profileRef = useRef(null);
    const titleRef = useRef(null);
    const skillsRef = useRef<HTMLUListElement>(null);
    const hobbiesRef = useRef(null);
    const nameRef = useRef(null);
    const footerRef = useRef(null);
    const titleContainerRef = useRef<HTMLDivElement>(null);

    const [position, setPosition] = useState<PositionType>({ x: 0, y: 0 });
    const [dragging, setDragging] = useState(false);
    const [rel, setRel] = useState<any>(null);

    // 🔥 NEW STATE
    const [spotlightOn, setSpotlightOn] = useState(true);

    /* ─────────────────────────────
       INITIAL POSITION
    ───────────────────────────── */
    useEffect(() => {
        if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            setPosition({
                x: rect.width * 0.8,
                y: rect.height * 0.5
            });
        }
    }, []);

    /* ─────────────────────────────
       ANIMATIONS
    ───────────────────────────── */
    useEffect(() => {
        const ctx = gsap.context(() => {

            gsap.from(profileRef.current, {
                scale: 0,
                rotation: -180,
                opacity: 0,
                duration: 1.2,
                ease: 'back.out(1.7)',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top center',
                }
            });

            gsap.from(titleRef.current, {
                x: -100,
                opacity: 0,
                duration: 1,
            });

            if (skillsRef.current) {
                gsap.from(skillsRef.current.children, {
                    x: 100,
                    opacity: 0,
                    duration: 0.6,
                    stagger: 0.15,
                });
            }

            gsap.to(profileRef.current, {
                y: -40,
                duration: 2,
                repeat: -1,
                yoyo: true,
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    /* ─────────────────────────────
       SPOTLIGHT STYLE
    ───────────────────────────── */
    const getSpotlightStyle = (ref: React.RefObject<HTMLElement | null>) => {

        // ❗ If OFF → show everything
        if (!spotlightOn) {
            return {
                maskImage: 'none',
                WebkitMaskImage: 'none'
            };
        }

        if (!ref.current || !containerRef.current) return {};

        const containerRect = containerRef.current.getBoundingClientRect();
        const targetRect = ref.current.getBoundingClientRect();

        const spotlightCenterX = position.x + 112;
        const spotlightCenterY = position.y + 112;

        const relativeX = spotlightCenterX - (targetRect.left - containerRect.left);
        const relativeY = spotlightCenterY - (targetRect.top - containerRect.top);

        return {
            maskImage: `radial-gradient(circle 120px at ${relativeX}px ${relativeY}px, black 100%, transparent 100%)`,
            WebkitMaskImage: `radial-gradient(circle 120px at ${relativeX}px ${relativeY}px, black 100%, transparent 100%)`
        };
    };

    /* ─────────────────────────────
       DRAG HANDLERS
    ───────────────────────────── */
    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!dragRef.current) return;

        const rect = dragRef.current.getBoundingClientRect();

        setDragging(true);
        setRel({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        });
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!dragging || !containerRef.current || !dragRef.current) return;

        const parent = containerRef.current.getBoundingClientRect();
        const dragRect = dragRef.current.getBoundingClientRect();

        const x = e.clientX - parent.left - rel.x;
        const y = e.clientY - parent.top - rel.y;

        setPosition({
            x: Math.max(0, Math.min(x, parent.width - dragRect.width)),
            y: Math.max(0, Math.min(y, parent.height - dragRect.height)),
        });
    };

    const handleMouseUp = () => setDragging(false);

    /* ─────────────────────────────
       TOGGLE SPOTLIGHT (GSAP)
    ───────────────────────────── */
    const toggleSpotlight = () => {
        setSpotlightOn(prev => {
            const next = !prev;

            if (dragRef.current) {
                gsap.to(dragRef.current, {
                    scale: next ? 1 : 0,
                    opacity: next ? 1 : 0,
                    duration: 0.4,
                    ease: 'power2.out'
                });
            }

            return next;
        });
    };

    return (
        <section
            id="about"
            ref={containerRef}
            className='relative min-h-screen w-full p-10 bg-black text-white overflow-hidden'
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
        >

            {/* 🔥 TOGGLE BUTTON */}
            <button
                onClick={toggleSpotlight}
                className='absolute top-6 right-6 z-50 px-4 py-2 rounded-lg bg-yellow-400 text-black font-bold hover:scale-105 transition'
            >
                {spotlightOn ? 'Turn OFF' : 'Turn ON'}
            </button>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 items-center'>

                {/* PROFILE */}
                <div className='flex flex-col items-center gap-6'>
                    <img
                        ref={profileRef}
                        src="about_profile.jpg"
                        className='rounded-full w-72 h-72 object-cover'
                    />

                    <div ref={nameRef} style={getSpotlightStyle(nameRef)}>
                        <h2 className='text-3xl font-bold'>
                            Rukesh Shivahari
                        </h2>
                    </div>
                </div>

                {/* TITLE */}
                <div
                    ref={titleContainerRef}
                    style={getSpotlightStyle(titleContainerRef)}
                >
                    <h1
                        ref={titleRef}
                        className='text-6xl font-bold'
                    >
                        Software Developer
                    </h1>
                </div>

                {/* SKILLS */}
                <div>
                    <ul
                        ref={skillsRef}
                        style={getSpotlightStyle(skillsRef)}
                    >
                        {TechSkillList.map((skill, i) => (
                            <li key={i}>{skill}</li>
                        ))}
                    </ul>
                </div>

                {/* HOBBIES */}
                <div
                    ref={hobbiesRef}
                    style={getSpotlightStyle(hobbiesRef)}
                >
                    Playing Sports, Music, Manga
                </div>

                {/* FOOTER */}
                <div
                    ref={footerRef}
                    style={getSpotlightStyle(footerRef)}
                >
                    See you around ✌️
                </div>
            </div>

            {/* 🔥 SPOTLIGHT */}
            <div
                ref={dragRef}
                onMouseDown={handleMouseDown}
                className='absolute w-56 h-56 rounded-full bg-yellow-200 mix-blend-difference'
                style={{
                    left: position.x,
                    top: position.y,
                    cursor: dragging ? 'grabbing' : 'grab'
                }}
            />
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