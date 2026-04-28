import { useEffect, useRef } from 'react'
import ExperienceCard from '../ExperienceCard/ExperienceCard'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ExperienceDetails } from './ExperienceDetails'

gsap.registerPlugin(ScrollTrigger)

const playingState: Record<number, boolean> = {}

const Experience = () => {
    const descRefs = useRef<HTMLParagraphElement[]>([])
    const crtRefs = useRef<HTMLDivElement[]>([])

    useEffect(() => {
        const tapes = document.getElementsByClassName('experience-tape')
        const tvs = document.getElementsByClassName('experience-tv')

        // TV starts OFFSCREEN RIGHT
        gsap.set(tvs, { opacity: 0, x: 700 })

        const triggers: ScrollTrigger[] = []

        Array.from(tapes).forEach((el) => {
            gsap.set(el, { opacity: 0, x: -80 })

            const t = gsap.to(el, {
                x: 0,
                opacity: 1,
                duration: 0.9,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: el,
                    start: 'top 75%',
                },
            })
            if (t.scrollTrigger) triggers.push(t.scrollTrigger)
        })

        return () => triggers.forEach((t) => t.kill())
    }, [])

    const setDescRef = (el: HTMLParagraphElement | null, index: number) => {
        if (el) descRefs.current[index] = el
    }

    const setCrtRef = (el: HTMLDivElement | null, index: number) => {
        if (el) crtRefs.current[index] = el
    }

    const prepareTypewriter = (index: number) => {
        const desc = descRefs.current[index]
        if (!desc) return

        const text = desc.innerText
        desc.innerHTML = ''

        text.split('').forEach((ch) => {
            const span = document.createElement('span')
            span.innerText = ch
            span.style.opacity = '0'
            desc.appendChild(span)
        })
    }

    const animateTypewriter = (tl: gsap.core.Timeline, index: number, delay = 0) => {
        const desc = descRefs.current[index]
        if (!desc) return

        tl.to(
            desc.children,
            {
                opacity: 1,
                duration: 0.04,
                stagger: 0.025,
                ease: 'none',
            },
            `>+${delay}`
        )
    }

    const handlePlayTV = (
        e: React.MouseEvent<HTMLDivElement, MouseEvent>,
        isClickedTape: boolean,
        index: number
    ) => {
        if (playingState[index]) return
        playingState[index] = true

        const parent = e.currentTarget.parentElement
        const tape = parent?.querySelector('.experience-tape') as HTMLDivElement
        const tv = parent?.querySelector('.experience-tv') as HTMLDivElement
        const crt = crtRefs.current[index]

        if (!tape || !tv) {
            playingState[index] = false
            return
        }

        // 🎬 TAPE → TV
        if (isClickedTape) {
            prepareTypewriter(index)

            const tl = gsap.timeline({
                onComplete: () => { playingState[index] = false },
            })

            // Tape exits LEFT
            tl.to(tape, {
                x: -700,
                opacity: 0,
                scale: 0.9,
                duration: 0.6,
                ease: 'power3.in',
            })

            // TV enters from RIGHT (same time)
            tl.fromTo(tv,
                { x: 700, opacity: 0, scale: 1.1 },
                {
                    x: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 0.7,
                    ease: 'expo.out',
                },
                "<"
            )

            // CRT ON
            tl.call(() => {
                crt?.classList.remove('power-off')
                crt?.classList.add('power-on')
                tv.classList.add('is-playing')
                void crt?.offsetWidth
            }, [], '<+0.1')

            tl.call(() => {
                setTimeout(() => crt?.classList.remove('power-on'), 700)
            })

            animateTypewriter(tl, index, 0.2)
        }

        // 🎬 TV → TAPE
        else {
            const tl = gsap.timeline({
                onComplete: () => { playingState[index] = false },
            })

            tl.call(() => {
                crt?.classList.remove('power-on')
                crt?.classList.add('power-off')
                tv.classList.remove('is-playing')
            })

            // TV exits RIGHT
            tl.to(tv, {
                x: 700,
                opacity: 0,
                scale: 1.1,
                duration: 0.5,
                ease: 'power3.in',
            }, '>+0.1')

            // Tape enters from LEFT
            tl.fromTo(tape,
                { x: -700, opacity: 0, scale: 0.9 },
                {
                    x: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 0.7,
                    ease: 'back.out(1.4)',
                },
                "<"
            )

            tl.call(() => {
                crt?.classList.remove('power-off')
                const desc = descRefs.current[index]
                if (desc) {
                    desc.innerHTML = ExperienceDetails[index]?.description ?? ''
                }
            })
        }
    }

    return (
        <section id="experience" className="bg-black min-h-[200vh] w-full p-16">
            <hr className="bg-white w-full mb-2 opacity-20" />

            <h2 className="mb-16 text-xs tracking-[0.4em] text-gray-500 uppercase font-[Orbitron]">
                // Experience
            </h2>

            <div className="flex flex-col items-center gap-20 w-full">
                {ExperienceDetails.map((detail, index) => (
                    <ExperienceCard
                        key={index}
                        {...detail}
                        handlePlayTV={handlePlayTV}
                        setDescRef={setDescRef}
                        setCrtRef={setCrtRef}
                        index={index}
                    />
                ))}
            </div>
        </section>
    )
}

export default Experience