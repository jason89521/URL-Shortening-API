import styled from 'styled-components';

import { default as Btn} from 'Components/Button';
import backgroundImageBig from 'images/bg-boost-desktop.svg';

export const Container = styled.section`
  padding: 3rem 0;
  background-image: url(${backgroundImageBig}), linear-gradient(var(--violet), var(--violet));
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const Heading = styled.h2`
  color: #fff;
  font-size: 2rem;
  font-weight: 700;
`

export const Button = styled(Btn)`
  padding: 0.8rem 3rem;
  font-size: 1.1rem;
`