import Button from 'Components/Button';
import React from 'react';

import { Brand, Container, Link, List, LoginButton } from './Nav.style';

const Nav = () => {
  return (
    <Container>
      <Brand href="#">Shortly</Brand>
      <List>
        <Link href="#">Features</Link>
        <Link href="#">Pricing</Link>
        <Link href="#">Resources</Link>
        <LoginButton>login</LoginButton>
        <Button>sign up</Button>
      </List>
    </Container>
  );
};

export default Nav;
