import React, { useState } from 'react';
import axios from 'axios';

import { Container, FormBox, Input, ErrorMsg, Button } from './Form.style';
import shortenApi from 'shortenApi';

type ERROR_TYPE = 2 | 3 | 4 | 5 | 6;

const ERROR_MSG = {
  2: 'Invalid URL',
  3: 'Rate limit exceeded. Wait a second and try again',
  4: 'IP-address has been blocked',
  5: 'shrtcode code (slug) already taken/in use',
  6: 'Unknown error',
};

interface FormProps {
  onGetResponse: (original: string, shorten:string) => void;
}

const Form = ({onGetResponse}: FormProps) => {
  const [value, setValue] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const onInputChange: React.ChangeEventHandler<HTMLInputElement> = event => {
    setValue(event.target.value);
    setIsValid(true);
  };

  const onSubmit: React.FormEventHandler = async event => {
    event.preventDefault();
    if (!/\S/.test(value)) {
      setIsValid(false);
      setErrorMessage('Please add a link');
      return;
    }

    try {
      const response = await shortenApi.get('/shorten', { params: { url: value } });
      const result = response.data.result;
      onGetResponse(result.original_link,  result.full_short_link);
    } catch (error) {
      setIsValid(false);
      if (axios.isAxiosError(error)) {
        const errorCode: ERROR_TYPE = error.response?.data.error_code;
        setErrorMessage(ERROR_MSG[errorCode]);
      }
    }
  };

  return (
    <Container>
      <FormBox onSubmit={onSubmit}>
        <Input
          isValid={isValid}
          value={value}
          placeholder="Shorten a link here..."
          onChange={onInputChange}
        />
        <ErrorMsg isValid={isValid}>{errorMessage}</ErrorMsg>
        <Button >shorten it!</Button>
      </FormBox>
    </Container>
  );
};

export default Form;
