import React from 'react';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';
import { TextBox } from '../pages/index';
import ContainerStyles from '../styles/ContainerStyles';
import EmbedYoutube from './EmbedYoutube';

export default function Digital() {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "bobajka-logo.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 70) {
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
            alt="Bobájka bölcsi logo"
            style={{ width: 320, display: 'block', margin: '5rem auto' }}
          />
        </div>
        <TextBox>
          <div>
            <p>
              A foglalkozások lényege, hogy a résztvevők tudást szerezzenek az
              ének, az improvizáció, a színjátszás, az írás és a digitális
              zeneszerkesztés területén. Ahhoz, hogy elkészüljön egy dal, nem
              kell semmi más, csak egy digitális eszköz és némi kreativitás. Az
              informális digitális oktatási módszer célja, hogy az egy vagy akár
              több alkalmas foglalkozások során egy közös dalt hozzunk létre. A
              játékos módszerek segítségével az alkotói és kreatív energiák
              könnyen kiszabadulnak illetve, azok eredményét könnyen meg lehet
              örökíteni.
            </p>
          </div>
          <div>
            <p>
              A dalíró és szerkesztő fázisokban megtanulunk szöveget írni és
              értelmezni; zenei és énekdallamot komponálni; ritmus képletet
              alkotni; hang és egyéb felvételeket készíteni; album borítót
              tervezni és sort kerítünk egyéb, igényeknek megfelelő digitális
              szoftverhasználati technikák elsajátítására.
            </p>
            <p>
              A kurzus végén akár a kicsik, akár a nagyok képesek lesznek egy
              saját zenei szerzemény megálmodására, megírására és annak
              számítógépes zeneszerkesztő szoftverben vagy digitális eszközön
              való felvételére.
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
    </>
  );
}
