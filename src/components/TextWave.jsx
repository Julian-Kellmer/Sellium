import React, { useEffect, useRef, useState } from 'react'

export const WaveText = ({
  text,
  className = '',
  delay = 0,
  noWrap = false,
  highlightWords = [],
  highlightClass = '',
}) => {
  const [isVisible, setIsVisible] = useState(false)
  const textRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const currentRef = textRef.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [])

  const words = text.split(' ')

  // Calculate start indices for each word to avoid mutation during render
  const wordStartIndices = []
  let accumIndex = 0
  words.forEach((word) => {
    wordStartIndices.push(accumIndex)
    accumIndex += word.length + 1 // +1 for space
  })

  return (
    <div
      ref={textRef}
      className={className}
      style={{
        display: 'block',
        whiteSpace: noWrap ? 'nowrap' : 'normal',
        width: '100%',
      }}>
      {words.map((word, wordIndex) => {
        const currentWordStartUserIndex = wordStartIndices[wordIndex]
        const chars = word.split('')

        // Clean punctuation for comparison
        const cleanWord = word.replace(
          new RegExp('[.,/#!$%^&*;:{}=\\-_`~()]', 'g'),
          '',
        )
        const isHighlighted = highlightWords.includes(cleanWord)

        return (
          <React.Fragment key={wordIndex}>
            <span
              className={isHighlighted ? highlightClass : ''}
              style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
              {chars.map((char, charIndex) => (
                <span
                  key={charIndex}
                  style={{
                    display: 'inline-block',
                    overflow: 'hidden',
                    verticalAlign: 'bottom',
                    lineHeight: '1', // Tight line height for the characters themselves
                    paddingBottom: '0.1em',
                    marginBottom: '-0.1em',
                  }}>
                  <span
                    style={{
                      display: 'inline-block',
                      animation: isVisible
                        ? `waveUp 0.8s ease-out ${
                            delay +
                            (currentWordStartUserIndex + charIndex) * 0.005
                          }s forwards`
                        : 'none',
                      transform: 'translateY(100%)',
                      opacity: 0,
                    }}>
                    {char}
                  </span>
                </span>
              ))}
            </span>
            {/* Real space character for natural flow */}
            {wordIndex < words.length - 1 && ' '}
          </React.Fragment>
        )
      })}
    </div>
  )
}

export default WaveText
