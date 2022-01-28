import React, { useEffect, useState } from 'react';

import { ResetStyle, Container } from './App.style';
import Nav from 'Components/Nav';
import Header from 'Components/Header';
import Form from 'Components/Form';
import Links from 'Components/Links';
import Statistics from 'Components/Statistics';
import Boost from 'Components/Boost';
import Footer from 'Components/Footer';

interface LinkItem {
  original: string;
  shorten: string;
}

const dataString = localStorage.getItem('linkItems');
const data: LinkItem[] = dataString ? JSON.parse(dataString) : [];

const App = () => {
  const [linkItems, setLinkItems] = useState(data);

  useEffect(() => {
    localStorage.setItem('linkItems', JSON.stringify(linkItems));
  }, [linkItems]);

  const onGetResponse = (original: string, shorten: string) => {
    const newLinkItem = { original, shorten };
    setLinkItems([...linkItems, newLinkItem]);
  };

  return (
    <React.Fragment>
      <ResetStyle />
      <Container>
        <Nav />
        <Header />
        <Form onGetResponse={onGetResponse} />
        <Links />
        <Statistics />
        <Boost />
        <Footer />
      </Container>
    </React.Fragment>
  );
};

export default App;
