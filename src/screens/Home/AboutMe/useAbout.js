import { useStaticQuery, graphql } from "gatsby"
import get from "lodash/get"

const useAbout = () => {
  const data = useStaticQuery(graphql`
    query prismicAbout {
      prismicAbout {
        data {
          introduction {
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
          pic {
            alt
            url
          }
          skills {
            skill {
              text
            }
          }
        }
      }
    }
  `)

  const { introduction = [], skills = [], pic = {} } = get(
    data,
    "prismicAbout.data",
    {}
  )

  return {
    introduction,
    pic,
    skills,
  }
}

export default useAbout
