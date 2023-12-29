import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, title, type }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            siteUrl
            description
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = title || site.siteMetadata?.title

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:site_name`,
          content: "Karim CHAARI Website",
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: type,
        },
        {
          property: `og:url`,
          content: site.siteMetadata.siteUrl,
        },
        ...(type === "article"
          ? [
              {
                property: "author",
                content: "Karim CHAARI",
              },
              {
                property: "article:author",
                content: "Karim CHAARI",
              },
            ]
          : []),
      ]}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  description: `Karim, a software engineer and JavaScript developer, specializes in web development with expertise in AWS, Azure, CI/CD, GraphQL, and DevOps. Offering freelance services with a focus on Node.js.`,
  type: "website",
  title: "Karim CHAARI portfolio",
}

SEO.propTypes = {
  description: PropTypes.string.isRequired,
  lang: PropTypes.string,
  title: PropTypes.string.isRequired,
  type: PropTypes.string,
}

export default SEO
