"use client"
import { ReactLenis } from 'lenis/react'

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  // The 'root' prop makes it the global scroller for the whole page
  return (
    <ReactLenis root options={{
      lerp: 0.1,
      duration: 1.5,
      smoothWheel: true,
      wheelMultiplier: 1,
      orientation: 'vertical',
      gestureOrientation: 'vertical',
    }}>
      {children}
    </ReactLenis>
  )
}