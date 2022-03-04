import { Button, Spinner } from '@chakra-ui/react';
import { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { useInfiniteQuery } from 'react-query';
import { Post } from '../components/Post';
import { getFeed } from '../services/posts';

export const Home = () => {
  const [page, setPage] = useState(1);

  const { data, isLoading, fetchNextPage, hasNextPage } = useInfiniteQuery(
    'feed',
    getFeed,
    {
      getNextPageParam: lastPage => {
        setPage(page + 1);
        return page + 1;
      },
    }
  );

  if (isLoading)
    return (
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="cyan.400"
        size="xl"
      />
    );

  /* if (isError)
    return (
      <Alert status="error">
        <AlertIcon />
        <AlertTitle mr={2}>{error.message}</AlertTitle>
      </Alert>
    ); */

  return (
    <InfiniteScroll hasMore={hasNextPage} loadMore={fetchNextPage}>
      {data.pages.map(post_data => (
        <Post key={post_data.id} post_data={post_data} />
      ))}
      <Button
        onClick={() => {
          setPage(page + 1);
        }}
      >
        load more
      </Button>
    </InfiniteScroll>
  );
};
