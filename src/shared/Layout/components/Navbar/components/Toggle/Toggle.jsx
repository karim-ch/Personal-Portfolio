import React from "react"
import withStyle from "./withStyle"

const Toggle = ({ className, ...rest }) => (
  <div className={className}>
    <input type="checkbox" {...rest} />
    <span />
  </div>
)

export default withStyle(Toggle)
