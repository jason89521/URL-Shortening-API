import React from 'react';

import { Container, Item, OriginLink, NewLink, Button } from './Links.style';

const Links = () => {
  return (
    <Container>
      <Item>
        <OriginLink>https://www.frontendmentor.io</OriginLink>
        <NewLink>https://rel.ink/k4iky1</NewLink>
        <Button>Copy</Button>
      </Item>
    </Container>
  );
};

export default Links;
