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
    Input,
    InputGroup,
    InputLeftElement,
    InputRightAddon


} from '@chakra-ui/react'
import { useToast } from "@chakra-ui/react";
import { ChevronDownIcon, SearchIcon } from "@chakra-ui/icons";



const SearchByUser = () => {

    const [search, setSearch] = useState("");
    const [total_done, setTotal_Done] = useState(false);
    const [total_reject, setTotal_Rejects] = useState(false);
    const [data, setData] = useState(false);
    const toast = useToast();

    const SearchUser = (e) => {

        setTotal_Rejects(false);
        setTotal_Done(false);
        if (!search) {
            setData(false)
            toast({
                title: "Please Enter User Email id",
                status: "warning",
                duration: 5000,
                isClosable: true,
                position: "bottom",
            });
            return;
        }
        setData(true);
    }


    return (
        <Box
            padding={10}
            width="90%"
            maxH="90%"
            overflowY={"auto"}
            paddingLeft={25}
        >

            <Box paddingBottom={2} >

                <InputGroup borderRadius={20} backgroundColor="white"  >
                    <InputLeftElement pointerEvents='none'>
                        <SearchIcon color='gray.300' />
                    </InputLeftElement>
                    <Input type='text' value={search} placeholder='Search By User Email Id' borderRadius={20} onChange={(e) => { setSearch(e.target.value) }} />
                    <InputRightAddon><Button width="100%" onClick={SearchUser}>Search</Button></InputRightAddon>
                </InputGroup>

            </Box>

            <Stack spacing={3}>

                {
                    data ? <Button onClick={(e) => { setTotal_Done(!total_done) }} bg={total_done ? "gray.300" : null} > Total Done</Button> : null
                }

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

                {
                    data ? <Button onClick={(e) => { setTotal_Rejects(!total_reject) }} bg={total_reject ? "gray.300" : null} > Total Reject</Button> : null
                }
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

export default SearchByUser;