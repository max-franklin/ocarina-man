import { useIsVisible } from '@/hooks/hooks'
import { useEffect, useRef, useState } from 'react'

export default function FadeInDiv({ children }) {
    const ref = useRef()
    const isVisible = useIsVisible(ref)
    const [wasRendered, setWasRendered] = useState(false)
  
    useEffect(() => {
      if (isVisible) {
        setWasRendered(true)
      }
    }, [isVisible])
  
    return (
      <div ref={ref} className={`transition-opacity ease-in duration-700 ${isVisible || wasRendered ? "opacity-100" : "opacity-0"}`}>
        { children }
      </div>
    )
  }