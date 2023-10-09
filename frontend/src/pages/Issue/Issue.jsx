import { useState, useEffect } from 'react'
import {
    Box, Input, Textarea, Button, FormControl, FormLabel, VStack, ChakraProvider, useStatStyles
} from '@chakra-ui/react'
import { useToast } from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';


const Issue = () => {

    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [filename, setFileName] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();
    const toast = useToast();


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!username || !email || !filename || !description) {
            toast({
                title: "Please Fill all the fields",
                status: "warning",
                duration: 5000,
                isClosable: true,
                position: "bottom",
            });

            return;
        }

        try {
            const config = {
                headers: {
                    "Content-type": "application/json",
                },
            };

            const data = await axios.post(
                "http://localhost:5000/api/issue/createissue",
                {
                    "username": username,
                    "emailId": email,
                    "filename": filename,
                    "description": description,
                    "status": "pending",
                    'link': ''
                },
                config
            );

            toast({
                title: "Issue Created Successfully",
                status: "success",
                duration: 5000,
                isClosable: true,
                position: "bottom",
            });


            setTimeout(() => {
                navigate("/")
            }, 400);

        } catch (error) {
            toast({
                title: "Error Occured!",
                description: error.response.data.message,
                status: "error",
                duration: 5000,
                isClosable: true,
                position: "bottom",
            });

        }
    };

    return (
        <ChakraProvider>
            <Box p={4} maxWidth="400px" margin="auto" positon="auto">
                <form onSubmit={handleSubmit}>
                    <VStack spacing={4}>
                        <FormControl isRequired>
                            <FormLabel>Username</FormLabel>
                            <Input type="text" placeholder="Enter your username" onChange={(e) => { setUserName(e.target.value) }} />
                        </FormControl>

                        <FormControl isRequired>
                            <FormLabel>Email ID</FormLabel>
                            <Input type="email" placeholder="Enter your email ID" onChange={(e) => { setEmail(e.target.value) }} />
                        </FormControl>

                        <FormControl isRequired>
                            <FormLabel>Name of the File</FormLabel>
                            <Input type="text" placeholder="Enter the file name" onChange={(e) => { setFileName(e.target.value) }} />
                        </FormControl>

                        <FormControl isRequired>
                            <FormLabel>Description of the File</FormLabel>
                            <Textarea placeholder="Enter a description of the file" onChange={(e) => { setDescription(e.target.value) }} />
                        </FormControl>

                        <Button type="submit" colorScheme="blue" onClick={handleSubmit}>
                            Submit
                        </Button>
                    </VStack>
                </form>
            </Box>
        </ChakraProvider>
    );

};


export default Issue;