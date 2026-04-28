import { useEffect, useRef } from 'react'
import ExperienceCard from '../ExperienceCard/ExperienceCard'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ExperienceDetails } from './ExperienceDetails'

gsap.registerPlugin(ScrollTrigger)

// Track which cards are currently "playing" so we block mid-animation clicks
const playingState: Record<number, boolean> = {}

const Experience = () => {
    const descRefs = useRef<HTMLParagraphElement[]>([])
    const crtRefs = useRef<HTMLDivElement[]>([])

    /* ──────────────────────────────────────────────────────────
       SCROLL-TRIGGERED ENTRANCE
    ────────────────────────────────────────────────────────── */
    useEffect(() => {
        const tapes = document.getElementsByClassName('experience-tape')
        const tvs = document.getElementsByClassName('experience-tv')

        gsap.set(tvs, { opacity: 0, x: 60 })

        const triggers: ScrollTrigger[] = []

        Array.from(tapes).forEach((el, i) => {
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

    /* ──────────────────────────────────────────────────────────
       REF SETTERS
    ────────────────────────────────────────────────────────── */
    const setDescRef = (el: HTMLParagraphElement | null, index: number) => {
        if (el) descRefs.current[index] = el
    }
    const setCrtRef = (el: HTMLDivElement | null, index: number) => {
        if (el) crtRefs.current[index] = el
    }

    /* ──────────────────────────────────────────────────────────
       HELPERS — typewriter text
    ────────────────────────────────────────────────────────── */
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
            delay >= 0 ? `>+${delay}` : `>${delay}`
        )
    }

    /* ──────────────────────────────────────────────────────────
       MAIN INTERACTION HANDLER
    ────────────────────────────────────────────────────────── */
    const handlePlayTV = (
        e: React.MouseEvent<HTMLDivElement, MouseEvent>,
        isClickedTape: boolean,
        index: number
    ) => {
        // Block spam clicks mid-animation
        if (playingState[index]) return
        playingState[index] = true

        const tape = e.currentTarget.parentElement?.querySelector('.experience-tape') as HTMLDivElement
        const tv = e.currentTarget.parentElement?.querySelector('.experience-tv') as HTMLDivElement
        const crt = crtRefs.current[index]

        if (!tape || !tv) { playingState[index] = false; return }

        /* ── TAPE → TV  (insert tape, power on TV) ──── */
        if (isClickedTape) {
            prepareTypewriter(index)

            const tl = gsap.timeline({
                onComplete: () => { playingState[index] = false },
            })

            // 1. Tape: quick squish inward then slide off left
            tl.to(tape, {
                scaleX: 0.94,
                scaleY: 0.96,
                duration: 0.1,
                ease: 'power2.in',
            })
            tl.to(tape, {
                x: -640,
                scaleX: 0.88,
                opacity: 0,
                duration: 0.55,
                ease: 'power3.in',
            }, '>-0.04')

            // 2. TV slides in from the right
            tl.set(tv, { x: 120, opacity: 0, scale: 1 })
            tl.to(tv, {
                x: 0,
                opacity: 1,
                duration: 0.65,
                ease: 'expo.out',
            }, '>-0.1')

            // 3. CRT power-on flash
            tl.call(() => {
                crt?.classList.remove('power-off')
                crt?.classList.add('power-on')
                tv.classList.add('is-playing')
                // force reflow so animation re-triggers if needed
                void crt?.offsetWidth
            }, [], '<+0.05')

            // 4. Remove power-on class after animation settles
            tl.call(() => {
                setTimeout(() => crt?.classList.remove('power-on'), 700)
            }, [], '>+0.1')

            // 5. Typewriter
            animateTypewriter(tl, index, 0.15)

            /* ── TV → TAPE  (eject tape, power off TV) ─── */
        } else {
            const tl = gsap.timeline({
                onComplete: () => { playingState[index] = false },
            })

            // 1. CRT power-off collapse
            tl.call(() => {
                crt?.classList.remove('power-on')
                crt?.classList.add('power-off')
                tv.classList.remove('is-playing')
            })

            // 2. TV fades + slides right while screen collapses
            tl.to(tv, {
                x: 120,
                opacity: 0,
                duration: 0.5,
                ease: 'power3.in',
            }, '>+0.15')

            // 3. Tape bounces back in from left with spring ease
            tl.set(tape, { x: -640, opacity: 0, scaleX: 0.88, scaleY: 0.96 })
            tl.to(tape, {
                x: 0,
                opacity: 1,
                scaleX: 1,
                scaleY: 1,
                duration: 0.7,
                ease: 'back.out(1.4)',
            }, '>-0.05')

            // 4. Reset CRT class after it's off screen
            tl.call(() => {
                crt?.classList.remove('power-off')
                // restore description text
                const desc = descRefs.current[index]
                if (desc) {
                    const original = ExperienceDetails[index]?.description ?? ''
                    desc.innerHTML = original
                }
            }, [], '<+0.3')
        }
    }

    return (
        <section id="experience" className="bg-black min-h-[200vh] w-full p-16">
            <hr className="bg-white w-full mb-2 opacity-20" />

            <h2 style={{
                fontFamily: "'Orbitron', sans-serif",
                fontSize: 13,
                letterSpacing: '0.4em',
                color: '#555',
                marginBottom: '4rem',
                textTransform: 'uppercase',
            }}>
        // Experience
            </h2>

            <div className="flex flex-col justify-around items-center gap-20 w-full">
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