import type { NextPage } from 'next';
import Head from 'next/head';
import Screen from '../components/screen';

const Home: NextPage = () => {
  return (
    <StyledWrapper>
      <Head>
        <title>iPhone 14 Clone - Dynamic Island - Live Score App Animation (Community)</title>
        <meta
          name='description'
          content='iPhone 14 Clone - Dynamic Island - Live Score App Animation (Community)'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Screen>
        <StatusBar />
      </Screen>
    </StyledWrapper>
  );
};

export default Home;

import styled from 'styled-components';
import StatusBar from '../components/status-bar';

const StyledWrapper = styled.div`
  display: grid;
  place-items: center;

  width: 100%;
  min-height: 100vh;
  background-color: black;
`;
