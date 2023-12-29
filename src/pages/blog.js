import React from "react"
import Layout from "shared/Layout"
import SEO from "shared/Layout/components/SEO"
import Blog from "screens/Blog"

const BlogPage = () => {
  return (
    <Layout>
      <SEO description="Karim's blog" title="Blog" type="Blog" />
      <Blog />
    </Layout>
  )
}

export default BlogPage
