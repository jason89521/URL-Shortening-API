import styled from 'styled-components';

import breakpoints from 'breakpoints';
import { default as Btn } from 'Components/Button';
import backgroundImageBig from 'images/bg-boost-desktop.svg';
import backgroundImageSmall from 'images/bg-boost-mobile.svg';

export const Container = styled.section`
  padding: 3rem 0;
  background-image: url(${backgroundImageBig}), linear-gradient(var(--violet), var(--violet));
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  @media only screen and (max-width: ${breakpoints.smallest}) {
    background-image: url(${backgroundImageSmall}), linear-gradient(var(--violet), var(--violet));
  }
`;

export const Heading = styled.h2`
  color: #fff;
  font-size: 2rem;
  font-weight: 700;
`;

export const Button = styled(Btn)`
  padding: 0.8rem 3rem;
  font-size: 1.1rem;
`;
