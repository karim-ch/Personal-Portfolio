import React, { useState } from "react"
import withStyle from "./withStyle"
import { RichText } from "prismic-reactjs"
import useExperience from "./useExperience"

const Experiences = ({ className }) => {
  const experiences = useExperience()
  const [activeTabId, setActiveTabId] = useState(0)
  const [cssTransition, setCssTransition] = useState("rtl")

  return (
    <section className={className}>
      <h2 className="heading">Where I’ve Worked</h2>
      <div>
        <div>
          <ul className="styled-tab-list">
            {experiences &&
              experiences.map((experience, i) => {
                return (
                  <li key={experience?.company[0]?.text}>
                    <button
                      className={`styled-tab-button ${
                        activeTabId === i
                          ? `styled-tab-button--active ${cssTransition}`
                          : ""
                      }
                      `}
                      onClick={() => {
                        setCssTransition(activeTabId > i ? "rtl" : "ltr")
                        setActiveTabId(i)
                      }}
                      id={`tab-${i}`}
                      role="tab"
                      tabIndex={activeTabId === i ? "0" : "-1"}
                    >
                      <span>{experience?.company[0]?.text}</span>
                    </button>
                  </li>
                )
              })}
          </ul>

          {experiences &&
            experiences.map(
              ({ title, url, company, range, description, location }, i) => {
                return (
                  <div
                    className="styled-tab-content"
                    id={`panel-${i}`}
                    hidden={activeTabId !== i}
                    key={i}
                  >
                    <h3>
                      <span>{title[0].text}</span>
                      <span className="company">
                        &nbsp;@&nbsp;
                        <a href={url[0].text} className="inline-link">
                          {company[0].text}
                        </a>
                      </span>
                    </h3>

                    <p className="range">{location[0].text}</p>
                    <p className="range">{range[0].text}</p>
                    <div className="job-description">
                      <RichText render={description} />
                    </div>
                  </div>
                )
              }
            )}
        </div>
      </div>
    </section>
  )
}

export default withStyle(Experiences)
