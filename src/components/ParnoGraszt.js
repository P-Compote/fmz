import React from 'react';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';
import { TextBox } from '../pages/index';
import ContainerStyles from '../styles/ContainerStyles';
import EmbedYoutube from './EmbedYoutube';

export default function ParnoGraszt() {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "parnograszt.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 70) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      main: file(
        relativePath: { eq: "FMZ-subpage-bigArtboard-parnograszt.png" }
      ) {
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
            alt="Parno Graszt logo"
            style={{ width: 320, display: 'block', margin: '5rem auto' }}
          />
        </div>
        <h4>
          <em>„Lorem ipsum dolor sit amet, consectetur adipiscing elit.”</em>
        </h4>
        <TextBox>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Egestas sed tempus urna et. Suspendisse interdum consectetur
              libero id faucibus nisl tincidunt eget nullam. Tortor at auctor
              urna nunc id cursus metus.
            </p>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              mollis aliquam ut porttitor leo a diam. Ornare arcu dui vivamus
              arcu felis bibendum. Morbi non arcu risus quis varius.
            </p>
          </div>
        </TextBox>
        <h3>
          <strong>További információért keressen minket:</strong>
        </h3>
        <h3>
          <a href="mailto:" target="_blank" rel="noreferrer">
            IDE KELL EGY EMAIL VAGY WEBOLDAL
          </a>
        </h3>
        <EmbedYoutube videoId="" />
      </ContainerStyles>
      <div>
        <Img fluid={data.main.childImageSharp.fluid} alt="Parno Graszt" />
      </div>
    </>
  );
}
