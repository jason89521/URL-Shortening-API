import React from 'react';

import { Container, FormBox, Input, Button } from './Form.style';

const Form = () => {
  return (
    <Container>
      <FormBox>
        <Input placeholder="Shorten a link here..." />
        <Button>shorten it!</Button>
      </FormBox>
    </Container>
  );
};

export default Form;
