"use client"
import { useState } from 'react';
import {
    Box, HStack, Heading, Input, VStack, Text, Button,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from '@chakra-ui/react'

import NavLoggedin from '../../components/NavLoggedin'

const AI = () => {
    const [search, setSearch] = useState('');
    const [data, setData] = useState([]);

    const handleSearch = () => {
        if (search === '') {
            alert('Please enter a search query');
            return;
        }

        console.log(search);

        // axios
        //     .get(`http://localhost:8080/yt/ai?q=${search}`)
        //     .then((res) => {
        //         setData(res.data);
        //         console.log(res.data);
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //     });
        // };

        fetch(`http://localhost:8080/yt/ai?q=${search}`)
            .then((res) => res.json())
            .then((data) => {
                setData(data);
                console.log(data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const YoutubeEmbed = ({ embedId }) => (
        <div className="video-responsive">
            <iframe
                width="853"
                height="480"
                src={`https://www.youtube.com/embed/${embedId}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
            />
        </div>
    );

    return (
        <>
            <NavLoggedin />
            <VStack spacing={8} align="center" p={10}>
                <Heading>AI-based Learning Management System</Heading>
                <HStack
                    w="50%"

                    p={10}>
                    <Input
                        placeholder="Search"
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
                        Search
                    </Button>
                </HStack>

                <Heading>{search}</Heading>

                <Accordion 
                w="50%"
                
                allowToggle>
                    {data.map((item) => (
                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box flex="1" textAlign="left">
                                        {item.module}
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>

                            </h2>
                            <AccordionPanel pb={4}>
                                {/* <Text>{item.id}</Text> */}
                                <YoutubeEmbed embedId={item.id} />

                            </AccordionPanel>
                        </AccordionItem>
                    ))}
                </Accordion>


            </VStack>
        </>
    );
};

export default AI;
