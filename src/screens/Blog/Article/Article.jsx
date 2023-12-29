import React from "react"
import withStyle from "./withStyle"
import { RichText } from "prismic-reactjs"
import SyntaxHighlighter from "react-syntax-highlighter"
import { atomOneLight } from "react-syntax-highlighter/dist/esm/styles/hljs"

const Article = ({ className, article }) => {

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
        {article?.article?.raw?.map(slice => {
          if (slice.type === "preformatted") {
            return (
              <div className="code">
                <SyntaxHighlighter language="javascript" style={atomOneLight}>
                  {slice?.text}
                </SyntaxHighlighter>
              </div>
            )
          }
          return (
            <div className="slice">
              <RichText render={[slice]} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default withStyle(Article)
