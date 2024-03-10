import React from "react"
import Layout from "shared/Layout"
import SEO from "shared/Layout/components/SEO"
import Article from "screens/Blog/Article"
import useArticles from "../screens/Home/Articles/useArticles"

const ArticlePage = ({ location }) => {
  const articleUID = location.pathname.replace("/blog/", "").replace("/", "")
  const data = useArticles(articleUID)

  return (
    <>
      {data.data && (
        <Layout>
          <>
            <SEO
              description={data.data?.description?.text || ""}
              title={data.data?.title?.text || ""}
              type="article"
            />
            <Article article={data.data} uid={articleUID} />
          </>
        </Layout>
      )}
    </>
  )
}

export default ArticlePage
