import React from 'react';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';
import { TextBox } from '../pages/index';
import ContainerStyles from '../styles/ContainerStyles';
import EmbedYoutube from './EmbedYoutube';

export default function ParnoGraszt() {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "kakastipo.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 70) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      main: file(relativePath: { eq: "FMZ-subpage-bigArtboard-betyars.png" }) {
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
            alt="Bohemian Betyars logo"
            style={{ width: 320, display: 'block', margin: '5rem auto' }}
          />
        </div>
        <h2>
          <em>„Lorem ipsum dolor sit amet, consectetur adipiscing elit.”</em>
        </h2>
        <TextBox>
          <div>
            <p>
              <strong>Bohém:</strong> rendezetlen életviszonyok közt könnyed és
              könnyelmű optimizmussal élő, a társadalmi formákkal nem nagyon
              törődő jó kedélyű ember.
            </p>
            <p>
              <strong>Betyár:</strong> a 18- 19. században a társadalomból
              kitaszított útonállót, később népi hőssé vált alakot mára fiatal,
              maga útját járó suhancot jelent.
            </p>
          </div>
          <div>
            <p>
              Egy valódi energiabomba zenekar, amely az elmúlt évek alatt már
              ezerszer megtáncoltatta a közönséget a Balti-tengertől az Atlanti
              óceánig. Legyen utcán, klubban vagy fesztiválon a Bohemian Betyars
              örömzenéje, magával ragadó ritmusai kizökkentenek a
              hétköznapokból, és beledobnak az önkívület mélyvizébe, pont úgy
              ahogy ezt kitervelték.
            </p>
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
        <Img fluid={data.main.childImageSharp.fluid} alt="Bohemian Betyars" />
      </div>
    </>
  );
}
