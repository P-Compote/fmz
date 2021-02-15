import React from 'react';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';
import { TextBox } from '../pages/index';
import ContainerStyles from '../styles/ContainerStyles';
import EmbedYoutube from './EmbedYoutube';

export default function Kozossegi() {
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
              Az egyesületünk gondozásában megjelenő zenekarok mind a
              kárpát-medencei néphagyományokat dolgozzák fel a mai fiatalság
              számára befogadható stílusokban. A zenekarok tagjai saját dalaikon
              kívül közösségi népdalfeldolgozás műhelymunkákat tartanak a helyi
              lakosok és a rendezvényeink látogatóinak bevonásával. Közösségi
              dalírásnál célunk bemutatni egy dalírás folyamatát a szövegírással
              kezdve, a hangszeres és énekdallamokon át a stúdiófelvételekig.
            </p>
          </div>
          <div>
            <p>
              2020-ban Pusztafalun az UbikTūra tábor keretén belül Ferenczi
              György és Oláh József (Parno Graszt) vezénylésével megszületett
              Pusztafalu modern himnusza, amelynek megírásán több mint ötven
              művész dolgozott együtt a lakossággal. A dal alapja a "Pusztafalun
              akkor megyek végig" kezdetű helyi népdal. Az elkészült dalt a
              táborozók írták meg az elejétől a végéig, a klipet pedig a
              hétvégén készült telefonos felvételekből vágtuk össze, így készült
              el a közös zenei termék, a Stilórobbanás:
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
        <EmbedYoutube videoId="-dB8wp5saWA" />
      </ContainerStyles>
    </>
  );
}
