import React, { useCallback } from "react"
import withStyle from "./withStyle"
import AboutMe from "./AboutMe"
import Experiences from "./Experiences"
import Me from "./Me"
import Contact from "./Contact"
import Projects from "./Projects"
import VizSensor from "react-visibility-sensor"
import { useScrollContext } from "shared/ScrollContext"
import Articles from "./Articles"

const Home = ({ className }) => {
  const { setFilter } = useScrollContext()
  const setPage = useCallback(setFilter("page"), [])

  const sections = [
    {
      sectionName: "about",
      Component: AboutMe,
    },
    {
      sectionName: "articles",
      Component: Articles,
    },
    {
      sectionName: "experiences",
      Component: Experiences,
    },
    {
      sectionName: "projects",
      Component: Projects,
    },
    {
      sectionName: "contact",
      Component: Contact,
    },
  ]

  return (
    <div className={className}>
      <h1 style={{ visibility: "hidden" }}>Karim Chaari Software engineer</h1>
      <Me />
      {sections.map(({ sectionName, Component }) => {
        return (
          <section key={sectionName} id={sectionName} className="section">
            <VizSensor
              partialVisibility
              onChange={isVisible => isVisible && setPage(sectionName)}
            >
              <Component />
            </VizSensor>
          </section>
        )
      })}
    </div>
  )
}

export default withStyle(Home)
