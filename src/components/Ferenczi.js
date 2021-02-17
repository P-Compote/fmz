import React from 'react';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';
import { TextBox } from '../pages/index';
import ContainerStyles from '../styles/ContainerStyles';
import EmbedYoutube from './EmbedYoutube';

export default function Ferenczi() {
  const data = useStaticQuery(graphql`
    query {
      ferencziLogo: file(relativePath: { eq: "racka_copy.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 70) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      FerencziMain: file(
        relativePath: { eq: "FMZ-subpage-bigArtboard-ferenczi.png" }
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
            fluid={data.ferencziLogo.childImageSharp.fluid}
            alt="Ferenczi György és az 1ső pesti rackák logo"
            style={{ width: 320, display: 'block', margin: '5rem auto' }}
          />
        </div>
        <h4>
          <em>
            „A XXI. századi városi népzene és a hagyományos műfajok meglepő és
            egyben érdekes ötvözete.”
          </em>
        </h4>
        <TextBox>
          <div>
            <p>
              Ferenczi György és zenekara műsorában összeolvad a magyar kultúra,
              és a rock 'n' roll forradalom szeretete. Így fér össze a
              kalotaszegi hajnali Petőfi és Gérecz verseivel, illetve Hendrix
              zenéjével.
            </p>
            <p>
              Zenéjük a Rock n 'Roll, Soul, Blues, tradicionális folk és a
              zenekar saját stílusának meghatározhatatlan keveréke.
            </p>
          </div>
          <div>
            <p>
              A zenekar multi-instrumentalista zenészei többnyire akusztikus
              hangszereken játszanak. Bár tiszteletben tartják a hagyományokat,
              játékuk során gyakran adják át magukat a pillanat varázsának és
              születnek meg a rájuk olyan nagyon jellemző, semmilyen műfaji
              korlátok közé nem szorítható zenei kifejezések, melyet Gyuri
              egyedi hangzású, virtuóz harmonikajátéka tesz egyedülálló
              élménnyé!
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
        <Img
          fluid={data.FerencziMain.childImageSharp.fluid}
          alt="Ferenczi György és az 1ső pesti rackák"
        />
      </div>
    </>
  );
}
