import react, { useState } from "react"
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
    Input

} from '@chakra-ui/react'



const Request = () => {

    const [total_requests, setTotal_Requests] = useState(false);
    const [total_done, setTotal_Done] = useState(false);
    const [total_reject, setTotal_Rejects] = useState(false);
    const [isTableVisible, setIsTableVisible] = useState(false);




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

                                <Tr>
                                    <Td>1</Td>
                                    <Td>abc@gmail.com</Td>
                                    <Td>abc</Td>
                                    <Td>abc_document</Td>
                                    <Td><Input type="file" padding={2} width="50%"></Input></Td>
                                    <Td><Button>submit</Button></Td>
                                    <Td><Button>Reject</Button></Td>
                                </Tr>
                                <Tr>
                                    <Td>2</Td>
                                    <Td>abc@gmail.com</Td>
                                    <Td>abc</Td>
                                    <Td>abc_document</Td>
                                    <Td><Input type="file" padding={2} width="50%"></Input></Td>
                                    <Td><Button>submit</Button></Td>
                                    <Td><Button>Reject</Button></Td>
                                </Tr>
                                <Tr>
                                    <Td>3</Td>
                                    <Td>abc@gmail.com</Td>
                                    <Td>abc</Td>
                                    <Td>abc_document</Td>
                                    <Td><Input type="file" padding={2} width="50%"></Input></Td>
                                    <Td><Button>submit</Button></Td>
                                    <Td><Button>Reject</Button></Td>
                                </Tr>


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

                                <Tr padding={2}>
                                    <Td>1</Td>
                                    <Td>abc@gmail.com</Td>
                                    <Td>abc</Td>
                                    <Td>abc_document</Td>
                                    <Td backgroundColor={"green.200"} width={"10"} borderRadius={'10'}>Submitted</Td>

                                </Tr>
                                <br />
                                <Tr>
                                    <Td>2</Td>
                                    <Td>abc@gmail.com</Td>
                                    <Td>abc</Td>
                                    <Td>abc_document</Td>
                                    <Td backgroundColor={"green.200"} width={"10"} borderRadius={'10'}>Submitted</Td>
                                </Tr>
                                <br />
                                <Tr>
                                    <Td>3</Td>
                                    <Td>abc@gmail.com</Td>
                                    <Td>abc</Td>
                                    <Td>abc_document</Td>
                                    <Td backgroundColor={"green.200"} width={"10"} borderRadius={'10'}>Submitted</Td>

                                </Tr>


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

                                <Tr padding={2}>
                                    <Td>1</Td>
                                    <Td>abc@gmail.com</Td>
                                    <Td>abc</Td>
                                    <Td>abc_document</Td>
                                    <Td backgroundColor={"red.200"} width={"10"} borderRadius={'10'}>Rejected</Td>

                                </Tr>
                                <br />
                                <Tr>
                                    <Td>2</Td>
                                    <Td>abc@gmail.com</Td>
                                    <Td>abc</Td>
                                    <Td>abc_document</Td>
                                    <Td backgroundColor={"red.200"} width={"10"} borderRadius={'10'}>Rejected</Td>
                                </Tr>
                                <br />
                                <Tr>
                                    <Td>3</Td>
                                    <Td>abc@gmail.com</Td>
                                    <Td>abc</Td>
                                    <Td>abc_document</Td>
                                    <Td backgroundColor={"red.200"} width={"10"} borderRadius={'10'}>Rejected</Td>

                                </Tr>


                            </Tbody>

                        </Table>
                    </TableContainer> : null
                }



            </Stack>

        </Box >
    )
};

export default Request;