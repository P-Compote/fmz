import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import breakpoint from '../utils/breakpoints';
import svgLogo from '../assets/images/FMZ_logo.svg';
import { ThinkaholistFooter } from './ThinkaholistFooter';

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
      meBgaLogo: file(relativePath: { eq: "ME_BGA-removebg.png" }) {
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
          <img src={svgLogo} alt="FMZ logo" />
        </FooterLogo>
        <AllLogoContainer>
          <LogoContainer>
            <a
              href="https://ubikeklektik.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Img
                fluid={data.ubikTuraLogo.childImageSharp.fluid}
                alt="Ubiktúra logo"
              />
            </a>
          </LogoContainer>
          <LogoContainer>
            <a
              href="https://www.facebook.com/bohemianbetyars/posts/10158130601353823"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Img
                fluid={data.gallusLogo.childImageSharp.fluid}
                alt="Gallus Hirundo logo"
              />
            </a>
          </LogoContainer>
          <LogoContainer>
            <a
              href="https://bobajkabolcsi.hu"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Img
                fluid={data.bobajkaLogo.childImageSharp.fluid}
                alt="Bobájak Bölcsi logo"
              />
            </a>
          </LogoContainer>
          <LogoContainer>
            <a
              href="https://www.facebook.com/azvlm"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Img
                fluid={data.azvlmLogo.childImageSharp.fluid}
                alt="AZVLM logo"
              />
            </a>
          </LogoContainer>
          <LogoContainer>
            <a
              href="https://www.mma.hu"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Img fluid={data.mmaLogo.childImageSharp.fluid} alt="MMA logo" />
            </a>
          </LogoContainer>
          <LogoContainer>
            <a
              href="https://mtu.gov.hu"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Img fluid={data.mtuLogo.childImageSharp.fluid} alt="MTU logo" />
            </a>
          </LogoContainer>
          <LogoContainer>
            <a href="https://nka.hu" target="_blank" rel="noreferrer noopener">
              <Img fluid={data.nkaLogo.childImageSharp.fluid} alt="NKA logo" />
            </a>
          </LogoContainer>
          <LogoContainer>
            <a
              href="https://civil.info.hu/nea/kezdolap/bemutatkozas/index.html"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Img fluid={data.neaLogo.childImageSharp.fluid} alt="NEA logo" />
            </a>
          </LogoContainer>
          <LogoContainer>
            <a
              href="https://bgazrt.hu/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Img
                fluid={data.meBgaLogo.childImageSharp.fluid}
                alt="Miniszterelnökség és Bethlen Gábor Alapkezelő logo"
              />
            </a>
          </LogoContainer>
        </AllLogoContainer>
      </FooterStyles>
      <ThinkaholistFooter />
    </>
  );
}
