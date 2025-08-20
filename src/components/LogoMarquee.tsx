import { useEffect, useRef } from 'react'

const brands = ['ARRI','RED','Aputure','Cooke','Blackmagic','Sony','DJI','Zeiss']

export default function LogoMarquee() {
  const track = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = track.current
    if (!el) return
    let x = 0
    let raf = 0
    const tick = () => {
      x = (x - 0.5) % el.scrollWidth
      el.style.transform = `translate3d(${x}px,0,0)`
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <div className="overflow-hidden border-y border-zinc-800/70 py-6 my-14">
      <div ref={track} className="flex gap-14 will-change-transform">
        {[...brands, ...brands, ...brands].map((b, i) => (
          <span key={i} className="text-zinc-500/80 tracking-[.25em] uppercase text-xs">
            {b}
          </span>
        ))}
      </div>
    </div>
  )
}

