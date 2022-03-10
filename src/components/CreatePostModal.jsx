import { AddIcon } from '@chakra-ui/icons';
import {
  Avatar,
  Button,
  Flex,
  IconButton,
  Modal,
  ModalContent,
  ModalOverlay,
  Text,
  Textarea,
  useToast,
  useDisclosure,
} from '@chakra-ui/react';
import { Fragment } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { createPost } from '../services/posts';
import { getFromStorage } from '../services/auth';
import { Formik } from 'formik';

export const CreatePostModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const userInfo = getFromStorage('user');

  const queryClient = useQueryClient();

  const mutation = useMutation(createPost, {
    onSuccess: () => {
      queryClient.invalidateQueries('feed');
      onClose();
    },
    onError: error => {
      const { name, message } = error.toJSON();
      toast({
        title: name,
        description: message,
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    },
  });

  return (
    <Fragment>
      <IconButton
        display={['flex', 'none']}
        aria-label="Create a post"
        icon={<AddIcon />}
        borderRadius="50"
        position="fixed"
        bottom="8"
        right="4"
        size="lg"
        onClick={onOpen}
      />
      <Modal isOpen={isOpen} onClose={onClose} size="full">
        <ModalOverlay />
        <ModalContent mt="33px">
          <Formik
            initialValues={{ text: '' }}
            onSubmit={(values, { setSubmitting }) => {
              mutation.mutate(values.text);
              setSubmitting(false);
            }}
          >
            {({ values, handleChange, isSubmitting, handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <Flex
                  p="2"
                  justifyContent="space-between"
                  borderBottom="solid"
                  borderBottomWidth="1px"
                  borderBottomColor="gray.200"
                >
                  <Text
                    fontStyle="auto"
                    fontWeight="300"
                    lineHeight="21px"
                    my="auto"
                    onClick={onClose}
                  >
                    Cancelar
                  </Text>
                  <Text>{values.text.length}/140</Text>
                  <Button px="2" type="submit" disabled={isSubmitting}>
                    Petwittar
                  </Button>
                </Flex>
                <Flex mx="4" mt="6px">
                  <Avatar name={userInfo.name} />
                  <Textarea
                    name="text"
                    value={values.text}
                    onChange={handleChange}
                    placeholder="O que está acontecendo?"
                    borderColor="white"
                    resize="none"
                    _focus={{ borderColor: 'white' }}
                  />
                </Flex>
              </form>
            )}
          </Formik>
        </ModalContent>
      </Modal>
    </Fragment>
  );
};
