import React from "react"
import Article from "./components/Article"
import withStyle from "./withStyle"
import useArticles from "./useArticles"
import { Icon } from "../../../components/icons"
import useConfig from "../../../shared/hooks/useconfig"
import { Link } from "gatsby"

const Articles = ({ className }) => {
  const articles = useArticles()
  const { github } = useConfig()

  return (
    <section className={className}>
      <h2 className="heading"> I write about stuff </h2>
      <div className="articles-container">
        <div className="articles">
          {articles.map((article, i) => (
            <div className="article-item" key={i}>
              <Article article={article} />
            </div>
          ))}
        </div>
      </div>
      <div className="btn-container">
        <Link
          to={"/blog"}
          className="btn-see-more"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="learn">Blog</span>
          <span className="arrow">
            <Icon name="Arrow" />
          </span>
        </Link>
      </div>
    </section>
  )
}

export default withStyle(Articles)
