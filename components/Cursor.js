'use client'
import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef  = useRef(null)
  const ringRef = useRef(null)
  const posRef  = useRef({ x: 0, y: 0 })
  const ringPos = useRef({ x: 0, y: 0 })
  const rafRef  = useRef(null)

  useEffect(() => {
    const dot  = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    const onMove = (e) => {
      posRef.current = { x: e.clientX, y: e.clientY }
      dot.style.left = e.clientX + 'px'
      dot.style.top  = e.clientY + 'px'
    }

    const animate = () => {
      ringPos.current.x += (posRef.current.x - ringPos.current.x) * 0.12
      ringPos.current.y += (posRef.current.y - ringPos.current.y) * 0.12
      ring.style.left = ringPos.current.x + 'px'
      ring.style.top  = ringPos.current.y + 'px'
      rafRef.current  = requestAnimationFrame(animate)
    }
    rafRef.current = requestAnimationFrame(animate)

    const onEnter = () => { dot.classList.add('expand');  ring.classList.add('expand') }
    const onLeave = () => { dot.classList.remove('expand'); ring.classList.remove('expand') }

    document.addEventListener('mousemove', onMove)

    // Expand on interactive elements
    const targets = document.querySelectorAll('a, button, [data-hover]')
    targets.forEach(t => {
      t.addEventListener('mouseenter', onEnter)
      t.addEventListener('mouseleave', onLeave)
    })

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafRef.current)
      targets.forEach(t => {
        t.removeEventListener('mouseenter', onEnter)
        t.removeEventListener('mouseleave', onLeave)
      })
    }
  }, [])

  return (
    <>
      <div ref={dotRef}  className="cursor-dot"  />
      <div ref={ringRef} className="cursor-ring" />
    </>
  )
}
