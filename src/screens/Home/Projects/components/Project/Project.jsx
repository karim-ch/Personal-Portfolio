import React from "react"
import withStyle from "./withStyle"
import { Icon } from "components/icons"

const Project = ({ className, project }) => {
  return (
    <div className={className}>
      <div className="project-title">
        <div className="green">
          <Icon name="Folder" />
        </div>
        <a href={project.url} target="_blank" rel="noopener noreferrer">
          <Icon name="GitHub" />
        </a>
      </div>
      <div className="project-body">
        <h3>{project.name}</h3>
        {project.description && <p>{project.description}</p>}
      </div>
      <ul className="project-footer">
        {project.languages?.nodes?.map(({ name }, i) => (
          <li key={i}>{name}</li>
        ))}
      </ul>
    </div>
  )
}

export default withStyle(Project)
