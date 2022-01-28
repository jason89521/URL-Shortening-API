import styled from 'styled-components';

import { default as Btn } from 'Components/Button';

export const Container = styled.ul`
  list-style: none;
  background-color: var(--light-violet);
  padding: 1rem var(--padding-bg);
`;

export const Item = styled.li`
  border-radius: 5px;
  background-color: #fff;
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

export const OriginLink = styled.span`
  color: #000;
  margin-right: auto;
`;

export const NewLink = styled.span`
  color: hsl(var(--blue));
`;

export const Button = styled(Btn)`
  border-radius: 5px;
`;
