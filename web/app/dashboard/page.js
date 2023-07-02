import React from 'react'
import CourseCard from '../../components/CourseCard'
import NavLoggedin from '../../components/NavLoggedin'


const Dashboard = () => {
  return (
    <>
        <NavLoggedin />
        <div style={{display:"flex",gap:"20px"}}>

        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        </div>
        <div style={{display:"flex",gap:"20px"}}>

<CourseCard />
<CourseCard />
<CourseCard />
<CourseCard />
</div>
 <div style={{display:"flex",gap:"20px"}}>

<CourseCard />
<CourseCard />
<CourseCard />
<CourseCard />
</div>

    </>
  )
}

export default Dashboard