import { useStaticQuery, graphql } from "gatsby"
import get from "lodash/get"

const useAbout = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      prismicConfig {
        data {
          github {
            url
          }
          instagram {
            url
          }
          linkedin {
            url
          }
          mail {
            text
          }
          resume {
            url
          }
          twitter {
            url
          }
          stackoverflow {
            url
          }
          phone {
            text
          }
        }
      }
    }
  `)

  const {
    resume,
    twitter,
    mail,
    github,
    instagram,
    linkedin,
    stackoverflow,
    phone,
  } = get(data, "prismicConfig.data", {})

  return {
    resume,
    twitter,
    mail,
    github,
    instagram,
    linkedin,
    stackoverflow,
    phone,
  }
}

export default useAbout
