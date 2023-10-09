import react, { useEffect, useState } from "react"
import axios from "axios";
import {
    TableContainer,
    Box,
    Stack,
    Select,
    Table,
    TableCaption,
    Thead,
    Tfoot,
    Th,
    Td,
    Tbody,
    Tr,
    Button,
    Input,
    effect

} from '@chakra-ui/react'
import { useToast } from "@chakra-ui/react";


const Request = () => {

    const [total_requests, setTotal_Requests] = useState(false);
    const [total_done, setTotal_Done] = useState(false);
    const [total_reject, setTotal_Rejects] = useState(false);
    // const [isTableVisible, setIsTableVisible] = useState(false);
    const [data, setData] = useState([]);
    const data2 = [1, 2, 3, 4]
    const toast = useToast();


    const FetchAllRequets = async () => {

        try {
            const config = {
                headers: {
                    "Content-type": "application/json",
                },
            };

            const data = await axios.get(
                "http://localhost:5000/api/issue/getall", config
            );
            const data2 = JSON.parse(data)

            console.log(data2)

            // toast({
            //     title: "Login Successful",
            //     status: "success",
            //     duration: 5000,
            //     isClosable: true,
            //     position: "bottom",
            // });
            // localStorage.setItem("userInfo", JSON.stringify(data));
            // setTimeout(() => { navigate("/") }, 500);

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
    }


    useEffect(() => {
        FetchAllRequets()
    }, [])




    return (
        <Box
            padding={10}
            width="100%"
            maxH="90%"
            overflowY={"auto"}
        >
            <Stack spacing={3}>

                <Button onClick={(e) => { setTotal_Requests(!total_requests) }} bg={total_requests ? "gray.300" : null}>Total Requests</Button>
                {total_requests ?
                    <TableContainer>
                        <Table variant='simple'>

                            <Thead>
                                <Tr>
                                    <Th>Index</Th>
                                    <Th>Email Id</Th>
                                    <Th>Name</Th>
                                    <Th>Document Requested</Th>
                                    <Th>Upload</Th>
                                    <Th>Submit</Th>
                                    <Th>Reject</Th>
                                </Tr>
                            </Thead>
                            <Tbody>

                                {data2.map((u) => (
                                    <Tr>
                                        <Td>1</Td>
                                        <Td>abc@gmail.com</Td>
                                        <Td>abc</Td>
                                        <Td>abc_document</Td>
                                        <Td><Input type="file" padding={2} width="50%"></Input></Td>
                                        <Td><Button>submit</Button></Td>
                                        <Td><Button>Reject</Button></Td>
                                    </Tr>

                                ))}


                            </Tbody>

                        </Table>
                    </TableContainer> : null
                }
                <Button onClick={(e) => { setTotal_Done(!total_done) }} bg={total_done ? "gray.300" : null} > Total Done</Button>
                {total_done ?
                    <TableContainer>
                        <Table variant={'simple'}>

                            <Thead>
                                <Tr>
                                    <Th>Index</Th>
                                    <Th>Email Id</Th>
                                    <Th>Name</Th>
                                    <Th>Document Requested</Th>
                                    <Th>Status</Th>

                                </Tr>
                            </Thead>
                            <Tbody>

                                {data2.map((u) => (
                                    <Tr>
                                        <Td>2</Td>
                                        <Td>abc@gmail.com</Td>
                                        <Td>abc</Td>
                                        <Td>abc_document</Td>
                                        <Td><Box backgroundColor={"green.200"} padding={2} borderRadius={4} w={"35%"}>Submitted</Box></Td>
                                    </Tr>
                                ))}


                            </Tbody>

                        </Table>
                    </TableContainer> : null
                }

                <Button onClick={(e) => { setTotal_Rejects(!total_reject) }} bg={total_reject ? "gray.300" : null}>Total Rejected </Button>
                {total_reject ?
                    <TableContainer>
                        <Table variant={'simple'}>

                            <Thead>
                                <Tr>
                                    <Th>Index</Th>
                                    <Th>Email Id</Th>
                                    <Th>Name</Th>
                                    <Th>Document Requested</Th>
                                    <Th>Status</Th>

                                </Tr>
                            </Thead>
                            <Tbody>


                                {data2.map((u) => (
                                    <Tr>
                                        <Td>2</Td>
                                        <Td>abc@gmail.com</Td>
                                        <Td>abc</Td>
                                        <Td>abc_document</Td>
                                        <Td><Box backgroundColor={"red.200"} padding={2} borderRadius={4} width={"35%"}>Rejected</Box></Td>
                                    </Tr>
                                ))}




                            </Tbody>

                        </Table>
                    </TableContainer> : null
                }

            </Stack>

        </Box >
    )
};

export default Request;