import { Flex, Text, HStack } from '@chakra-ui/react';
import { useLocation, useNavigate } from 'react-router-dom';
import { APP_ROUTES } from '../routes';

export const DesktopTabBar = () => {
  const location = useLocation();

  let navigate = useNavigate();

  return (
    <Flex display={['none', 'flex']} flexDir="column" height="100vh" flex="1">
      <HStack mx="auto" my="6">
        <svg
          width="54"
          height="54"
          viewBox="0 0 54 54"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.125 27C13.2316 27 15.75 24.4816 15.75 21.375C15.75 18.2684 13.2316 15.75 10.125 15.75C7.0184 15.75 4.5 18.2684 4.5 21.375C4.5 24.4816 7.0184 27 10.125 27Z"
            fill="#00ACC1"
          />
          <path
            d="M20.25 18C23.3566 18 25.875 15.4816 25.875 12.375C25.875 9.2684 23.3566 6.75 20.25 6.75C17.1434 6.75 14.625 9.2684 14.625 12.375C14.625 15.4816 17.1434 18 20.25 18Z"
            fill="#00ACC1"
          />
          <path
            d="M33.75 18C36.8566 18 39.375 15.4816 39.375 12.375C39.375 9.2684 36.8566 6.75 33.75 6.75C30.6434 6.75 28.125 9.2684 28.125 12.375C28.125 15.4816 30.6434 18 33.75 18Z"
            fill="#00ACC1"
          />
          <path
            d="M43.875 27C46.9816 27 49.5 24.4816 49.5 21.375C49.5 18.2684 46.9816 15.75 43.875 15.75C40.7684 15.75 38.25 18.2684 38.25 21.375C38.25 24.4816 40.7684 27 43.875 27Z"
            fill="#00ACC1"
          />
          <path
            d="M39.015 33.435C37.0575 31.14 35.415 29.1825 33.435 26.8875C32.4 25.6725 31.0725 24.4575 29.4975 23.9175C29.25 23.8275 29.0025 23.76 28.755 23.715C28.1925 23.625 27.585 23.625 27 23.625C26.415 23.625 25.8075 23.625 25.2225 23.7375C24.975 23.7825 24.7275 23.85 24.48 23.94C22.905 24.48 21.6 25.695 20.5425 26.91C18.585 29.205 16.9425 31.1625 14.9625 33.4575C12.015 36.405 8.39252 39.6675 9.06752 44.235C9.72002 46.53 11.3625 48.8025 14.31 49.455C15.9525 49.7925 21.195 48.465 26.775 48.465H27.18C32.76 48.465 38.0025 49.77 39.645 49.455C42.5925 48.8025 44.235 46.5075 44.8875 44.235C45.585 39.645 41.9625 36.3825 39.015 33.435V33.435Z"
            fill="#00ACC1"
          />
        </svg>
        <Text fontWeight="700" fontSize="27px" color="cyan.400">
          PETWITTER
        </Text>
      </HStack>
      {APP_ROUTES.map(route => (
        <Flex
          key={route.name}
          borderLeft={route.url === location.pathnme ? 'solid' : 'none'}
          borderLeftWidth={route.url === location.pathname ? '1' : 0}
          borderLeftColor={
            route.url === location.pathname ? 'cyan.400' : 'white'
          }
          backgroundColor={
            route.url === location.pathname
              ? 'rgba(78, 152, 237, 0.1)'
              : 'white'
          }
          _focusVisible={{ outlineColor: 'white' }}
          onClick={() => {
            navigate(route.url);
          }}
          alignItems="center"
          pl="4.5rem"
          height="3rem"
        >
          {route.icon(route.url === location.pathname ? '#00ACC1' : '#424242')}
          <Text
            color="cyan.400"
            fontStyle="normal"
            fontWeight="700"
            fontSize="16px"
            width="100%"
            lineHeight="8"
            _focusVisible={{ outlineColor: 'white' }}
            ml="0.75rem"
          >
            {route.name}
          </Text>
        </Flex>
      ))}
    </Flex>
  );
};
