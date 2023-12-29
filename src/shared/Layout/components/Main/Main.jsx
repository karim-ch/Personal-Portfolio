import React from "react"
import withStyle from "./withStyle"

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

const Main = ({ className, children }) => {
  return <div className={className}>{children}</div>
}

export default withStyle(Main)
