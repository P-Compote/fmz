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
        <LogoContainer>
          <Img
            fluid={data.logo.childImageSharp.fluid}
            alt="Parno Graszt logo"
          />
        </LogoContainer>
        <h4>
          <em>
            “Nem csak “még egy cigányzenekar”: ők a cigányzene adatközlői."
          </em>
        </h4>
        <TextBox>
          <div>
            <p>
              Az egyik legeredetibb, legnépszerűbb tradicionális cigány zenét
              játszó zenekar, akik koncertjeiken a semmihez sem fogható
              dinamikus előadásmódjukkal, a színpadról leáramló energiájukkal
              jellemzően szinte „felrobbantják a nézőteret”.
            </p>
            <p>
              Bejárták szinte az egész világot, koncerteztek Európa szinte
              összes, Ázsia több országában, többször az USA-ban és Mexikóban.
            </p>
          </div>
          <div>
            <p>
              A 9 fős zenekar, amelynek tagjai egy családot alkotnak - hiszen
              szegről-végről mindenki mindenkinek rokona - alapvetően autentikus
              cigány zenét játszik, de számtalan népszerű saját szerzeményük,
              illetve egyedi feldolgozásaik is vannak (Quimby, AC/DC, stb.
              dalok).
            </p>
            <p>
              A zenekar neve cigányul fehér lovat jelent, ami a tisztaság és a
              szabadság jelképe. Ezt a betöretlen, vad energiát viszik
              színpadra, miközben hűek maradnak ahhoz a szellemiséghez és
              kultúrához, amiben felnőttek.
            </p>
          </div>
        </TextBox>
        <Social
          web="https://www.parnograszt.hu/"
          instagram="https://www.instagram.com/parnograszt/"
          spotify="https://open.spotify.com/artist/5hBCfYFEDK8otrksMYuzoL?si=MAC7id60RzWxYXC7JDpO4A"
          facebook="https://www.facebook.com/parnograszt"
        />
        <EmbedYoutube videoId="5wXLMzUQ7WE" />
      </ContainerStyles>
      <div>
        <Img fluid={data.main.childImageSharp.fluid} alt="Parno Graszt" />
      </div>
    </>
  );
}
