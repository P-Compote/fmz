import React from 'react';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';
import { TextBox } from '../pages/index';
import ContainerStyles from '../styles/ContainerStyles';
import EmbedYoutube from './EmbedYoutube';

export default function UbikEklektik() {
  const data = useStaticQuery(graphql`
    query {
      ubikEklektikLogo: file(
        relativePath: { eq: "ubikeklektik-logo-feher.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 70) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      ubikEklektikMain: file(
        relativePath: { eq: "FMZ-subpage-bigArtboard-ubikeklektik.png" }
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
            fluid={data.ubikEklektikLogo.childImageSharp.fluid}
            alt="ubikEklektik"
            style={{ width: 250, display: 'block', margin: '5rem auto' }}
          />
        </div>
        <h2>
          <em>
            „megkoronázva a nyarat, hogy eljöve közénk és leüle tüzünkhöz…”
            /Ubiciták – Törzskönyvények Könyve/
          </em>
        </h2>
        <TextBox>
          <div>
            <p>
              Az UbikEklektik budapesti fiatal kreativ kollektívák közösségi
              összművészeti fesztiválja. Szervezetünk struktúrája is erre épít,
              90 aktív önkéntesünk (művészek, zenészek, közösségfejlesztők), a
              mindenki véleményének helyet adó, kooperatív tanulás módszerével
              dolgozik. Célunk egy olyan alkotói közeg létrehozása, amely
              elősegíti a különböző művészeti ágak és kulturák együttműködését .
            </p>
          </div>
          <div>
            <p>
              A kreatív alkotóközösségek, mind egy-egy törzset képviselnek,
              saját történettel, szervezeti hálóval és művészeti programmal. A
              történet szerint a közösség az Együttállást kutatja évről évre.
            </p>
          </div>
        </TextBox>
        <h2>
          <strong>További információért keressen minket:</strong>
        </h2>
        <h2>
          <a href="https://ubikeklektik.com" target="_blank" rel="noreferrer">
            ubikeklektik.com
          </a>
        </h2>
        <EmbedYoutube videoId="Z5IcCoGnNzw" />
      </ContainerStyles>
      <div>
        <Img
          fluid={data.ubikEklektikMain.childImageSharp.fluid}
          alt="UbikEklektik"
        />
      </div>
    </>
  );
}
