import React from 'react'
import CourseCard from '../../components/CourseCard'
import NavLoggedin from '../../components/NavLoggedin'


const Dashboard = () => {
  return (
    <>
        <NavLoggedin />
        <CourseCard />
    </>
  )
}

export default Dashboard