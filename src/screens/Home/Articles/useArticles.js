import { useStaticQuery, graphql } from "gatsby"
import { get } from "lodash"

const useArticles = articleUid => {
  const data = useStaticQuery(graphql`
    query prismicArticles {
      allPrismicArticles {
        nodes {
          uid
          data {
            article {
              text
              raw
            }
            date {
              text
            }
            description {
              text
            }
            image {
              alt
              url
            }
            title {
              text
            }
            length {
              text
            }
            date {
              text
            }
          }
        }
      }
    }
  `)

  const edges = get(data, "allPrismicArticles.nodes", [])
  const articles = edges.map(edge => {
    return { data: edge.data, uid: edge.uid }
  })
  if (articleUid) {
    return edges.find(article => article.uid === articleUid)
  }
  return articles
}

export default useArticles
