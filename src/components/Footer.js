import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import breakpoint from '../utils/breakpoints';

const ThinkaholistsFooterStyles = styled.footer`
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

const FooterStyles = styled.div`
  border-top: 5px solid var(--black);
  background-color: #fff;
  padding: 5rem 0 0 0;
  display: grid;
  margin-top: 8rem;
  @media screen and ${breakpoint.device.md} {
    padding: 2rem 0 0 0;
  } ;
`;

const FooterLogo = styled.div`
  width: 320px;
  margin-top: -10rem;
  z-index: 1000;
  background-color: var(--white);
  margin-right: 3rem;
  margin-left: 3rem;
  justify-self: center;
  @media screen and ${breakpoint.device.md} {
    width: 200px;
    margin-top: -6rem;
  } ;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const AllLogoContainer = styled.div`
  margin: 4rem 0;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(90px, 1fr));
  padding: 3rem;
  @media screen and ${breakpoint.device.md} {
    margin: 2rem 0;
  } ;
`;

export default function Footer() {
  const data = useStaticQuery(graphql`
    query {
      fmzLogo: file(relativePath: { eq: "FMZ_logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 350) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      ubikTuraLogo: file(relativePath: { eq: "ubiktura-logo-footer.png" }) {
        childImageSharp {
          fluid(maxWidth: 350) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      gallusLogo: file(
        relativePath: { eq: "gallus_hirundo_full_logo_fekete_cropped.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 350) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      bobajkaLogo: file(relativePath: { eq: "bobajka-logo.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 350) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      azvlmLogo: file(relativePath: { eq: "AZVLM_logo_fekete.png" }) {
        childImageSharp {
          fluid(maxWidth: 350) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      mmaLogo: file(relativePath: { eq: "MMA-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 350) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      mtuLogo: file(relativePath: { eq: "mtu-logo.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 350) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      nkaLogo: file(relativePath: { eq: "nka-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 350) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      neaLogo: file(relativePath: { eq: "nea-logo.jpg" }) {
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
        <FooterLogo>
          <Img fluid={data.fmzLogo.childImageSharp.fluid} alt="FMZ logo" />
        </FooterLogo>
        <AllLogoContainer>
          <LogoContainer>
            <Img
              fluid={data.ubikTuraLogo.childImageSharp.fluid}
              alt="FMZ logo"
            />
          </LogoContainer>
          <LogoContainer>
            <Img
              fluid={data.gallusLogo.childImageSharp.fluid}
              alt="Gallus Hirundo logo"
            />
          </LogoContainer>
          <LogoContainer>
            <Img
              fluid={data.bobajkaLogo.childImageSharp.fluid}
              alt="FMZ logo"
            />
          </LogoContainer>
          <LogoContainer>
            <Img
              fluid={data.azvlmLogo.childImageSharp.fluid}
              alt="AZVLM logo"
            />
          </LogoContainer>
          <LogoContainer>
            <Img fluid={data.mmaLogo.childImageSharp.fluid} alt="MMA logo" />
          </LogoContainer>
          <LogoContainer>
            <Img fluid={data.mtuLogo.childImageSharp.fluid} alt="MTU logo" />
          </LogoContainer>
          <LogoContainer>
            <Img fluid={data.nkaLogo.childImageSharp.fluid} alt="NKA logo" />
          </LogoContainer>
          <LogoContainer>
            <Img fluid={data.neaLogo.childImageSharp.fluid} alt="NEA logo" />
          </LogoContainer>
        </AllLogoContainer>
      </FooterStyles>
      <ThinkaholistsFooter />
    </>
  );
}

const ThinkaholistsFooter = () => (
  <ThinkaholistsFooterStyles>
    <p className="center">
      Ezt az oldalt a{' '}
      <a href="https://thinkaholists.com" target="_blank" rel="noreferrer">
        Thinkaholists
      </a>{' '}
      csapata készítette{' '}
      <a href="https://gatsbyjs.com" target="_blank" rel="noreferrer">
        Gatsby
      </a>
      -vel 💜{' '}
    </p>
  </ThinkaholistsFooterStyles>
);
