import React from 'react';

import { ResetStyle, Container } from './App.style';
import Nav from 'Components/Nav';
import Header from 'Components/Header';
import Form from 'Components/Form';
import Links from 'Components/Links';
import Statistics from 'Components/Statistics';
import Boost from 'Components/Boost';
import Footer from 'Components/Footer';

const App = () => {
  return (
    <React.Fragment>
      <ResetStyle />
      <Container>
        <Nav />
        <Header />
        <Form />
        <Links />
        <Statistics />
        <Boost />
        <Footer />
      </Container>
    </React.Fragment>
  );
};

export default App;
