import React from "react"
import Layout from "shared/Layout"
import SEO from "shared/Layout/components/SEO"
import Article from "screens/Blog/Article"
import useArticles from "../screens/Home/Articles/useArticles"

const ArticlePage = ({ location }) => {
  const articleUID = location.pathname.replace("/blog/", "")
  const { data } = useArticles(articleUID)

  return (
    <>
      {data && (
        <Layout>
          <>
            <SEO
              description={data?.description?.text || ""}
              title={data?.title?.text || ""}
              type="article"
            />
            <Article article={data} />
          </>
        </Layout>
      )}
    </>
  )
}

export default ArticlePage
