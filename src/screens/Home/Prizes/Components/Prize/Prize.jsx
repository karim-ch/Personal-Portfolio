import React from "react"
import withStyle from "./withStyle"

const Prize = ({ className, prize }) => {
  const { url, title, description, date, image, type } = prize
  return (
    <div className={className}>
      <div className="text-container">
        <h5 className="type">{type.text}</h5>
        <h5 className="date">{date}</h5>
        <a href={url.url} rel="noreferrer" target="_blank">
          <h2 className="title">{title.text}</h2>
        </a>
        <p>{description.text}</p>
      </div>
      <div className="image-container">
        <img src={image.url} alt={image.alt ?? "hackathon"} />
      </div>
    </div>
  )
}

export default withStyle(Prize)
