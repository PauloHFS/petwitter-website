import { Flex, Box, Avatar, HStack, Text } from '@chakra-ui/react';

export const Post = props => {
  const { imageUrl, name, nickname, date, body } = props;

  return (
    <Flex
      flexDir="row"
      minH="149"
      pt="5"
      px="4"
      pb="4"
      borderBottom="solid"
      borderBottomColor="gray.200"
      borderBottomWidth="1px"
    >
      <Avatar name={name} src={imageUrl} />
      <Box ml="2">
        <HStack spacing="1">
          <Text
            fontStyle="normal"
            fontWeight="bold"
            fontSize="14px"
            lineHeight="19px"
            color="gray.600"
          >
            {name}
          </Text>
          <Text
            fontStyle="normal"
            fontWeight="300"
            fontSize="12px"
            lineHeight="17px"
            color="gray.600"
          >
            {nickname}
          </Text>
          <Text
            fontStyle="normal"
            fontWeight="300"
            fontSize="12px"
            lineHeight="17px"
            color="gray.600"
          >
            {'•'}
          </Text>
          <Text
            fontStyle="normal"
            fontWeight="300"
            fontSize="12px"
            lineHeight="17px"
            color="gray.600"
          >
            {'1m'}
          </Text>
        </HStack>
        <Text
          fontStyle="normal"
          fontWeight="400"
          fontSize="14px"
          lineHeight="18px"
          color="#141619"
        >
          {body}
        </Text>
      </Box>
    </Flex>
  );
};
