import { createGlobalStyle } from 'styled-components';
import breakpoint from '../utils/breakpoints';

import font from '../assets/fonts/Mediaan-Regular.otf';

const Typography = createGlobalStyle`
  @font-face {
    font-family: Mediaan;
    src: url(${font});
  }

  html {
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: var(--black);
    font-size: 10px;
  }

  h1,h2,h3,h4,h5,h6 {
    font-weight: normal;
    text-align: center;
  }

  h1 {
    font-size: 5rem;
    letter-spacing: 1px;
    font-weight: 600;
    margin:0;
    margin: 3rem 0;
  }

  h2 {
    font-weight: 600;
    font-size: 4rem;
    margin:0;
    margin-bottom: 3rem;
  }

  h3 {
    font-size: 2.2rem;
  }

  h4 {
    font-size: 2rem;
    margin-bottom: 5rem;
  }

  a {
    color: var(--black);
    text-decoration: none;
  }

  a[href^="mailto:"] {
    color: var(--blue);
    text-decoration: none;
  }

  a[href^="mailto:"]:hover {
    text-decoration: underline;
    text-decoration-color: var(--blue);
  }
  @media screen and ${breakpoint.device.md} {
    html{
      font-size: 8px;
    }
    h1 {
      font-size: 3.5rem;
      text-align: left;
    }
    h2 {
      font-size: 2.5rem;
      text-align: left;
    }
    h3 {
    font-size: 2rem;
    }
  }
`;

export default Typography;
