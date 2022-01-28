import styled from 'styled-components';

import { default as Btn } from 'Components/Button';

export const Container = styled.header`
  padding: 1rem var(--padding-bg);
  padding-bottom: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
`;

export const Text = styled.div`
  flex: 0 0 40%;
`;

export const Hero = styled.img`
  transform: translateX(5rem);
`;

export const Heading = styled.h1`
  font-size: 3rem;
  font-weight: 700;
`;

export const Detail = styled.p`
  color: var(--gray-violet);
  margin-top: -1rem;
  margin-bottom: 2rem;
`;

export const Button = styled(Btn)`
  font-size: 1.05rem;
  padding: 0.7rem 1.7rem;
`;
