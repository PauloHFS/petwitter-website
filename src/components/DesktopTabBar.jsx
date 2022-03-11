import { Flex, Text, HStack } from '@chakra-ui/react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getFromStorage } from '../services/auth';

export const DesktopTabBar = () => {
  const location = useLocation();

  let navigate = useNavigate();

  const routes = [
    {
      name: 'Home',
      icon: fill => (
        <svg
          width="21"
          height="17"
          viewBox="0 0 21 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.57501 17V11H12.575V17H17.575V9H20.575L10.575 0L0.575012 9H3.57501V17H8.57501Z"
            fill={fill}
          />
        </svg>
      ),
      url: '/',
    },
    {
      name: 'Meu petfil',
      icon: fill => (
        <svg
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.575 0C5.05501 0 0.575012 4.48 0.575012 10C0.575012 15.52 5.05501 20 10.575 20C16.095 20 20.575 15.52 20.575 10C20.575 4.48 16.095 0 10.575 0ZM10.575 3C12.235 3 13.575 4.34 13.575 6C13.575 7.66 12.235 9 10.575 9C8.91501 9 7.57501 7.66 7.57501 6C7.57501 4.34 8.91501 3 10.575 3ZM10.575 17.2C8.07501 17.2 5.86501 15.92 4.57501 13.98C4.60501 11.99 8.57501 10.9 10.575 10.9C12.565 10.9 16.545 11.99 16.575 13.98C15.285 15.92 13.075 17.2 10.575 17.2Z"
            fill={fill}
          />
        </svg>
      ),
      url: `/profile/${getFromStorage('user').id}`,
    },
    {
      name: 'Configurações',
      icon: fill => (
        <svg
          width="19"
          height="20"
          viewBox="0 0 19 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.715 10.936C16.751 10.636 16.775 10.324 16.775 10C16.775 9.67602 16.751 9.36403 16.703 9.06402L18.731 7.48002C18.911 7.33602 18.959 7.07202 18.851 6.86802L16.931 3.54402C16.811 3.32802 16.559 3.25602 16.343 3.32802L13.955 4.28802C13.451 3.90402 12.923 3.59202 12.335 3.35202L11.975 0.808024C11.939 0.568024 11.735 0.400024 11.495 0.400024H7.655C7.415 0.400024 7.223 0.568024 7.187 0.808024L6.827 3.35202C6.239 3.59202 5.699 3.91602 5.207 4.28802L2.819 3.32802C2.603 3.24402 2.351 3.32802 2.231 3.54402L0.310997 6.86802C0.190997 7.08402 0.238997 7.33602 0.430997 7.48002L2.459 9.06402C2.411 9.36403 2.375 9.68802 2.375 10C2.375 10.312 2.399 10.636 2.447 10.936L0.418997 12.52C0.238997 12.664 0.190997 12.928 0.298997 13.132L2.219 16.456C2.339 16.672 2.591 16.744 2.807 16.672L5.195 15.712C5.699 16.096 6.227 16.408 6.815 16.648L7.175 19.192C7.223 19.432 7.415 19.6 7.655 19.6H11.495C11.735 19.6 11.939 19.432 11.963 19.192L12.323 16.648C12.911 16.408 13.451 16.084 13.943 15.712L16.331 16.672C16.547 16.756 16.799 16.672 16.919 16.456L18.839 13.132C18.959 12.916 18.911 12.664 18.719 12.52L16.715 10.936ZM9.575 13.6C7.595 13.6 5.975 11.98 5.975 10C5.975 8.02002 7.595 6.40002 9.575 6.40002C11.555 6.40002 13.175 8.02002 13.175 10C13.175 11.98 11.555 13.6 9.575 13.6Z"
            fill={fill}
          />
        </svg>
      ),
      url: '/settings',
    },
  ];

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
      {routes.map(route => (
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
