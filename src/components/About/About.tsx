import { useEffect, useRef, useState } from 'react';
import { TechSkillList } from './TechSkillList';
import gsap from 'gsap';

type PositionType = {
    x: number;
    y: number;
};

const About = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const dragRef = useRef<HTMLDivElement>(null);

    const profileRef = useRef<HTMLImageElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const skillsRef = useRef<HTMLUListElement>(null);
    const hobbiesRef = useRef<HTMLDivElement>(null);
    const nameRef = useRef<HTMLDivElement>(null);
    const footerRef = useRef<HTMLDivElement>(null);
    const titleContainerRef = useRef<HTMLDivElement>(null);

    const [position, setPosition] = useState<PositionType>({ x: 0, y: 0 });
    const [dragging, setDragging] = useState(false);
    const [rel, setRel] = useState<{ x: number; y: number } | null>(null);
    const [spotlightOn, setSpotlightOn] = useState(true);
    const [isFading, setIsFading] = useState(false);
    const [hasHovered, setHasHovered] = useState(false);

    /* ─────────────────────────────
       INITIAL POSITION
    ───────────────────────────── */
    useEffect(() => {
        if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            setPosition({
                x: rect.width * 0.8,
                y: rect.height * 0.5,
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
                },
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
        if (!spotlightOn) {
            return { maskImage: 'none', WebkitMaskImage: 'none' };
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
            WebkitMaskImage: `radial-gradient(circle 120px at ${relativeX}px ${relativeY}px, black 100%, transparent 100%)`,
        };
    };

    /* ─────────────────────────────
       DRAG HANDLERS
    ───────────────────────────── */
    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!dragRef.current) return;
        const rect = dragRef.current.getBoundingClientRect();
        setDragging(true);
        setRel({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!dragging || !containerRef.current || !dragRef.current || !rel) return;
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
       TOGGLE SPOTLIGHT
    ───────────────────────────── */
    const toggleSpotlight = () => {
        setSpotlightOn((prev) => {
            const next = !prev;
            if (dragRef.current) {
                gsap.to(dragRef.current, {
                    scale: next ? 1 : 0,
                    opacity: next ? 1 : 0,
                    duration: 0.4,
                    ease: 'power2.out',
                });
            }
            return next;
        });
    };

    return (
        <section
            id="about"
            ref={containerRef}
            className="relative min-h-screen w-full p-10 bg-black text-white overflow-hidden"
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
        >
            {/* ── TOGGLE BUTTON ── */}
            <button
                onClick={toggleSpotlight}
                className="absolute top-6 right-6 z-50 px-4 py-2 rounded-lg bg-yellow-400 text-black font-bold hover:scale-105 transition"
            >
                {spotlightOn ? 'Turn OFF' : 'Turn ON'}
            </button>

            {/* ── MAIN LAYOUT ──
                Rows:
                  Row 1 (flex-1): Profile | Title | Skills
                  Row 2 (auto):   Hobbies (col 1–2) | empty (col 3)
                  Row 3 (auto):   Footer (full width)
            ── */}
            <div className="flex flex-col gap-10 min-h-[calc(100vh-5rem)]">

                {/* ROW 1 — three equal columns */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 flex-1 items-center">

                    {/* COL 1 — Profile + Name */}
                    <div className="flex flex-col items-center gap-6">
                        <img
                            ref={profileRef}
                            src="about_profile.jpg"
                            alt="Rukesh Shivahari"
                            className="rounded-full w-56 h-56 md:w-72 md:h-72 object-cover ring-4 ring-yellow-400/30"
                        />
                        <div ref={nameRef} style={getSpotlightStyle(nameRef)}>
                            <h2 className="text-2xl md:text-3xl font-bold text-center">
                                Rukesh Shivahari
                            </h2>
                        </div>
                    </div>

                    {/* COL 2 — Title */}
                    <div
                        ref={titleContainerRef}
                        style={getSpotlightStyle(titleContainerRef)}
                        className="flex items-center justify-center"
                    >
                        <h1
                            ref={titleRef}
                            className="text-4xl md:text-6xl font-bold leading-tight text-center"
                        >
                            Software
                            <br />
                            Developer
                        </h1>
                    </div>

                    {/* COL 3 — Skills */}
                    <div className="flex items-center justify-center md:justify-start">
                        <ul
                            ref={skillsRef}
                            style={getSpotlightStyle(skillsRef)}
                            className="flex flex-col gap-3"
                        >
                            {TechSkillList.map((skill, i) => (
                                <li
                                    key={i}
                                    className="flex items-center gap-2 text-lg font-medium tracking-wide"
                                >
                                    <span className="w-2 h-2 rounded-full bg-yellow-400 shrink-0" />
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* ROW 2 — Hobbies */}
                <div
                    ref={hobbiesRef}
                    style={getSpotlightStyle(hobbiesRef)}
                >
                    <p className="text-xs tracking-[0.3em] uppercase text-yellow-400/60 mb-4 font-medium">
                        Outside the IDE
                    </p>
                    <div className="flex flex-wrap gap-4">
                        {[
                            { icon: '⚽', label: 'Playing Sports', sub: 'Football · Basketball · Badminton' },
                            { icon: '🎸', label: 'Music', sub: 'Guitar · Songwriting · Jamming' },
                            { icon: '📖', label: 'Manga', sub: 'Shonen · Seinen · Webtoons' },
                        ].map(({ icon, label, sub }) => (
                            <div
                                key={label}
                                className="group relative flex items-center gap-4 px-5 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden cursor-default transition-all duration-300 hover:border-yellow-400/50 hover:bg-white/10"
                                style={{ minWidth: '200px' }}
                            >
                                {/* Glow blob on hover */}
                                <div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                                    style={{
                                        background: 'radial-gradient(circle at 30% 50%, rgba(250,204,21,0.12) 0%, transparent 70%)',
                                    }}
                                />

                                {/* Icon bubble */}
                                <div className="relative shrink-0 w-12 h-12 rounded-xl bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                                    {icon}
                                </div>

                                {/* Text */}
                                <div className="relative">
                                    <p className="font-semibold text-white text-sm leading-tight">{label}</p>
                                    <p className="text-gray-500 text-xs mt-0.5 group-hover:text-gray-400 transition-colors duration-300">{sub}</p>
                                </div>

                                {/* Corner accent */}
                                <div className="absolute bottom-0 right-0 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    style={{
                                        background: 'linear-gradient(135deg, transparent 50%, rgba(250,204,21,0.2) 50%)',
                                        borderTopLeftRadius: '50%',
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* ROW 3 — Footer (full width) */}
                <div
                    ref={footerRef}
                    style={getSpotlightStyle(footerRef)}
                    className="border-t border-white/10 pt-6 text-center text-gray-500 text-sm tracking-widest uppercase"
                >
                    See you around ✌️
                </div>
            </div>

            {/* ── SPOTLIGHT CIRCLE ── */}
            <div
                ref={dragRef}
                onMouseDown={handleMouseDown}
                onMouseEnter={() => setIsFading(true)}
                className="absolute w-56 h-56 rounded-full bg-yellow-200 mix-blend-difference pointer-events-auto"
                style={{
                    left: position.x,
                    top: position.y,
                    cursor: dragging ? 'grabbing' : 'grab',
                }}
            >
                {!hasHovered && (
                    <>
                        <div
                            className="absolute inset-0 flex items-center justify-center"
                            style={{
                                opacity: isFading ? 0 : 1,
                                transition: isFading ? 'opacity 0.8s ease' : 'none',
                            }}
                            onTransitionEnd={() => setHasHovered(true)}
                        >
                            <span
                                className="text-black font-black text-sm tracking-widest uppercase"
                                style={{ animation: 'dragBounce 1s ease-in-out infinite' }}
                            >
                                Drag Me
                            </span>
                        </div>

                        <style>{`
                            @keyframes dragBounce {
                                0%, 100% { transform: translateY(0);    }
                                50%       { transform: translateY(-8px); }
                            }
                        `}</style>
                    </>
                )}
            </div>
        </section>
    );
};

export default About;