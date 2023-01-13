// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'

import './index.css'

const CourseTimelineCard = props => {
  const {courseDetails} = props
  const {courseTitle, description, duration, tagsList} = courseDetails

  return (
    <>
      <div className="CourseTitleAndDurationContainer">
        <h1 className="CourseTitle">{courseTitle}</h1>
        <div className="DurationContainer">
          <AiFillClockCircle color="#171f46" />
          <h2 className="Duration">{duration}</h2>
        </div>
      </div>
      <p className="CourseDescription">{description}</p>
      <div className="CourseTagsList">
        {tagsList.map(eachItem => (
          <div className="CourseTagItem" key={eachItem.id}>
            <li className="CourseTag">{eachItem.name}</li>
          </div>
        ))}
      </div>
    </>
  )
}
export default CourseTimelineCard
