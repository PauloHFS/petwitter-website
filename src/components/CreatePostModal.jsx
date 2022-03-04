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
  useDisclosure,
} from '@chakra-ui/react';
import { Fragment } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { createPost } from '../services/posts';

export const CreatePostModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const queryClient = useQueryClient();

  const mutation = useMutation(createPost, {
    onSuccess: () => {
      queryClient.invalidateQueries('feed');
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
          <form>
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
              <Button
                px="2"
                onClick={() =>
                  mutation.mutate('ALOALOALOALOALOAL AOALOALOAOLALOLAOLA')
                }
              >
                Petwittar
              </Button>
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
            <Flex>
              <Text>0/140</Text>
            </Flex>
          </form>
        </ModalContent>
      </Modal>
    </Fragment>
  );
};
