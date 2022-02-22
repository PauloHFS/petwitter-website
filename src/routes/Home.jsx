import { Fragment } from 'react';
import { Post } from '../components/Post';

export const Home = () => {
  const posts = [
    {
      imageUrl: 'https://bit.ly/dan-abramov',
      name: 'Niko Vira-lata',
      nickname: '@doguinhoniko_20',
      date: new Date(),
      body: "Name a show where the lead character is the worst character on the show I'll get Sabrina Spellman. Name a show where the lead character is the worst character on the show I'll get Sabrina Spellman. ",
    },
    {
      imageUrl: 'https://bit.ly/dan-abramov',
      name: 'Niko Vira-lata',
      nickname: '@doguinhoniko_20',
      date: new Date(),
      body: "Name a show where the lead character is the worst character on the show I'll get Sabrina Spellman. Name a show where the lead character is the worst character on the show I'll get Sabrina Spellman. ",
    },
  ];
  return (
    <Fragment>
      {posts.map((post, index) => (
        <Post {...post} key={index} />
      ))}
    </Fragment>
  );
};
