import React from 'react';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';
import { TextBox } from '../pages/index';
import ContainerStyles from '../styles/ContainerStyles';
import EmbedFacebook from './EmbedFacebook';
import LogoContainer from '../styles/LogoContainer';

export default function UbikEklektik() {
  const data = useStaticQuery(graphql`
    query {
      ubikEklektikLogo: file(
        relativePath: { eq: "UBIKEKLEKTIK_logo_black.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 70) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      ubikEklektikMain: file(
        relativePath: { eq: "FMZ-subpage-big-javArtboard-2.png" }
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
            fluid={data.ubikEklektikLogo.childImageSharp.fluid}
            alt="ubikEklektik"
          />
        </LogoContainer>
        <h3>
          <em>
            „megkoronázva a nyarat, hogy eljöve közénk és leüle tüzünkhöz…”
            /Ubiciták – Törzskönyvények Könyve/
          </em>
        </h3>
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
        <h3>
          <strong>További információért keressen minket:</strong>
        </h3>
        <h3>
          <a href="https://ubikeklektik.com" target="_blank" rel="noreferrer">
            ubikeklektik.com
          </a>
        </h3>
        <EmbedFacebook videoId="733726573631699" fbPage="ubikeklektik" />
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
