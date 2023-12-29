import React from "react"
import GatsbyLink from "gatsby-link"
import { genericHashLink } from "react-router-hash-link"
import { useScrollContext } from "shared/ScrollContext"
import useConfig from "shared/hooks/useconfig"
import withStyle from "./withStyle"
import useLockBodyScroll from "shared/hooks/useLockBodyScroll"

const MyHashLink = genericHashLink(GatsbyLink)

const Drawer = ({ className, toggle }) => {
  const {
    resume: { url },
  } = useConfig()

  const { filters } = useScrollContext()
  const isElemFocused = section => filters?.page === section
  useLockBodyScroll()

  return (
    <div className={className}>
      <ul className="drawer-sections">
        <span className="menu">MENU</span>
        <MyHashLink to="/#about" onClick={toggle}>
          <li className={`li ${isElemFocused("about") && "li--active"}`}>
            About
          </li>
        </MyHashLink>

        <MyHashLink to="/#experiences" onClick={toggle}>
          <li className={`li ${isElemFocused("experiences") && "li--active"}`}>
            Experience
          </li>
        </MyHashLink>

        <MyHashLink to="/#projects" onClick={toggle}>
          <li className={`li ${isElemFocused("projects") && "li--active"}`}>
            Projects
          </li>
        </MyHashLink>

        <MyHashLink to="/#contact" onClick={toggle}>
          <li className={`li ${isElemFocused("contact") && "li--active"}`}>
            Contact
          </li>
        </MyHashLink>

        <GatsbyLink to="/blog">
          <li className="li">Blog</li>
        </GatsbyLink>

        <a href={url} target="_blank" rel="noreferrer" className="resume-btn">
          <li className={`li resume`}>Resume</li>
        </a>
      </ul>
    </div>
  )
}

export default withStyle(Drawer)
