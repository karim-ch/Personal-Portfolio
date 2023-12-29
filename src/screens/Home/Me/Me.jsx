import React, { useRef, useEffect, useState } from "react"
import withStyle from "./withStyle"
import { genericHashLink } from "react-router-hash-link"
import GatsbyLink from "gatsby-link"

const MyHashLink = genericHashLink(GatsbyLink)

const Me = ({ className }) => {
  const textOne = useRef()
  const textTwo = useRef()
  const [showScroll, setShowScroll] = useState(false)
  const isMounted = useRef(true)

  const texts = ["hi,", "i'm", "Karim", "software", "engineer"]

  const morphTime = 1
  const cooldownTime = 0.25
  let textIndex = texts.length - 1
  let time = new Date()
  let morph = 0
  let cooldown = cooldownTime

  useEffect(() => {
    setTimeout(() => {
      setShowScroll(true)
    }, 2000)

    return () => {
      isMounted.current = false // Set the flag to false when unmounting
    }
  }, [])

  useEffect(() => {
    if (textOne.current && textTwo.current) {
      textOne.current.textContent = texts[textIndex % texts.length]
      textTwo.current.textContent = texts[(textIndex + 1) % texts.length]

      animate()
    }
  }, [textOne, textTwo])

  const setMorph = fraction => {
    if (!isMounted.current) return // Check if the component is still mounted
    textTwo.current.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`
    textTwo.current.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`

    fraction = 1 - fraction
    textOne.current.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`
    textOne.current.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`

    textOne.current.textContent = texts[textIndex % texts.length]
    textTwo.current.textContent = texts[(textIndex + 1) % texts.length]
  }

  const doCooldown = () => {
    morph = 0
    textTwo.current.style.filter = ""
    textTwo.current.style.opacity = "100%"
    textOne.current.style.filter = ""
    textOne.current.style.opacity = "0%"
  }

  const animate = () => {
    if (!isMounted.current) return // Check if the component is still mounted

    requestAnimationFrame(animate)
    const newTime = new Date()
    const shouldIncrementIndex = cooldown > 0
    const dt = (newTime - time) / 1000
    time = newTime
    cooldown -= dt
    if (cooldown <= 0) {
      if (shouldIncrementIndex) textIndex++
      doMorph()
    } else {
      doCooldown()
    }
  }

  const doMorph = () => {
    morph -= cooldown
    cooldown = 0

    let fraction = morph / morphTime

    if (fraction > 1) {
      cooldown = cooldownTime
      fraction = 1
    }

    setMorph(fraction)
  }

  return (
    <section className={className}>
      <div className="container">
        <span ref={textOne} className="text1"></span>
        <span ref={textTwo} className="text2"></span>
      </div>
      <svg id="filters">
        <defs>
          <filter id="threshold">
            <feColorMatrix
              in="SourceGraphic"
              type="matrix"
              values="1 0 0 0 0
                  0 1 0 0 0
                  0 0 1 0 0
                  0 0 0 255 -140"
            />
          </filter>
        </defs>
      </svg>
      <div className="scroll__down">
        {showScroll && (
          <MyHashLink to="/#about">
            <div className="scroll__down__container">
              <h6 className="scroll">scroll</h6>
              <div className="mouse">
                <div className="scroller"></div>
              </div>
            </div>
          </MyHashLink>
        )}
      </div>
    </section>
  )
}

export default withStyle(Me)
