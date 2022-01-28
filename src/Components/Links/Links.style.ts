import styled from 'styled-components';

import breakpoints from 'breakpoints';
import { default as Btn } from 'Components/Button';

export const Container = styled.ul`
  list-style: none;
  background-color: var(--light-violet);
  padding: 1rem var(--padding-bg);
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Item = styled.li`
  border-radius: 5px;
  background-color: #fff;
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;

  @media only screen and (max-width: ${breakpoints.smallest}) {
    flex-direction: column;
    align-items: stretch;
    gap: 1rem;
  }
`;

export const OriginLink = styled.span`
  color: #000;
  margin-right: auto;

  @media only screen and (max-width: ${breakpoints.smallest}) {
    margin: 0;

    &::after {
      content: "";
      margin-top: 1rem;
      display: block;
      height: 1px;
      width: 100%;
      background-color: var(--gray);
    }
  }
`;

export const NewLink = styled.span`
  color: var(--blue);
`;

interface ButtonProps {
  isCopied: boolean;
}

export const Button = styled(Btn)<ButtonProps>`
  flex: 0 0 6rem;
  border-radius: 5px;
  background-color: ${props => (props.isCopied ? 'var(--violet)' : '')};

  &:hover {
    background-color: ${props => (props.isCopied ? 'var(--violet-2)' : '')};
  }

  @media only screen and (max-width: ${breakpoints.smallest}) {
    flex: 0 0 0;
    padding: 1rem;
  }
`;
