import React from "react"
import withStyle from "./withStyle"

const Footer = ({ className }) => {
  return (
    <footer className={className}>
      <span>
        Designed and built with{" "}
        <span role="img" aria-label="heart">
          💙
        </span>{" "}
        by Karim Chaari{" "}
        <span role="img" aria-label="victory">
          ✌
        </span>
      </span>
      <br />
      <small>{new Date().getFullYear()} ©</small>
    </footer>
  )
}

export default withStyle(Footer)
