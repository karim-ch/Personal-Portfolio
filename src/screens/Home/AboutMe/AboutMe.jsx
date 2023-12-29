import React from "react"
import { RichText } from "prismic-reactjs"
import withStyle from "./withStyle"
import useAbout from "./useAbout"

const About = ({ className }) => {
  const { introduction, skills, pic } = useAbout()
  const mySkills = skills.map(({ skill }) => skill[0].text)

  return (
    <section className={className}>
      <h2 className="heading">About Me</h2>

      <img src={pic?.url} alt={pic?.alt} className="img" />
      <RichText render={introduction} />

      <p>Here are a few technologies I've been working with recently:</p>

      <ul className="skills-list">
        {mySkills && mySkills.map((skill, i) => <li key={i}>{skill}</li>)}
      </ul>
    </section>
  )
}

export default withStyle(About)
