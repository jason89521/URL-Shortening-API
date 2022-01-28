import React from 'react';

import { Brand, Container, Link, List, LoginButton, SignUpButton} from './Nav.style';

const Nav = () => {
  return (
    <Container>
      <Brand href="#">Shortly</Brand>
      <List>
        <Link href="#">Features</Link>
        <Link href="#">Pricing</Link>
        <Link href="#">Resources</Link>
        <LoginButton>login</LoginButton>
        <SignUpButton>sign up</SignUpButton>
      </List>
    </Container>
  );
};

export default Nav;
