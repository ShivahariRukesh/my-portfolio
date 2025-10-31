import { useEffect, useRef } from 'react'
import gsap from 'gsap';
const InitialLoadPage = ({ onComplete }: { onComplete: () => void }) => {


    const loaderRef = useRef(null);
    const logoRef = useRef(null);

    useEffect(() => {
        // Initial entrance animation
        gsap.fromTo(
            loaderRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 0.8, ease: "power2.out" }
        );

        gsap.fromTo(
            logoRef.current,
            { scale: 0, rotate: 0 },
            {
                scale: 1,
                rotate: 360,
                duration: 1.2,
                ease: "elastic.out(1, 0.6)",
                repeat: -1,
                yoyo: true,
            }
        );
    }, []);

    // Animate loader exit when complete
    const handleExit = () => {
        gsap.to(logoRef.current, {
            opacity: 0,
            scale: 0.5,
            duration: 0.4,
            ease: "power2.inOut",
        });

        gsap.to(loaderRef.current, {
            opacity: 0,
            duration: 0.8,
            ease: "power2.inOut",
            delay: 0.4,
            onComplete: onComplete,
        });
    };
    // Automatically call exit animation when onComplete is triggered externally
    useEffect(() => {
        // Listen for custom event from parent when loading ends
        window.addEventListener("loaderExit", handleExit);
        return () => window.removeEventListener("loaderExit", handleExit);
    }, []);
    return (
        <div
            ref={loaderRef}
            className="fixed inset-0 flex items-center justify-center bg-gray-900 z-50"
        >
            <div className="flex flex-col items-center text-white">
                <div
                    ref={logoRef}
                    className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-gray-900 font-bold text-xl"
                >
                    <img src="/loading-logo.png" alt="loading-logo" className='rounded-full' />
                </div>
            </div>
        </div>
    )
}

export default InitialLoadPage