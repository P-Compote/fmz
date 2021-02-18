import React from 'react';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';
import { TextBox } from '../pages/index';
import ContainerStyles from '../styles/ContainerStyles';
import EmbedYoutube from './EmbedYoutube';
import Social from './SocialLinks';
import LogoContainer from '../styles/LogoContainer';

export default function ParnoGraszt() {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "betyars_logo.png" }) {
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
        <LogoContainer>
          <Img
            fluid={data.logo.childImageSharp.fluid}
            alt="Bohemian Betyars logo"
          />
        </LogoContainer>
        <h4>
          <em>„Radikális, friss, mezítlábas mulatozás”</em>
        </h4>
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
        <Social
          web="https://bohemianbetyars.hu/"
          youtube="https://www.youtube.com/user/BohemianBetyars?sub_confirmation=1"
          instagram="https://www.instagram.com/bohemianbetyars/"
          spotify="https://open.spotify.com/artist/2ezYPSKWBfnFTobN9puCow?si=cM9JHxocSaepvPgG_PFg1A"
          facebook="https://www.facebook.com/bohemianbetyars"
        />
        <EmbedYoutube videoId="1Hok9k0xkMA" />
      </ContainerStyles>
      <div>
        <Img fluid={data.main.childImageSharp.fluid} alt="Bohemian Betyars" />
      </div>
    </>
  );
}
