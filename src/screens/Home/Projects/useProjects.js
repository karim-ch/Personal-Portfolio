import { useState, useEffect } from "react"
import { get } from "lodash"
import axios from "axios"

const useProjects = () => {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    axios
      .post(
        "https://api.github.com/graphql",
        {
          query: `
          {
            user(login: "karim-ch") {
              pinnedItems(first: 3, types: REPOSITORY) {
                nodes {
                  ... on Repository {
                    name
                    description
                    url
                    languages(first: 3) {
                      nodes {
                        name
                      }
                    }
                  }
                }
              }
            }
          }
        `,
        },
        {
          headers: {
            Authorization: `bearer ${process.env.GATSBY_GITHUB_TOKEN}`,
          },
        }
      )
      .then(({ data }) => {
        setProjects(data)
      })
  }, [])

  const githubProjects = get(projects, "data.user.pinnedItems.nodes", [])

  return {
    githubProjects,
  }
}
export default useProjects
