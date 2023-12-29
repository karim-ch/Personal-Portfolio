import { useStaticQuery, graphql } from "gatsby"
import { get, sortBy, reverse } from "lodash"

const usePrizes = () => {
  const data = useStaticQuery(graphql`
    query allPrismicEvents {
      allPrismicEvents {
        edges {
          node {
            data {
              title {
                text
              }
              type {
                text
              }
              description {
                text
              }
              skills {
                skill {
                  text
                }
              }
              url {
                url
              }
              date
              image {
                alt
                url
              }
            }
          }
        }
      }
    }
  `)

  const edges = get(data, "allPrismicEvents.edges", [])
  return reverse(
    sortBy(
      edges.map(({ node: { data: event } }) => event),
      "date[0].text"
    )
  )
}

export default usePrizes
