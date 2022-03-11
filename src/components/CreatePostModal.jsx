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
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

export const CreatePostModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const navigate = useNavigate();

  const userInfo = getFromStorage('user');

  const queryClient = useQueryClient();

  const mutation = useMutation(createPost, {
    onSuccess: () => {
      queryClient.invalidateQueries('feed');
      onClose();
    },
    onError: error => {
      const { name, message, status } = error.toJSON();
      if (status === 401) {
        navigate('/login');
      }
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
            validationSchema={Yup.object().shape({
              text: Yup.string()
                .min(1, 'Muito pequena!')
                .max(140, 'Eita você chegou no limite!')
                .required(),
            })}
            onSubmit={(values, { setSubmitting }) => {
              mutation.mutate(values.text);
              setSubmitting(false);
            }}
          >
            {({
              values,
              handleChange,
              isSubmitting,
              handleSubmit,
              errors,
              touched,
            }) => (
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
                  <Flex alignItems="center">
                    <Text
                      mr="1rem"
                      color={
                        errors.text && touched.text ? 'red.200' : '#828282'
                      }
                    >
                      {values.text.length}/140
                    </Text>
                    <Button px="2" type="submit" disabled={isSubmitting}>
                      Petwittar
                    </Button>
                  </Flex>
                </Flex>
                <Flex mx="4" mt="6px">
                  <Avatar name={userInfo.name} />
                  <Textarea
                    rows="6"
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
