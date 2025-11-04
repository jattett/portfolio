import { useState, useEffect } from 'react'

interface UseTypingAnimationOptions {
  text: string
  speed?: number
  delay?: number
}

export function useTypingAnimation({
  text,
  speed = 50,
  delay = 0,
}: UseTypingAnimationOptions) {
  const [displayText, setDisplayText] = useState('')
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    setDisplayText('')
    setIsComplete(false)

    const timeoutId = setTimeout(() => {
      let currentIndex = 0

      const intervalId = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayText(text.slice(0, currentIndex + 1))
          currentIndex++
        } else {
          setIsComplete(true)
          clearInterval(intervalId)
        }
      }, speed)

      return () => clearInterval(intervalId)
    }, delay)

    return () => clearTimeout(timeoutId)
  }, [text, speed, delay])

  return { displayText, isComplete }
}
