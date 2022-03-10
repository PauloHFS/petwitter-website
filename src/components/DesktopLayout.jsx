import { Flex } from '@chakra-ui/react';
import { DesktopTabBar } from './DesktopTabBar';

export const DesktopLayout = ({ children }) => {
  return (
    <Flex>
      <DesktopTabBar />
      <Flex
        flex={['1', '2']}
        flexDir="column"
        borderX={['none', 'solid']}
        borderColor="gray.100"
        borderWidth="1"
      >
        {children}
      </Flex>
      <Flex display={['none', 'flex']} flex="1"></Flex>
    </Flex>
  );
};
