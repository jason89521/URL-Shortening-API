import styled from 'styled-components';

import bgShortenBig from 'images/bg-shorten-desktop.svg';
import { default as Btn } from 'Components/Button';

export const Container = styled.section`
  padding: 0 var(--padding-bg);
  background-image: linear-gradient(to bottom, #fff, #fff 50%, var(--light-violet) 50%);
`;

export const FormBox = styled.form`
  padding: 2rem 3rem;
  border-radius: 10px;
  background-image: url(${bgShortenBig}), linear-gradient(var(--violet), var(--violet));
  background-repeat: no-repeat;
  display: flex;
  gap: 1rem;
`;

export const Input = styled.input`
  border: none;
  outline: none;
  border-radius: 5px;
  padding: 0.75rem 1.25rem;
  font-size: 1.05rem;
  flex: 1 0;
`;

export const Button = styled(Btn)`
  border-radius: 5px;
  font-size: 1.05rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
`;
