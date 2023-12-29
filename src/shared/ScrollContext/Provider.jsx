import React from "react"
import { isFunction } from "lodash"
import Context from "./context"
import useScroll from "./useScroll"

const Provider = ({ initials, children }) => {
  const value = useScroll({ initials })

  return (
    <Context.Provider value={value}>
      {isFunction(children) ? children(value) : children}
    </Context.Provider>
  )
}

export default Provider
