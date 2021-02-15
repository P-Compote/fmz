import React from 'react';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';
import { TextBox } from '../pages/index';
import ContainerStyles from '../styles/ContainerStyles';
import EmbedYoutube from './EmbedYoutube';

export default function Mordai() {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "mordai_logo_fekete.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 70) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      main: file(relativePath: { eq: "FMZ-subpage-bigArtboard-mordai.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000, quality: 70) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  return (
    <>
      <ContainerStyles>
        <div>
          <Img
            fluid={data.logo.childImageSharp.fluid}
            alt="Mordái logo"
            style={{ width: 320, display: 'block', margin: '5rem auto' }}
          />
        </div>
        <h2>
          <em>„Lorem ipsum dolor sit amet, consectetur adipiscing elit.”</em>
        </h2>
        <TextBox>
          <div>
            <p>
              A MORDÁI a 60-as, 70-es évek kisérletező magyar népzenei vonulatok
              repertoárjából (Muzsikás Zenekar, Sebő együttes, stb.) táplálkozó
              folk rock zenekar.
            </p>
          </div>
          <div>
            <p>Hangvételében az útonállók sötét szellemiségét idézi meg.</p>
          </div>
        </TextBox>
        <h2>
          <strong>További információért keressen minket:</strong>
        </h2>
        <h2>
          <a href="mailto:" target="_blank" rel="noreferrer">
            IDE KELL EGY EMAIL VAGY WEBOLDAL
          </a>
        </h2>
        <EmbedYoutube videoId="" />
      </ContainerStyles>
      <div>
        <Img fluid={data.main.childImageSharp.fluid} alt="Mordái" />
      </div>
    </>
  );
}
