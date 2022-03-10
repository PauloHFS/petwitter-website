import { Flex } from '@chakra-ui/react';
import { DesktopTabBar } from './DesktopTabBar';

export const DesktopLayout = ({ children }) => {
  return (
    <Flex>
      <DesktopTabBar />
      <Flex
        flex={['1', '2']}
        flexDir="column"
        borderLeft="solid"
        borderLeftWidth="0.3rem"
        borderLeftColor="gray.100"
        borderRight="solid"
        borderRightWidth="0.3rem"
        borderRightColor="gray.100"
      >
        {children}
      </Flex>
      <Flex display={['none', 'flex']} flex="1"></Flex>
    </Flex>
  );
};
