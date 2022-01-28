import styled from 'styled-components';
import { default as Btn } from 'Components/Button';
import breakpoints from 'breakpoints';

export const Container = styled.nav`
  padding: 1.5rem var(--padding-bg);
  display: flex;
  align-items: center;
  gap: 3rem;

  @media only screen and (max-width: ${breakpoints.smallest}) {
    justify-content: space-between;
    flex-wrap: wrap;
  }
`;

export const List = styled.div`
  flex: 1 0;
  display: flex;
  align-items: center;
  gap: 1.5rem;

  @media only screen and (max-width: ${breakpoints.smallest}) {
    flex: 0 0 100%;
  }
`;

export const Brand = styled.a`
  color: #000;
  font-weight: 700;
  font-size: 1.75rem;
  text-decoration: none;
`;

export const Link = styled.a`
  cursor: pointer;
  font-weight: 700;
  font-size: 0.75rem;
  text-transform: capitalize;
  color: var(--gray-violet);
  text-decoration: none;

  &:hover {
    color: #000;
  }
`;

export const LoginButton = styled(Link)`
  margin-left: auto;
`;

export const SignUpButton = styled(Btn)`
  font-size: 0.75rem;
`;
