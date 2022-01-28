import styled from 'styled-components';

export const Container = styled.section`
  padding: 4rem var(--padding-bg);
  background-color: var(--light-violet);
`;

export const Heading = styled.h2`
  font-weight: 700;
  font-size: 2rem;
  text-transform: capitalize;
  text-align: center;
`;

export const Text = styled.p`
  color: var(--gray-violet);
  text-align: center;
  width: 50%;
  margin: 0 auto;
`;

export const Cards = styled.div`
  margin-top: 5rem;
  display: flex;
  gap: 1.5rem;
  height: 20rem;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 45%;
    z-index: 1;
    width: 100%;
    height: 8px;
    background-color: var(--blue);
  }

  & > *:nth-child(1) {
    align-self: flex-start;
  }

  & > *:nth-child(2) {
    align-self: center;
  }

  & > *:nth-child(3) {
    align-self: flex-end;
  }
`;

export const Card = styled.div`
  padding: 2rem 1.5rem;
  padding-top: 4rem;
  border-radius: 5px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;
  z-index: 2;

  h3 {
    font-size: 1.2rem;
    font-weight: 700;
  }

  p {
    color: var(--gray-violet);
    font-size: 0.8rem;
  }
`;

export const IconCircle = styled.div`
  padding: 1rem;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background-color: var(--violet);
  position: absolute;
  top: -2rem;

  img {
    width: 100%;
    height: 100%;
  }
`