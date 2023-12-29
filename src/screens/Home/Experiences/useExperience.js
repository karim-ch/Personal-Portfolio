import { useStaticQuery, graphql } from "gatsby"
import { get, sortBy, reverse } from "lodash"

const useExperience = () => {
  const data = useStaticQuery(graphql`
    query prismicExperience {
      allPrismicExperience {
        edges {
          node {
            data {
              order {
                text
              }
              company {
                text
              }
              description {
                text
                type
                spans {
                  end
                  type
                  start
                  data {
                    link_type
                    url
                  }
                }
              }
              location {
                text
              }
              range {
                text
              }
              title {
                text
              }
              url {
                text
              }
            }
          }
        }
      }
    }
  `)

  const edges = get(data, "allPrismicExperience.edges", [])
  return reverse(
    sortBy(
      edges.map(({ node: { data: job } }) => job),
      "order[0].text"
    )
  )
}

export default useExperience
