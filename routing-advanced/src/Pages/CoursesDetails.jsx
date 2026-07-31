import React from 'react'
import {useParams} from 'react-router-dom';
const CoursesDetails = () => {
  let param = useParams();
  console.log(param);
  return (
    <div>
      <h1>{param.coursesId} Course Details</h1>
    </div>
  )
}

export default CoursesDetails
