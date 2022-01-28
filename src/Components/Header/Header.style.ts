import styled from 'styled-components';
import breakpoints from 'breakpoints';
import { default as Btn } from 'Components/Button';

export const Container = styled.header`
  padding: 1rem var(--padding-bg);
  padding-bottom: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;

  @media only screen and (max-width: ${breakpoints.medium}) {
    flex-direction: column;
    gap: 2rem;
  }
`;

export const Text = styled.div`
  flex: 0 0 40%;

  @media only screen and (max-width: ${breakpoints.medium}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;

    * {
      text-align: center;
    }
  }
`;

export const Heading = styled.h1`
  font-size: 3rem;
  font-weight: 700;
`;

export const Detail = styled.p`
  color: var(--gray-violet);
  margin-top: -1rem;
  margin-bottom: 2rem;

  @media only screen and (max-width: ${breakpoints.medium}) {
    margin: 0;
  }
`;

export const Button = styled(Btn)`
  font-size: 1.05rem;
  padding: 0.7rem 1.7rem;
`;

export const Hero = styled.img`
  transform: translateX(5rem);

  @media only screen and (max-width: ${breakpoints.medium}) {
    order: -1;
    height: 35vh;
  }

  @media only screen and (max-width: ${breakpoints.small}) {
  }
`;
