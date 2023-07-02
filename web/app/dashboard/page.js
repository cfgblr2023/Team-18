"use client"
import React from 'react'
import CourseCard from '../../components/CourseCard'
import NavLoggedin from '../../components/NavLoggedin'
import Slidebar from "../../components/Slidebar";
import { Box, Heading } from '@chakra-ui/react';



const Dashboard = () => {
  return (
    <>
      <NavLoggedin />
      <Box p={4}>
        <Slidebar />
      </Box>
        <Heading 
        pl={5}
        pt={5}
        as="h2"
        >
          Courses for You
        </Heading>
      <div style={{ display: "flex", gap: "20px" }}>


        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </div>
      {/* <div style={{ display: "flex", gap: "20px" }}>

        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </div>
      <div style={{ display: "flex", gap: "20px" }}>

        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </div> */}

    </>
  )
}

export default Dashboard