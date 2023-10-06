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
} from '@chakra-ui/react'
import { ChevronDownIcon } from "@chakra-ui/icons";
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';

const Header = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const navigate = useNavigate()

    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    const user = userInfo ? userInfo.User : null
    const path = window.location.pathname;


    const logoutHandler = () => {
        localStorage.removeItem("userInfo");
        navigate("/login");
    };

    return (
        <>
            <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <IconButton
                        size={'md'}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={'Open Menu'}
                        display={{ md: 'none' }}
                        onClick={isOpen ? onClose : onOpen}
                    />
                    <HStack spacing={8} alignItems={'center'}>
                        <Box>Logo</Box>

                        {
                            user ?

                                <Stack direction={'row'} spacing={6}>
                                    <Box as="a" href={'/'} _hover={{
                                        background: "white",
                                    }}>
                                        Home
                                    </Box>
                                    <Box as="a" href={'/about'} _hover={{
                                        background: "white",
                                    }}>
                                        About
                                    </Box>
                                    <Box as="a" href={'/contact'} _hover={{
                                        background: "white",
                                    }}>
                                        Contact
                                    </Box>
                                </Stack> : null
                        }

                    </HStack>
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

                </Flex>
            </Box >
        </>
    )
}

export default Header;