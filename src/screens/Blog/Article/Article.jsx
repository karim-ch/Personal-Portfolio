import React from "react"
import withStyle from "./withStyle"
import { RichText } from "prismic-reactjs"
import SyntaxHighlighter from "react-syntax-highlighter"
import { atomOneLight } from "react-syntax-highlighter/dist/esm/styles/hljs"

const Article = ({ className, article, uid }) => {
  return (
    <div className={className}>
      <h1 className="article-title">{article?.title?.text}</h1>
      <div className="article-title-cover-container">
        <img
          className="article-title-cover"
          src={article?.image?.url}
          alt={article?.image?.alt}
        />
      </div>
      <div className="article-body">
        {article?.article?.raw?.map((slice, key) => {
          if (slice.type === "preformatted") {
            return (
              <div className="code" key={key}>
                <SyntaxHighlighter language="javascript" style={atomOneLight}>
                  {slice?.text}
                </SyntaxHighlighter>
              </div>
            )
          }
          return (
            <div className="slice" key={key}>
              <RichText render={[slice]} />
            </div>
          )
        })}
      </div>
      <div>
        <div
          id="cusdis_thread"
          data-host="https://cusdis.com"
          data-app-id={process.env.GATSBY_CUSDIS_APP_ID}
          data-page-id={uid}
          data-page-title="Blog title"
        ></div>
      </div>
    </div>
  )
}

export default withStyle(Article)
