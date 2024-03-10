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
            seo {
              text
            }
          }
        }
      }
    }
  `)

  const edges = get(data, "allPrismicArticles.nodes", [])
  console.log({edges})
  const articles = edges.map(edge => {
    console.log({ data: edge.data, uid: edge.uid })
    return { data: edge.data, uid: edge.uid }
  })
  if (articleUid && articleUid.length > 2) {
    console.log('article found')
    return edges.find(article => article.uid === articleUid) || {}
  } else if (articleUid) {
    return null
  }
  return articles
}

export default useArticles
