import React from "react"
import withStyle from "./withStyle"
import { Icon } from "../../../../../components/icons"
import { Link } from "gatsby"

const Article = ({ className, article }) => {
  const { data, uid } = article

  return (
    <Link to={`/blog/${uid}`} className={className}>
      <div className="article-title">
        <img
          className="article-title-img"
          src={data.image.url}
          alt={data.image.alt}
        />
      </div>
      <div className="article-body">
        <h3>{data.title.text}</h3>
        <p>{data.description.text}</p>
      </div>
      <div className="article-footer">
        <div className="article-footer-icon">
          <Icon name="Logo" />
        </div>
        <div>
          <h5 className="article-footer-author">KARIM CHAARI</h5>
          <h6 className="article-footer-details">
            {new Date(data.date.text).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}{" "}
            • {data.length.text} MIN READ
          </h6>
        </div>
      </div>
    </Link>
  )
}

export default withStyle(Article)
