import styled from 'styled-components';

export const Container = styled.footer`
  padding: 4rem var(--padding-bg);
  background-color:var(--dark-violet);
  display: flex;
  align-items: flex-start;
  gap: 4rem;
`;

export const Brand  = styled.span`
  color: #fff;
  font-size: 2rem;
  margin-right: auto;
`

export const Infos = styled.div`
  display: flex;
  gap: 2rem;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  h4 {
    color: #fff;
    margin-bottom: 0.5rem;
  }

  span {
    cursor: pointer;
    color: var(--gray);
    font-size: 0.8rem;

    &:hover {
      color: var(--blue);
    }
  }
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    cursor: pointer;
    fill: #fff;

    &:hover {
      fill: var(--blue);
    }
  }
`;
