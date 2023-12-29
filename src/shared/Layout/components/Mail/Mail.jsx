import React from "react"
import withStyle from "./withStyle"
import useConfig from "shared/hooks/useconfig"

const Mail = ({ className }) => {
  const { mail } = useConfig()
  const [{ text: email }] = mail
  return (
    <div className={className}>
      <a href={`mailto:${email}`}>{email}</a>
    </div>
  )
}

export default withStyle(Mail)
