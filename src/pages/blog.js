import React from "react"
import Layout from "shared/Layout"
import Article from "screens/Blog/Article"
import SEO from "shared/Layout/components/SEO"

const BlogPage = () => {
  return (
    <Layout>
      <SEO title="Article" />
      <Article />
    </Layout>
  )
}

export default BlogPage
