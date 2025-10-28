import { useRef, useState } from 'react';
import { TechSkillList } from './TechSkillList';

type PositionType = {
    x: string | number,
    y: string | number
}
const About = () => {

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

        <section id="about" ref={containerRef} className='relative h-screen w-screen p-10 bg-gray-500 text-black' >
            <div className='w-full h-full grid grid-cols-3 grid-flow-row grid-rows-2  gap-5 justify-items-center items-center '>

                <div className='row-span-2  w-full h-full flex flex-col '>

                    <img src="about_profile.jpg" alt="about_profile_picture" className=' rounded-full hover:scale-90 transition-transform duration-500' />
                    <div>
                        Hello There ! I am  Rukesh Shivahari
                    </div>

                </div>

                <div className='  '>

                    <p className='text-8xl'>
                        Software Developer
                    </p>
                </div>


                <div className='row-span-2  p-6  '>
                    <div className='flex flex-col gap-y-5 text-2xl'>
                        {TechSkillList.map((skill, index) =>
                            <li key={index}>
                                {skill}
                            </li>
                        )}


                    </div>
                </div>

                <div className=' '>
                    <p className='text-5xl'>
                        Hobbies : Playing Sports, Singing and Jamming, Writing Musics, Manga/Comics
                    </p>

                </div>
                <div className='col-span-3  '>
                    <p>

                        Well see you around
                    </p>
                </div>






            </div>
            <div
                ref={dragRef}
                className='relative  w-40 h-40 rounded-full cursor-grabbing bg-yellow-100 mix-blend-difference'
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