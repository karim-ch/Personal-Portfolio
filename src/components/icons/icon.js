import React from "react"
import PropTypes from "prop-types"
import {
  IconCodepen,
  IconExternal,
  IconFolder,
  IconFork,
  IconGitHub,
  IconInstagram,
  IconLinkedin,
  IconStar,
  IconZap,
  Close,
  Burger,
  Logo,
  Arrow,
  IconStackoverflow,
} from "components/icons"

const Icon = ({ name }) => {
  switch (name) {
    case "Codepen":
      return <IconCodepen />
    case "External":
      return <IconExternal />
    case "Folder":
      return <IconFolder />
    case "Fork":
      return <IconFork />
    case "GitHub":
      return <IconGitHub />
    case "Instagram":
      return <IconInstagram />
    case "Linkedin":
      return <IconLinkedin />
    case "Arrow":
      return <Arrow />
    case "Star":
      return <IconStar />
    case "Stackoverflow":
      return <IconStackoverflow />
    case "Zap":
      return <IconZap />
    case "Close":
      return <Close />
    case "Burger":
      return <Burger />
    case "Logo":
      return <Logo />
    default:
      return <IconExternal />
  }
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
}

export default Icon
