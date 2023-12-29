import React from "react"
import withStyle from "./withStyle"
import { Icon } from "components/icons"

const Navbar = ({ className, toggle, drawerVisible }) => {
  return (
    <header className={className}>
      <a className="logo" href="/">
        <Icon name="Logo" />
        <div className="me">
          <span className="name">KARIM CHAARI</span>
          <span className="job">SOFTWARE ENGINEER</span>
        </div>
      </a>

      <button className="burger" onClick={toggle}>
        <span>{drawerVisible ? "CLOSE" : "MENU"}</span>
        <Icon name={drawerVisible ? "Close" : "Burger"} />
      </button>
    </header>
  )
}

export default withStyle(Navbar)
