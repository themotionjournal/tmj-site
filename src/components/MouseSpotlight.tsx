import { useEffect, useRef } from 'react'

export default function MouseSpotlight() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const onMove = (e: MouseEvent) => {
      const x = e.clientX, y = e.clientY
      el.style.background = `
        radial-gradient(220px 220px at ${x}px ${y}px, rgba(153,255,200,.12), transparent 60%),
        radial-gradient(300px 220px at 10% 0%, rgba(7,22,52,.16), transparent 55%)
      `
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return <div ref={ref} className="pointer-events-none fixed inset-0 -z-10" />
}

