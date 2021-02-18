import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

const ThinkaholistsFooterStyles = styled.footer`
  background-color: var(--footer);
  color: var(--white);
  padding: 0.5rem 0;
  p {
    margin: 0;
    font-size: 1.2rem;
  }
  a {
    color: var(--white);
    font-size: 1.2rem;
  }
  a:hover {
    text-decoration: underline;
  }
`;

const FooterStyles = styled.div`
  border-top: 5px solid var(--black);
  padding: 5rem 0;
  display: grid;
  place-items: center;
  margin-top: 4rem;
`;

export default function Footer() {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "FMZ_logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 350) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  `);

  return (
    <>
      <FooterStyles>
        <p>FMZ FOOTER LOGÓKKAL</p>
      </FooterStyles>
      <ThinkaholistsFooter />
    </>
  );
}

const ThinkaholistsFooter = () => (
  <ThinkaholistsFooterStyles>
    <p className="center">
      Készült{' '}
      <a href="https://gatsbyjs.com" target="_blank" rel="noreferrer">
        Gatsby
      </a>
      -vel, a{' '}
      <a href="https://thinkaholists.com" target="_blank" rel="noreferrer">
        Thinkaholists
      </a>{' '}
      csapata által.
    </p>
  </ThinkaholistsFooterStyles>
);
