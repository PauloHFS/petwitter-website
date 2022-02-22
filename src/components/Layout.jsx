import {
  Avatar,
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
  HStack,
  Text,
  IconButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Flex,
  Textarea,
} from '@chakra-ui/react';
import { Fragment, useRef } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import AuthStatus from './AuthStatus';
import { AddIcon } from '@chakra-ui/icons';

export const Layout = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isModalOpen,
    onOpen: onModalOpen,
    onClose: onModalClose,
  } = useDisclosure();

  const btnRef = useRef();

  const location = useLocation();

  console.log(location.pathname);

  const routes = [
    {
      name: 'Home',
      url: '/',
    },
    {
      name: 'Meu Perfil',
      url: '/profile',
    },
    {
      name: 'Configurações',
      url: '/settings',
    },
  ];

  return (
    <Fragment>
      <Box display={['flex', 'none']} minH="48px" boxShadow="md">
        <Box my="auto" ml="4" onClick={onOpen}>
          <svg
            width="24"
            height="16"
            viewBox="0 0 24 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.33333 16H22.6667C23.4 16 24 15.4 24 14.6667C24 13.9333 23.4 13.3333 22.6667 13.3333H1.33333C0.6 13.3333 0 13.9333 0 14.6667C0 15.4 0.6 16 1.33333 16ZM1.33333 9.33333H22.6667C23.4 9.33333 24 8.73333 24 8C24 7.26667 23.4 6.66667 22.6667 6.66667H1.33333C0.6 6.66667 0 7.26667 0 8C0 8.73333 0.6 9.33333 1.33333 9.33333ZM0 1.33333C0 2.06667 0.6 2.66667 1.33333 2.66667H22.6667C23.4 2.66667 24 2.06667 24 1.33333C24 0.6 23.4 0 22.6667 0H1.33333C0.6 0 0 0.6 0 1.33333Z"
              fill="#00ACC1"
            />
          </svg>
        </Box>

        <HStack width="100vw" justifyContent="center">
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.24992 14C6.86075 14 8.16659 12.6942 8.16659 11.0833C8.16659 9.47249 6.86075 8.16666 5.24992 8.16666C3.63909 8.16666 2.33325 9.47249 2.33325 11.0833C2.33325 12.6942 3.63909 14 5.24992 14Z"
              fill="#00ACC1"
            />
            <path
              d="M10.5002 9.33333C12.111 9.33333 13.4168 8.0275 13.4168 6.41667C13.4168 4.80584 12.111 3.5 10.5002 3.5C8.88933 3.5 7.5835 4.80584 7.5835 6.41667C7.5835 8.0275 8.88933 9.33333 10.5002 9.33333Z"
              fill="#00ACC1"
            />
            <path
              d="M17.4999 9.33333C19.1107 9.33333 20.4166 8.0275 20.4166 6.41667C20.4166 4.80584 19.1107 3.5 17.4999 3.5C15.8891 3.5 14.5833 4.80584 14.5833 6.41667C14.5833 8.0275 15.8891 9.33333 17.4999 9.33333Z"
              fill="#00ACC1"
            />
            <path
              d="M22.7499 14C24.3607 14 25.6666 12.6942 25.6666 11.0833C25.6666 9.47249 24.3607 8.16666 22.7499 8.16666C21.1391 8.16666 19.8333 9.47249 19.8333 11.0833C19.8333 12.6942 21.1391 14 22.7499 14Z"
              fill="#00ACC1"
            />
            <path
              d="M20.2301 17.3367C19.2151 16.1467 18.3634 15.1317 17.3368 13.9417C16.8001 13.3117 16.1118 12.6817 15.2951 12.4017C15.1668 12.355 15.0384 12.32 14.9101 12.2967C14.6184 12.25 14.3034 12.25 14.0001 12.25C13.6968 12.25 13.3818 12.25 13.0784 12.3083C12.9501 12.3317 12.8218 12.3667 12.6934 12.4133C11.8768 12.6933 11.2001 13.3233 10.6518 13.9533C9.63675 15.1433 8.78509 16.1583 7.75842 17.3483C6.23009 18.8767 4.35175 20.5683 4.70175 22.9367C5.04009 24.1267 5.89175 25.305 7.42009 25.6433C8.27175 25.8183 10.9901 25.13 13.8834 25.13H14.0934C16.9868 25.13 19.7051 25.8067 20.5568 25.6433C22.0851 25.305 22.9368 24.115 23.2751 22.9367C23.6368 20.5567 21.7584 18.865 20.2301 17.3367Z"
              fill="#00ACC1"
            />
          </svg>
          <Text color="cyan.400">PETWITTER</Text>
        </HStack>
      </Box>
      <IconButton
        aria-label="Create a post"
        icon={<AddIcon />}
        borderRadius="50"
        position="fixed"
        bottom="8"
        right="4"
        size="lg"
        onClick={onModalOpen}
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader pt="10" pb="8" mx="auto">
            <Avatar
              name="Hello World"
              src="https://bit.ly/dan-abramov"
              size="lg"
            />
          </DrawerHeader>

          <DrawerBody p="0">
            {routes.map(route => (
              <Link to={route.url}>
                <Box
                  onClick={onClose}
                  borderLeft="solid"
                  borderLeftWidth={route.url === location.pathname ? '1' : 0}
                  borderLeftColor={
                    route.url === location.pathname ? 'cyan.400' : 'white'
                  }
                  backgroundColor={
                    route.url === location.pathname
                      ? 'rgba(78, 152, 237, 0.1)'
                      : 'white'
                  }
                >
                  <Text
                    color="cyan.400"
                    fontStyle="normal"
                    fontWeight="600"
                    fontSize="16px"
                    width="100%"
                    textAlign="center"
                    lineHeight="8"
                  >
                    {route.name}
                  </Text>
                </Box>
              </Link>
            ))}

            <AuthStatus />
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      <Modal isOpen={isModalOpen} onClose={onModalClose} size="full">
        <ModalOverlay />
        <ModalContent mt="33px">
          <Flex
            p="2"
            justifyContent="space-between"
            borderBottom="solid"
            borderBottomWidth="1px"
            borderBottomColor="gray.200"
          >
            <Button variant="outline" onClick={onModalClose}>
              Cancelar
            </Button>
            <Button>Petwittar</Button>
          </Flex>
          <Flex mx="4" mt="6px">
            <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
            <Textarea
              placeholder="O que está acontecendo?"
              borderColor="white"
              resize="none"
              _focus={{ borderColor: 'white' }}
            />
          </Flex>
        </ModalContent>
      </Modal>

      <Outlet />
    </Fragment>
  );
};
