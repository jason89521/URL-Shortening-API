import styled, { createGlobalStyle } from 'styled-components';
import breakpoints from 'breakpoints';

export const ResetStyle = createGlobalStyle`
  :root {
    --blue: hsl(180, 66%, 49%);
    --light-blue: hsl(180, 66%, 60%);
    --violet: hsl(257, 27%, 26%);
    --violet-2: hsl(257, 27%, 50%);
    --red: hsl(0, 87%, 67%);
    --gray: hsl(0, 0%, 75%);
    --light-violet: hsl(225, 33%, 95%);
    --gray-violet: hsl(257, 7%, 63%);
    --dark-blue: hsl(255, 11%, 22%);
    --dark-violet: hsl(260, 8%, 14%);

    --padding-bg: 12rem;

    @media only screen and (max-width:${breakpoints.largest}) {
      --padding-bg: 6rem;
    }

    @media only screen and (max-width:${breakpoints.large}) {
      --padding-bg: 3rem;
    }

    @media only screen and (max-width:${breakpoints.medium}) {
      --padding-bg: 1rem;
    }
  }

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    font-size: inherit;
  }

  html {
    font-size: 112.5%;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;

    @media only screen and (max-width:${breakpoints.large}) {
      font-size: 100%;
    }

    @media only screen and (max-width:${breakpoints.small}) {
      font-size: 62.5%;
    }

    @media only screen and (max-width:${breakpoints.smallest}) {
      font-size: 50%;
    }
  }
`;

export const Container = styled.div``;
