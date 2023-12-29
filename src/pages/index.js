import React from "react"
import Layout from "shared/Layout"
import SEO from "shared/Layout/components/SEO"
import Home from "screens/Home"
import { withScrollContext } from "shared/ScrollContext"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="💻" />
      <Home />
    </Layout>
  )
}

export default withScrollContext({ initials: { page: "/about" } })(IndexPage)
