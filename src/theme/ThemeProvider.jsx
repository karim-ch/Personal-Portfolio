import React from "react"
import { ThemeProvider as StyledTheme } from "styled-components"
import createPersistedState from "use-persisted-state"
import isFunction from "lodash/isFunction"
import Context from "./context"
import GlobalStyles from "./styles/GlobalStyles"
import base from "./base"
import * as schemes from "./schemes"

export const getTheme = preference => ({
  base,
  ...base,
  ...schemes[preference],
})

const useThemeState = createPersistedState("theme")

const defaults = {
  name: "light",
}

const ThemeProvider = ({ children, defaultTheme }) => {
  const [theme, setTheme] = useThemeState(defaults)
  const safeSetTheme = value => setTheme({ ...theme, ...value })

  return (
    <StyledTheme theme={getTheme(defaultTheme || theme.name)}>
      <GlobalStyles />
      <Context.Provider value={{ ...theme, setTheme: safeSetTheme }}>
        {isFunction(children)
          ? children({ ...theme, setTheme: safeSetTheme })
          : children}
      </Context.Provider>
    </StyledTheme>
  )
}

export default ThemeProvider
