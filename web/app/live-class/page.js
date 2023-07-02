"use client"
import React from 'react'
import NavLoggedin from '../../components/NavLoggedin'
import { Heading, Text, VStack } from '@chakra-ui/react'
import { JitsiMeeting } from '@jitsi/react-sdk'

const page = () => {
    const randomAlphaNumeric = () => {
        const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
        let result = ''
        for (let i = 32; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)]
        return 'LAMP_kjhbUYGhbi8*T*HIU'
    }
    const handleJitsiIFrameRef = (iframeRef) => {
        iframeRef.style.background = '#3f51b5';
        iframeRef.style.height = '85vh';
        iframeRef.style.width = '85vw';
        iframeRef.style.borderRadius = '10px';
    };
    return (
        <>
            <NavLoggedin />

            <VStack
                spacing="24px"
                align="center"
                w="100%"
            >
                <Heading>Live Class</Heading>
                <Text>Meeting Code: {randomAlphaNumeric()}</Text>

                <JitsiMeeting
                    domain="meet.jit.si"
                    roomName={randomAlphaNumeric()}
                    // onApiReady={externalApi => { this.api = externalApi }}
                    getIFrameRef={handleJitsiIFrameRef}
                    userInfo={{
                        displayName: "Student",
                    }}
                    configOverwrite={{
                        enableWelcomePage: true,
                        readOnlyName: true,
                        toolbarButtons: ['camera', 'microphone', 'chat'],
                        enableCalendarIntegration: false
                    }}
                    interfaceConfigOverwrite={{
                        SHOW_CHROME_EXTENSION_BANNER: false,
                        SHOW_JITSI_WATERMARK: false
                    }}
                />

            </VStack>


        </>
    )
}

export default page