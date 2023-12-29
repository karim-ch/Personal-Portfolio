import React from "react"
import withStyle from "./withStyle"
import { Link } from "gatsby"

const Blog = ({ className }) => {
  return (
    <div className={className}>
      <h1>Coming Soon...</h1>
      <Link to={"/"}>
        <button> Back To Home </button>
      </Link>
    </div>
  )
}

export default withStyle(Blog)
