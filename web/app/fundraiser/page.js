"use client"
import { useState } from 'react';
import {
    Box, HStack, Heading, Input, VStack, Text, Button,
} from '@chakra-ui/react'

import NavLoggedin from '../../components/NavLoggedin'

const fund = () => {
    const [search, setSearch] = useState('');
    const [data, setData] = useState('');

    const handleSearch = () => {
        if (search === '') {
            alert('Please enter a message');
            return;
        }

        console.log(search);

        // post /sms
        // body: { message: search }

        fetch(`http://localhost:8080/sms`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message: search, to: '+918431112350' }),
        }).then((res) => res.json())
            .then((data) => {
                setData(data);
                console.log(data);
            })
            .catch((err) => {
                console.log(err);
            });

    };

    return (
        <>
            <NavLoggedin />
            <VStack spacing={8} align="center" p={10}>
                <Heading>Start a Campaign</Heading>
                <HStack
                    w="50%"

                    p={10}>
                    <Input
                        placeholder="Message"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <Button
                        colorScheme="blue"
                        size="md"
                        ml={2}
                        onClick={() => {
                            console.log('Search');
                            handleSearch();
                        }}
                    >
                        Send
                    </Button>
                </HStack>


            </VStack>
        </>
    );
};

export default fund;
