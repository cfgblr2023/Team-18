"use client"
import React from 'react'
import NavLoggedin from '../../components/NavLoggedin'
import { HStack, VStack } from '@chakra-ui/layout'
import { Button } from '@chakra-ui/button'



const page = () => {
    return (
        <>
            <NavLoggedin />
            <VStack
                spacing="24px"
                align="center"
                w="100%"
            >
                <HStack
                    spacing="24px"
                    align="center"
                    justify="center"
                    w="100%"
                >
                    <Button
                        onClick={() => {
                            window.location.href = '/volunteer-dashboard'
                        }}
                    >Volunteer</Button>
                    <Button
                        onClick={() => {
                            window.location.href = '/dashboard'
                        }}
                    >Student</Button>
                </HStack>
            </VStack>
        </>
    )
}

export default page