import {
    Box,
    Flex,
    Avatar,
    HStack,
    Link,
    Text,
    IconButton,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
    Input,
    InputGroup,
    InputLeftElement,
    Image
} from '@chakra-ui/react'


import { ChevronDownIcon, SearchIcon } from "@chakra-ui/icons";
import logo from "../logo.svg"
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';

const Header = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [search, setSearch] = useState()
    const navigate = useNavigate()

    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    const user = userInfo ? userInfo.User : null
    const path = window.location.pathname;

    console.log(search)


    const logoutHandler = () => {
        localStorage.removeItem("userInfo");
        navigate("/login");
    };

    return (
        <>
            <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <HStack spacing={8} alignItems={'center'}>

                        <Image
                            boxSize='80px'
                            src={logo}
                            alt='Logo'
                        />

                        <Stack direction={'row'} spacing={6}>
                            <Box as="a" href={'/'}
                            //  _hover={{
                            //     background: "white",
                            // }}
                            >
                                Home
                            </Box>
                            {
                                user ? (
                                    <Box as="a" href={'/requests'}
                                    // _hover={{ background: "white" }}
                                    >
                                        Requests
                                    </Box>
                                ) : null
                            }

                        </Stack >

                    </HStack>
                    {
                        user ? (
                            <InputGroup borderRadius={20} width={600} backgroundColor="white" boxShadow="1px 1px black"   >
                                <InputLeftElement pointerEvents='none'>
                                    <SearchIcon color='gray.300' />
                                </InputLeftElement>
                                <Input type='text' placeholder='Search By User' borderRadius={20} />
                            </InputGroup>
                        ) : null
                    }
                    <HStack alignItems={'end'}>
                        {
                            user ?
                                <Menu>
                                    <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                                        <Avatar
                                            size="sm"
                                            cursor="pointer"
                                            name={user.firstName}
                                        />
                                    </MenuButton>
                                    <MenuList>
                                        <MenuItem size='sm' onClick={logoutHandler}>Logout</MenuItem>
                                    </MenuList>
                                </Menu> :
                                (
                                    path == '/login' || path == '/signup' ?
                                        null
                                        :
                                        <Menu>
                                            <Button colorScheme='black' size='sm' variant='outline' onClick={() => navigate('/login')}>
                                                Login
                                            </Button>
                                        </Menu>
                                )
                        }
                    </HStack>

                </Flex >
            </Box >
        </>
    )
}

export default Header;

{/* <InputGroup width={800} backgroundColor="white" borderColor="black">
                                <InputLeftAddon pointerEvents="none" children='+234' />

                                <Input type='text' placeholder='Search By User' />
                            </InputGroup> */}

{/* <Box as="a" href={'/about'} _hover={{
                                background: "white",
                            }}>
                                Requests
                            </Box>
                            <Box as="a" _hover={{
                                background: "white",
                            }}>
                                <Input placeholder='Search By User' size='sm' />

                            </Box> : null */}


{/* <Box >
                                <Input width="auto" variant='flushed' placeholder='Search By User' alignItems={'center'} size='md' borderRadius={4} paddingLeft={2} onChange={(e) => { setSearch(e.target.value) }} backgroundColor="white" color="black" />
                                {/* <Input width="auto" variant='flushed' placeholder='Search By User' alignItems={'center'} size='md' borderRadius={4} borderColor="black" borderWidth={1} paddingLeft={2} onChange={(e) => { setSearch(e.target.value) }} backgroundColor="white" color="black" /> */}
{/* </Box> */ } 