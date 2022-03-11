import {
  Avatar,
  Button,
  Flex,
  HStack,
  Text,
  Textarea,
  useToast,
} from '@chakra-ui/react';
import { Formik } from 'formik';
import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { getFromStorage } from '../services/auth';
import { createPost } from '../services/posts';

export const TweetZone = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const queryClient = useQueryClient();

  const mutation = useMutation(createPost, {
    onSuccess: () => {
      queryClient.invalidateQueries('feed');
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
        values.text = '';
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
            display={['none', 'flex']}
            flexDir="column"
            borderBottom="solid"
            borderBottomColor="gray.100"
            borderBottomWidth="0.75rem"
            py="2rem"
            px="1.5rem"
          >
            <HStack>
              <Avatar name={getFromStorage('user').name} />
              <Textarea
                rows="4"
                name="text"
                value={values.text}
                onChange={handleChange}
                placeholder="O que está acontecendo?"
                borderColor="white"
                resize="none"
                _focus={{ borderColor: 'white' }}
              ></Textarea>
            </HStack>
            <Flex flexDir="row-reverse">
              <Button px="2" type="submit" disabled={isSubmitting}>
                Petwittar
              </Button>
              <Text
                mx="4"
                my="auto"
                color={errors.text && touched.text ? 'red.200' : 'gray.300'}
              >
                {values.text.length}/140
              </Text>
            </Flex>
          </Flex>
        </form>
      )}
    </Formik>
  );
};
