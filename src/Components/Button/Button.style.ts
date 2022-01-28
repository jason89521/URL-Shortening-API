import styled from 'styled-components';

export const Container = styled.button`
  cursor: pointer;
  color: #fff;
  text-transform: capitalize;
  font-weight: 700;
  border: none;
  outline: none;
  border-radius: 10rem;
  padding: 0.6rem 1.2rem;
  background-color:var(--blue);

  &:hover {
    background-color: var(--light-blue);
  }
`;
