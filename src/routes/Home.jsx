import { Alert, AlertIcon, AlertTitle, Spinner } from '@chakra-ui/react';
import { Fragment } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { Post } from '../components/Post';
import { getFeed } from '../services/posts';

export const Home = () => {
  const { isLoading, isError, data, error } = useQuery('feed', getFeed);

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

  if (isError)
    return (
      <Alert status="error">
        <AlertIcon />
        <AlertTitle mr={2}>{error.message}</AlertTitle>
      </Alert>
    );

  return (
    <Fragment>
      {data.data.map(post_data => (
        <Post key={post_data.id} post_data={post_data} />
      ))}
    </Fragment>
  );
};
