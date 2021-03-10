import { Container } from '@material-ui/core';
import React from 'react';
import HomeHeading from '../HomeHeading/HomeHeading';
import MediaCard from '../MediaCard/MediaCard';
import './Home.css'
const Home = () => {
  return (
    <div>
      <HomeHeading></HomeHeading>
      <Container className="card-area">
        <MediaCard></MediaCard>
        <MediaCard></MediaCard>
        <MediaCard></MediaCard>
      </Container>
    </div>
  );
};

export default Home;