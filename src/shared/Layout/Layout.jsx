import React, { useState, useCallback } from "react"
import { withPrefix } from "gatsby"
import { Helmet } from "react-helmet"
import { ThemeProvider } from "theme"
import { Navbar, Main, Footer, Drawer, Social, Mail } from "./components"
import withStyle from "./withStyle"
import useWindowSize from "shared/hooks/useWindowSize"

const Layout = ({ children, className }) => {
  const [drawerVisible, setDrawerVisible] = useState(false)
  const [isDrawerBeingClosed, setDrawerBeingClosed] = useState(false)
  const { width } = useWindowSize()

  const isMobile = width < 820

  const toggle = useCallback(() => {
    if (drawerVisible) {
      setDrawerBeingClosed(true)
      return setTimeout(() => {
        setDrawerVisible(false)
        setDrawerBeingClosed(false)
      }, 500)
    }
    setDrawerVisible(true)
  }, [drawerVisible])

  return (
    <ThemeProvider>
      {/*<Helmet>*/}
      {/*  <script src={withPrefix("script.js")} type="text/javascript" />*/}
      {/*  <script async defer src="https://cusdis.com/js/cusdis.es.js"></script>*/}
      {/*</Helmet>*/}
      <div className={className}>
        {drawerVisible && (
          <Drawer toggle={toggle} isDrawerBeingClosed={isDrawerBeingClosed} />
        )}
        <Navbar toggle={toggle} drawerVisible={drawerVisible} />
        <Main>{children}</Main>
        <Footer />
        {!isMobile && <Social />}
        {!isMobile && <Mail />}
      </div>
    </ThemeProvider>
  )
}
export default withStyle(Layout)
