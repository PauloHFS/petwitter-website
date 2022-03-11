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
import { getFromStorage } from '../services/auth';
import { createPost } from '../services/posts';

export const TweetZone = () => {
  const toast = useToast();
  const queryClient = useQueryClient();

  const mutation = useMutation(createPost, {
    onSuccess: () => {
      queryClient.invalidateQueries('feed');
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
    <Formik
      initialValues={{ text: '' }}
      onSubmit={(values, { setSubmitting }) => {
        mutation.mutate(values.text);
        values.text = '';
        setSubmitting(false);
      }}
    >
      {({ values, handleChange, isSubmitting, handleSubmit }) => (
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
              <Text mx="4" my="auto" color="gray.300">
                {values.text.length}/140
              </Text>
            </Flex>
          </Flex>
        </form>
      )}
    </Formik>
  );
};
