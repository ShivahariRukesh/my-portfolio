import type { ExperienceDetailType } from '../../types/experienceDetail'
import './ExperienceCard.css'

type ExperienceCardProps = ExperienceDetailType & {
    handlePlayTV: (e: React.MouseEvent<HTMLDivElement, MouseEvent>, isClickedTape: boolean, index: number) => void
    setDescRef: (el: HTMLParagraphElement | null, index: number) => void
    setCrtRef: (el: HTMLDivElement | null, index: number) => void
    index: number
}

const ExperienceCard = ({
    date,
    companyName,
    location,
    position,
    description,
    handlePlayTV,
    setDescRef,
    setCrtRef,
    index,
}: ExperienceCardProps) => {
    return (
        <div className="experience-pair relative w-[560px] h-[360px]">

            {/* ═══════════════════════════════════════════════════
          VHS CASSETTE TAPE
      ═══════════════════════════════════════════════════ */}
            <div
                className="experience-tape absolute inset-0 cursor-pointer select-none"
                style={{ width: 560, height: 360 }}
                onClick={(e) => handlePlayTV(e, true, index)}
            >
                {/* Cassette body */}
                <div
                    className="tape-body absolute inset-0 rounded-xl"
                    style={{
                        background: 'linear-gradient(160deg, #1c1008 0%, #0f0803 50%, #1a0e06 100%)',
                        border: '2px solid #3d2007',
                        boxShadow: '0 0 0 1px #6b3007, 0 20px 60px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,180,60,0.08)',
                        transition: 'box-shadow 0.35s ease',
                    }}
                >
                    {/* Spine stripe */}
                    <div className="tape-spine absolute top-0 left-0 right-0 rounded-t-xl" style={{ height: 10 }} />

                    {/* ── Label ───────────────────────────────────── */}
                    <div
                        className="absolute left-5 right-5"
                        style={{
                            top: 18, height: 130,
                            background: 'linear-gradient(135deg, #fef9ec 0%, #fde68a 30%, #fef3c7 60%, #fde68a 100%)',
                            borderRadius: 6,
                            boxShadow: '0 2px 8px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.6)',
                            border: '1px solid #d97706',
                        }}
                    >
                        {/* Label texture */}
                        <div className="absolute inset-0 opacity-10" style={{
                            backgroundImage: 'repeating-linear-gradient(0deg, #000 0px, transparent 1px, transparent 6px)',
                            borderRadius: 6,
                        }} />

                        {/* REC */}
                        <div className="absolute top-2.5 right-3 flex items-center gap-1.5">
                            <div className="rec-dot w-2 h-2 rounded-full bg-red-500" />
                            <span style={{
                                fontFamily: "'Orbitron', sans-serif", fontSize: 9, fontWeight: 700,
                                color: '#dc2626', letterSpacing: '0.15em',
                            }}>REC</span>
                        </div>

                        {/* Company */}
                        <div className="px-3 pt-3">
                            <div style={{
                                fontFamily: "'Orbitron', sans-serif", fontSize: 21, fontWeight: 900,
                                color: '#1c1008', lineHeight: 1.1, letterSpacing: '-0.02em',
                            }}>{companyName}</div>
                            <div className="mt-1 inline-flex items-center gap-1" style={{
                                background: 'rgba(120,53,15,0.12)', borderRadius: 4, padding: '2px 6px',
                            }}>
                                <svg width="9" height="9" viewBox="0 0 24 24" fill="none">
                                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" fill="#78350f" />
                                </svg>
                                <span style={{
                                    fontFamily: "'Share Tech Mono', monospace", fontSize: 11,
                                    color: '#78350f', letterSpacing: '0.05em',
                                }}>{location}</span>
                            </div>
                        </div>

                        {/* Separator */}
                        <div className="mx-3 mt-2" style={{ height: 1, background: 'linear-gradient(90deg, transparent, #d97706, transparent)' }} />

                        {/* Position */}
                        <div className="px-3 mt-2">
                            <div style={{
                                fontFamily: "'Share Tech Mono', monospace", fontSize: 13,
                                color: '#451a03', letterSpacing: '0.08em', textTransform: 'uppercase',
                            }}>{position}</div>
                        </div>

                        {/* Date */}
                        <div className="absolute bottom-2.5 right-3">
                            <div style={{
                                fontFamily: "'VT323', monospace", fontSize: 18,
                                color: '#78350f', letterSpacing: '0.1em',
                            }}>{date}</div>
                        </div>

                        {/* VHS mark */}
                        <div className="absolute bottom-2.5 left-3" style={{
                            fontFamily: "'Orbitron', sans-serif", fontSize: 9, fontWeight: 700,
                            color: '#92400e', letterSpacing: '0.2em', opacity: 0.6,
                        }}>VHS · HQ · T-120</div>
                    </div>

                    {/* ── Tape mechanism ─────────────────────────── */}
                    <div className="absolute left-0 right-0" style={{
                        top: 162, height: 88,
                        background: 'linear-gradient(180deg, #0a0503 0%, #140904 50%, #0a0503 100%)',
                        borderTop: '1px solid #3d2007', borderBottom: '1px solid #3d2007',
                    }}>
                        {/* Window */}
                        <div className="absolute left-1/2 -translate-x-1/2" style={{
                            top: 8, width: 260, height: 52, background: '#050200',
                            borderRadius: 4, border: '2px solid #2d1505',
                            boxShadow: 'inset 0 2px 8px rgba(0,0,0,0.9)',
                        }}>
                            <div className="tape-magnetic absolute left-8 right-8"
                                style={{ top: '50%', height: 12, marginTop: -6, borderRadius: 1 }} />
                            {[28, 230].map((x, i) => (
                                <div key={i} className="absolute w-1.5 rounded-full" style={{
                                    left: x, top: 14, height: 24,
                                    background: 'linear-gradient(180deg, #4a2008 0%, #2d1505 100%)',
                                }} />
                            ))}
                        </div>

                        {/* Left reel */}
                        <div className="reel-spin absolute" style={{ left: 56, top: '50%', marginTop: -28 }}>
                            <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{
                                background: 'conic-gradient(from 0deg, #1a0a00, #3d2007, #1a0a00, #3d2007, #1a0a00, #3d2007)',
                                border: '3px solid #5c2d0a', boxShadow: '0 0 12px rgba(0,0,0,0.8)',
                            }}>
                                <div className="w-5 h-5 rounded-full" style={{
                                    background: 'radial-gradient(circle, #7c3a10 0%, #3d1a07 60%, #1a0a00 100%)',
                                    border: '2px solid #5c2d0a',
                                }} />
                            </div>
                        </div>

                        {/* Right reel */}
                        <div className="reel-spin absolute"
                            style={{ right: 56, top: '50%', marginTop: -28, animationDirection: 'reverse', animationDuration: '4s' }}>
                            <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{
                                background: 'conic-gradient(from 0deg, #1a0a00, #3d2007, #1a0a00, #3d2007, #1a0a00, #3d2007)',
                                border: '3px solid #5c2d0a', boxShadow: '0 0 12px rgba(0,0,0,0.8)',
                            }}>
                                <div className="w-5 h-5 rounded-full" style={{
                                    background: 'radial-gradient(circle, #7c3a10 0%, #3d1a07 60%, #1a0a00 100%)',
                                    border: '2px solid #5c2d0a',
                                }} />
                            </div>
                        </div>
                    </div>

                    {/* ── Bottom strip ───────────────────────────── */}
                    <div className="absolute bottom-0 left-0 right-0 rounded-b-xl flex justify-between items-end px-8 pb-3 pt-2"
                        style={{ background: 'linear-gradient(180deg, transparent, rgba(10,5,3,0.8))' }}>
                        <div className="flex items-center gap-2">
                            <div style={{
                                width: 0, height: 0,
                                borderTop: '7px solid transparent', borderBottom: '7px solid transparent',
                                borderLeft: '12px solid #d97706', filter: 'drop-shadow(0 0 4px #d97706)',
                            }} />
                            <span style={{
                                fontFamily: "'Share Tech Mono', monospace", fontSize: 11,
                                color: '#d97706', letterSpacing: '0.15em', textShadow: '0 0 8px #d97706',
                            }}>INSERT TO PLAY</span>
                        </div>
                        <div style={{
                            fontFamily: "'VT323', monospace", fontSize: 16,
                            color: '#5c3317', letterSpacing: '0.12em',
                        }}>E-180 · HI-FI</div>
                    </div>

                    {/* Bottom notch tabs */}
                    {[30, 490].map((x, i) => (
                        <div key={i} className="absolute bottom-0" style={{
                            left: x, width: 14, height: 8, background: '#0a0503',
                            borderRadius: '0 0 2px 2px', border: '1px solid #3d2007', borderTop: 'none',
                        }} />
                    ))}
                </div>

                {/* ── TAP TO PLAY OVERLAY ─────────────────────── */}
                <div className="tap-to-play-overlay">
                    {/* Three staggered pulse rings */}
                    <div className="tap-pulse-ring" />
                    <div className="tap-pulse-ring" />
                    <div className="tap-pulse-ring" />

                    {/* Play button */}
                    <div className="tap-play-icon" />

                    {/* Labels */}
                    <div className="tap-play-label">TAP TO PLAY</div>
                    <div className="tap-play-sublabel">CLICK TAPE TO INSERT</div>
                </div>
            </div>

            {/* ═══════════════════════════════════════════════════
          CRT TELEVISION
      ═══════════════════════════════════════════════════ */}
            <div
                className="experience-tv absolute inset-0 cursor-pointer select-none"
                style={{ width: 560, height: 360 }}
                onClick={(e) => handlePlayTV(e, false, index)}
            >
                {/* TV bezel */}
                <div
                    className="tv-body absolute inset-0 rounded-2xl"
                    style={{
                        background: 'linear-gradient(160deg, #1e1e1e 0%, #121212 50%, #0a0a0a 100%)',
                        border: '2px solid #2a2a2a',
                        boxShadow: '0 0 0 1px #383838, 0 24px 60px rgba(0,0,0,0.9), inset 0 1px 0 rgba(255,255,255,0.04)',
                        transition: 'box-shadow 0.6s ease',
                    }}
                >
                    {/* Brand strip */}
                    <div className="absolute top-3 left-0 right-0 flex justify-between items-center px-5">
                        <div style={{
                            fontFamily: "'Orbitron', sans-serif", fontSize: 10, fontWeight: 700,
                            color: '#555', letterSpacing: '0.3em',
                        }}>CHROMAVISION</div>
                        <div className="flex items-center gap-1.5">
                            <div className="status-dot w-1.5 h-1.5 rounded-full bg-gray-600"
                                style={{ transition: 'background 0.3s ease, box-shadow 0.3s ease' }} />
                            <span className="status-text" style={{
                                fontFamily: "'Share Tech Mono', monospace", fontSize: 9,
                                color: '#444', letterSpacing: '0.2em',
                            }} />
                        </div>
                    </div>

                    {/* ── CRT Screen ─────────────────────────────── */}
                    <div
                        ref={(el) => setCrtRef(el, index)}
                        className="crt-screen crt-scanlines crt-noise crt-vignette tv-reflection absolute overflow-hidden"
                        style={{
                            top: 28, left: 20, right: 20, bottom: 50,
                            background: 'radial-gradient(ellipse at 40% 35%, #0a2a14 0%, #041208 40%, #020a05 100%)',
                            borderRadius: '12px',
                            boxShadow: 'inset 0 0 40px rgba(0,0,0,0.8), inset 0 0 80px rgba(0,0,0,0.4)',
                            border: '3px solid #111',
                            transition: 'box-shadow 0.6s ease',
                        }}
                    >
                        {/* Screen ambient */}
                        <div className="absolute inset-0 pointer-events-none" style={{
                            background: 'radial-gradient(ellipse at 50% 50%, rgba(74,222,128,0.04) 0%, transparent 70%)',
                        }} />

                        {/* Channel number */}
                        <div className="absolute top-3 right-3 flex items-center gap-2" style={{ zIndex: 15 }}>
                            <div style={{
                                fontFamily: "'VT323', monospace", fontSize: 14, color: '#4ade80',
                                letterSpacing: '0.2em', textShadow: '0 0 8px #4ade80', opacity: 0.7,
                            }}>CH 0{(index + 1).toString().padStart(2, '0')}</div>
                        </div>

                        {/* Description */}
                        <div className="absolute inset-0 flex items-center justify-center p-6" style={{ zIndex: 5 }}>
                            <p
                                ref={(el) => setDescRef(el, index)}
                                className="blink-cursor"
                                style={{
                                    fontFamily: "'Share Tech Mono', monospace", fontSize: 14.5,
                                    lineHeight: 1.75, color: '#86efac',
                                    textShadow: '0 0 8px rgba(74,222,128,0.45)',
                                    letterSpacing: '0.03em', textAlign: 'left', margin: 0,
                                }}
                            >{description}</p>
                        </div>

                        {/* Status bar */}
                        <div className="absolute bottom-0 left-0 right-0 flex justify-between items-center px-4"
                            style={{
                                height: 24, background: 'rgba(0,0,0,0.6)',
                                borderTop: '1px solid rgba(74,222,128,0.12)', zIndex: 15,
                            }}>
                            <div style={{
                                fontFamily: "'VT323', monospace", fontSize: 13,
                                color: 'rgba(74,222,128,0.5)', letterSpacing: '0.12em',
                            }}>▶ PLAYING</div>
                            <div style={{
                                fontFamily: "'VT323', monospace", fontSize: 13,
                                color: 'rgba(74,222,128,0.4)', letterSpacing: '0.08em',
                            }}>SP · HQ · STEREO</div>
                        </div>

                        {/* Eject hint — only visible on hover */}
                        <div className="eject-hint-overlay">
                            {/* Eject icon (upward arrow + bar) */}
                            <div className="eject-icon">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                    <path d="M5 20h14v-2H5v2zm7-18L5.33 10h4.84v4h3.66v-4h4.84L12 2z" fill="#4ade80" />
                                </svg>
                            </div>
                            <div className="eject-label">TAP TO EJECT</div>
                            <div className="eject-sublabel">REMOVE TAPE</div>
                        </div>
                    </div>

                    {/* ── Control panel ──────────────────────────── */}
                    <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-6 rounded-b-2xl"
                        style={{
                            height: 46, background: 'linear-gradient(180deg, #111 0%, #0a0a0a 100%)',
                            borderTop: '1px solid #222',
                        }}>
                        {/* Knobs */}
                        <div className="flex items-center gap-3">
                            {['VOL', 'CH'].map((label) => (
                                <div key={label} className="flex flex-col items-center gap-0.5">
                                    <div className="w-5 h-5 rounded-full" style={{
                                        background: 'radial-gradient(circle at 35% 35%, #3a3a3a, #111)',
                                        border: '1px solid #333', boxShadow: '0 2px 4px rgba(0,0,0,0.6)',
                                    }}>
                                        <div className="w-px h-2 bg-gray-400 mx-auto mt-1" style={{ opacity: 0.5 }} />
                                    </div>
                                    <span style={{
                                        fontFamily: "'Share Tech Mono', monospace", fontSize: 7,
                                        color: '#444', letterSpacing: '0.1em',
                                    }}>{label}</span>
                                </div>
                            ))}
                        </div>

                        {/* Center hint */}
                        <div className="flex flex-col items-center">
                            <div style={{
                                fontFamily: "'Orbitron', sans-serif", fontSize: 8, fontWeight: 700,
                                color: '#2a2a2a', letterSpacing: '0.3em',
                            }}>CHROMAVISION · 1984</div>
                        </div>

                        {/* Speaker grille */}
                        <div className="grid gap-0.5" style={{ gridTemplateColumns: 'repeat(8, 1fr)' }}>
                            {Array.from({ length: 24 }).map((_, i) => (
                                <div key={i} className="w-1 h-1 rounded-full" style={{ background: '#1e1e1e', border: '1px solid #2a2a2a' }} />
                            ))}
                        </div>
                    </div>

                    {/* Side vents */}
                    <div className="absolute right-2 top-1/2 -translate-y-1/2 flex flex-col gap-1">
                        {Array.from({ length: 6 }).map((_, i) => (
                            <div key={i} style={{ width: 3, height: 10, background: '#1a1a1a', borderRadius: 1 }} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExperienceCard