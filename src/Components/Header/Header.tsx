import React from 'react';

import HeroImage from 'images/illustration-working.svg';
import { Container, Text, Hero, Heading, Detail, Button } from './Header.style';

const Header = () => {
  return (
    <Container>
      <Text>
        <Heading>More than just shorter links</Heading>
        <Detail>
          Build your brand's recognition and get detailed insights on how your links are performing.
        </Detail>
        <Button>Get started</Button>
      </Text>
      <Hero src={HeroImage} alt="Hero" />
    </Container>
  );
};

export default Header;
