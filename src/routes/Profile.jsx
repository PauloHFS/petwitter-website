import {
  Avatar,
  Box,
  Button,
  CircularProgress,
  Flex,
  HStack,
  Image,
  Text,
} from '@chakra-ui/react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useInfiniteQuery, useQuery } from 'react-query';
import { useLocation, useParams } from 'react-router-dom';
import TimeAgo from 'react-timeago';
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter';
import ptBrStrings from 'react-timeago/lib/language-strings/pt-br';
import { Post } from '../components/Post';
import { getFromStorage } from '../services/auth';
import { getUserPosts } from '../services/posts';
import { getUserInfo } from '../services/users';

export const Profile = () => {
  const location = useLocation();
  const { userId } = useParams();

  const formatter = buildFormatter(ptBrStrings);

  const { data, isLoading, isError } = useQuery('userInfo', () =>
    getUserInfo({
      userId:
        location.pathname === '/profile' ? getFromStorage('user').id : userId,
    })
  );

  const {
    data: Posts,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching: postsIsFetching,
  } = useInfiniteQuery(
    'userFeed',
    ({ pageParams }) =>
      getUserPosts({
        user_id:
          location.pathname === '/profile' ? getFromStorage('user').id : userId,
        page: pageParams,
      }),
    {
      getNextPageParam: (lastPage, pages) => lastPage.pageParams + 1,
    }
  );

  /* useEffect(() => {
    if (!!Posts) {
      console.log(
        Posts.pages
          .map(posts => posts.data.posts.map(post_data => post_data))
          .reduce((acc, arr) => [...acc, ...arr], [])
      );
    }
  }, [Posts]); */

  if (isLoading)
    return <CircularProgress isIndeterminate value={30} size="120px" />;

  if (isError) return <h1>Error ao acessar usuário</h1>;

  return (
    <Flex maxW={['360', '680']} flexDir="column">
      <Image maxH={['100', '222']} width="100%" src="/images/headerimage.png" />
      <Flex alignItems="center" justifyContent="space-between">
        <Avatar mt="-4" ml="4" size="lg" name={data.data.user.name} />
        <Button
          mt="4"
          mr="4"
          variant="outline"
          color="cyan.400"
          borderColor="cyan.400"
          fontSize="12px"
          lineHeight="24px"
          fontWeight="400"
          px="2"
        >
          Edit profile
        </Button>
      </Flex>
      <Flex flexDir="column" m="4">
        <Text
          as="h1"
          fontStyle="normal"
          fontWeight="bold"
          fontSize="22"
          lineHeight="30px"
        >
          {data.data.user.name}
        </Text>
        <Text fontSize="16" lineHeight="22px" color="#687684">
          {`@${data.data.user.username}`}
        </Text>
        <Text my="12px">Front-end developer at @otterwise</Text>
        <HStack>
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.75 4.75C4.75 5.30225 4.30225 5.75 3.75 5.75C3.19775 5.75 2.75 5.30225 2.75 4.75C2.75 4.19775 3.19775 3.75 3.75 3.75C4.30225 3.75 4.75 4.19775 4.75 4.75Z"
              fill="#687684"
            />
            <path
              d="M3.75 9C4.30225 9 4.75 8.55225 4.75 8C4.75 7.44775 4.30225 7 3.75 7C3.19775 7 2.75 7.44775 2.75 8C2.75 8.55225 3.19775 9 3.75 9Z"
              fill="#687684"
            />
            <path
              d="M4.75 11C4.75 11.5522 4.30225 12 3.75 12C3.19775 12 2.75 11.5522 2.75 11C2.75 10.4478 3.19775 10 3.75 10C4.30225 10 4.75 10.4478 4.75 11Z"
              fill="#687684"
            />
            <path
              d="M7.25 5.75C7.80225 5.75 8.25 5.30225 8.25 4.75C8.25 4.19775 7.80225 3.75 7.25 3.75C6.69775 3.75 6.25 4.19775 6.25 4.75C6.25 5.30225 6.69775 5.75 7.25 5.75Z"
              fill="#687684"
            />
            <path
              d="M8.25 8C8.25 8.55225 7.80225 9 7.25 9C6.69775 9 6.25 8.55225 6.25 8C6.25 7.44775 6.69775 7 7.25 7C7.80225 7 8.25 7.44775 8.25 8Z"
              fill="#687684"
            />
            <path
              d="M7.25 12C7.80225 12 8.25 11.5522 8.25 11C8.25 10.4478 7.80225 10 7.25 10C6.69775 10 6.25 10.4478 6.25 11C6.25 11.5522 6.69775 12 7.25 12Z"
              fill="#687684"
            />
            <path
              d="M11.75 4.75C11.75 5.30225 11.3022 5.75 10.75 5.75C10.1978 5.75 9.75 5.30225 9.75 4.75C9.75 4.19775 10.1978 3.75 10.75 3.75C11.3022 3.75 11.75 4.19775 11.75 4.75Z"
              fill="#687684"
            />
            <path
              d="M10.75 9C11.3022 9 11.75 8.55225 11.75 8C11.75 7.44775 11.3022 7 10.75 7C10.1978 7 9.75 7.44775 9.75 8C9.75 8.55225 10.1978 9 10.75 9Z"
              fill="#687684"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2 0C0.895508 0 0 0.895386 0 2V12.5C0 13.6046 0.895508 14.5 2 14.5H12.5C13.6045 14.5 14.5 13.6046 14.5 12.5V2C14.5 0.895386 13.6045 0 12.5 0H2ZM12.5 2.5H2C1.79883 2.5 1.61572 2.57947 1.48096 2.70874C1.33838 2.84521 1.25 3.03723 1.25 3.25V12.5C1.25 12.9142 1.58594 13.25 2 13.25H12.5C12.9141 13.25 13.25 12.9142 13.25 12.5V3.25C13.25 2.83582 12.9141 2.5 12.5 2.5Z"
              fill="#687684"
            />
          </svg>

          <Text
            color="#687684;
"
          >
            <TimeAgo
              date={new Date(data.data.user.createAt)}
              formatter={formatter}
            />
          </Text>
        </HStack>
      </Flex>
      <HStack px="4" boxShadow="md">
        <Box
          px="2"
          pb="1"
          borderBottom="solid"
          borderBottomWidth="1"
          borderBottomColor="cyan.400"
        >
          <Text>Petposts</Text>
        </Box>
      </HStack>
      {postsIsFetching && (
        <CircularProgress isIndeterminate value={30} size="120px" />
      )}
      {error && <h1>Não foi possivel carregars os posts</h1>}
      {!!Posts && (
        <InfiniteScroll
          dataLength={Posts.pages.length * 100}
          hasMore={Posts.pages[0].data.totalPages * 10 > Posts.pages.length}
          next={fetchNextPage}
        >
          {Posts.pages
            .map(posts => posts.data.posts.map(post_data => post_data))
            .reduce((acc, arr) => [...acc, ...arr], [])
            .map(post_data => (
              <Post
                key={post_data.id}
                user={post_data.user}
                text={post_data.text}
                createAt={post_data.createAt}
              />
            ))}
        </InfiniteScroll>
      )}
    </Flex>
  );
};
