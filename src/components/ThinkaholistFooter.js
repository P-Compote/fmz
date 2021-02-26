import React from 'react';
import styled from 'styled-components';

const ThinkaholistFooterStyles = styled.footer`
  background-color: var(--footer);
  color: var(--white);
  padding: 1.5rem 3rem;
  text-align: center;
  p {
    margin: 0;
    font-size: 1.5rem;
  }
  a {
    color: var(--white);
    text-decoration: underline;
    font-size: 1.4rem;
    padding: 0 3px;
  }
  a:hover {
    text-decoration: none;
    background-color: var(--yellow);
    border-radius: 4px;
    padding: 0 3px;
    color: var(--black);
  }
  a[href*='gatsby']:hover {
    background-color: rebeccapurple;
    color: var(--white);
  }
`;

export const ThinkaholistFooter = () => (
  <ThinkaholistFooterStyles>
    <p className="center">
      Ezt az oldalt a{' '}
      <a href="https://thinkaholist.com" target="_blank" rel="noreferrer">
        Thinkaholist
      </a>{' '}
      csapata készítette{' '}
      <a href="https://gatsbyjs.com" target="_blank" rel="noreferrer">
        Gatsby
      </a>
      -vel 💜{' '}
    </p>
  </ThinkaholistFooterStyles>
);
