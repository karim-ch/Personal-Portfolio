import React from "react"
import Provider from "./Provider"

export default ({ initials }) => Component => props => (
  <Provider initials={initials}>
    {value => <Component {...props} {...value} />}
  </Provider>
)
