import React from "react"
import withStyle from "./withStyle"
import { Icon } from "components/icons"
import useConfig from "shared/hooks/useconfig"

const Social = ({ className }) => {
  const { github, linkedin, instagram, stackoverflow } = useConfig()

  return (
    <div className={className}>
      <a href={github.url} target="_blank" rel="noreferrer">
        <Icon name="GitHub" />
      </a>
      <a href={linkedin.url} target="_blank" rel="noreferrer">
        <Icon name="Linkedin" />
      </a>
      <a href={instagram.url} target="_blank" rel="noreferrer">
        <Icon name="Instagram" />
      </a>
      <a href={stackoverflow.url} target="_blank" rel="noreferrer">
        <Icon name="Stackoverflow" />
      </a>
    </div>
  )
}

export default withStyle(Social)
