import styled, { createGlobalStyle } from 'styled-components';

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
    --margin-bg: 12rem;
  }

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    font-size: 112.5%;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }
`;

export const Container = styled.div``;
