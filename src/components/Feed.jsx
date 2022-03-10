import { Alert, AlertIcon, AlertTitle, Spinner } from '@chakra-ui/react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useInfiniteQuery } from 'react-query';
import { Post } from '../components/Post';
import { getFeed } from '../services/posts';

export const Feed = () => {
  const {
    data: Posts,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
  } = useInfiniteQuery(
    'feed',
    ({ pageParam }) =>
      getFeed({
        pageParam,
      }),
    {
      getNextPageParam: (lastPage, pages) => {
        if (pages.length === lastPage.data.totalPages) {
          return undefined;
        }
        return pages.length + 1;
      },
    }
  );

  if (error)
    return (
      <Alert status="error">
        <AlertIcon />
        <AlertTitle mr={2}>{error.message}</AlertTitle>
      </Alert>
    );

  return (
    <>
      {!!Posts && (
        <InfiniteScroll
          dataLength={Posts.pages.length * 10}
          hasMore={hasNextPage}
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
      {isFetching && (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="cyan.400"
          size="xl"
        />
      )}
    </>
  );
};
