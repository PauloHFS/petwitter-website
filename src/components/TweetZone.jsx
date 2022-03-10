import { Avatar, Button, Flex, HStack, Textarea, Text } from '@chakra-ui/react';

export const TweetZone = () => {
  return (
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
        <Avatar name={'Alo'} />
        <Textarea
          name="text"
          /* value={values.text}
        onChange={handleChange} */
          placeholder="O que está acontecendo?"
          borderColor="white"
          resize="none"
          _focus={{ borderColor: 'white' }}
        ></Textarea>
      </HStack>
      <Flex flexDir="row-reverse">
        <Button px="2" type="submit" /* disabled={isSubmitting} */>
          Petwittar
        </Button>
        <Text mx="4" my="auto" color="gray.300">
          0/140
        </Text>
      </Flex>
    </Flex>
  );
};
