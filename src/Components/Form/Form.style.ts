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
  position: relative;
`;

interface InputProps {
  isValid?: boolean;
}

export const Input = styled.input<InputProps>`
  outline: ${props => (props.isValid ? 'none' : '3px solid var(--red)')};
  border: none;
  border-radius: 5px;
  padding: 0.75rem 1rem;
  font-size: 1.05rem;
  flex: 1 0;
`;

export const ErrorMsg = styled.span<InputProps>`
  display: ${props => (props.isValid ? 'none' : 'block')};
  position: absolute;
  bottom: 0.5rem;
  font-size: 0.75rem;
  font-style: italic;
  color: var(--red);
`;

export const Button = styled(Btn)`
  border-radius: 5px;
  font-size: 1.05rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
`;
