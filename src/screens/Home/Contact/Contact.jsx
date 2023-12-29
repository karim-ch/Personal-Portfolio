import React from "react"

import withStyle from "./withStyle"
import useConfig from "../../../shared/hooks/useconfig"

const Contact = ({ className }) => {
  const { mail, phone } = useConfig()
  const [{ text: email }] = mail

  return (
    <section className={className}>
      <h2 className="heading">Get In Touch</h2>
      <div className="contact">
        <p>
          Although I'm not currently looking for any new opportunities, my inbox
          is always open. Whether you have a question, want to collaborate or
          just want to meet me, I'll get back to you ASAP!
        </p>
        <p className="phone__container">
          Or you can reach me on mobile{" "}
          <span className="phone">{phone[0].text}</span>
        </p>
        <a href={`mailto:${email}`} target="_blank" rel="noreferrer">
          <button className="contact-btn">Say Hi!</button>
        </a>
      </div>
    </section>
  )
}

export default withStyle(Contact)
