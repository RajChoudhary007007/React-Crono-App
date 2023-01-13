// Write your code here
import {AiFillCalendar} from 'react-icons/ai'

import './index.css'

const ProjectTimelineCard = props => {
  const {projectDetails} = props
  const {
    imageUrl,
    projectTitle,
    description,
    projectUrl,
    duration,
  } = projectDetails

  return (
    <div className="ProjectCardContainer">
      <img className="ProjectImage" src={imageUrl} alt="project" />
      <div className="ProjectTitleAndDurationContainer">
        <h1 className="ProjectTitle">{projectTitle}</h1>
        <div className="DurationContainer">
          <AiFillCalendar color="#171f46" />
          <h1 className="Duration">{duration}</h1>
        </div>
      </div>
      <p className="ProjectDescription">{description}</p>
      <a className="VisitLink" href={projectUrl}>
        Visit
      </a>
    </div>
  )
}
export default ProjectTimelineCard
