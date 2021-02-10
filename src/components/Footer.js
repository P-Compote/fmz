import React from 'react';
import styled from 'styled-components';

const FooterStyles = styled.footer`
  background-color: var(--black);
  color: var(--white);
  padding: 2rem 0;
  margin-top: 4rem;
  p {
    margin: 0;
  }
`;

export default function Footer() {
  return (
    <FooterStyles>
      <p className="center">&copy; Thinkaholists {new Date().getFullYear()}</p>
    </FooterStyles>
  );
}
