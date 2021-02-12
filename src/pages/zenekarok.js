import React from 'react';
import ContainerStyles from '../styles/ContainerStyles';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { TextBox } from './index';

export default function Zenekarok({ data }) {
  return (
    <>
      <div>
        <Img fluid={data.zenekarokHero.childImageSharp.fluid} />
      </div>
      <h1>Zenekarok</h1>
      <ContainerStyles>
        <TextBox>
          <div>
            <p>
              A rendezvényeink mellett fontosnak tartjuk az kiemelkedő minőséget
              képviselő, népzenei hagyományokból merítkező zenekarok támogatását
              is. A magyar zene iránti szenvedélyünk, valamint több éves
              nemzetközi tapasztalatunk arra ösztönöz minket, hogy segítsünk
              hazánk feltörekvő világzenei művészeit.
            </p>
            <p>
              Az egyesületünk tagjai művészként és menedzserként tudják, hogy
              lehet a „másik oldalon” lenni. Aktív zenészként teljesen megértjük
              milyen nehéz lehet egy alkotónak nemcsak a zenéjére koncentrálni,
              hanem naprakésznek maradnia a legújabb digitális trendekkel, jogi,
              közgazdasági teendőkkel is.
            </p>
          </div>
          <div>
            <p>
              Ezért alapítottuk a Gallus &amp; Hirdundo menedzsment irodát,
              amely extra kezet nyújt az általunk képviselt zenekarok számára.
              Megosztjuk a tapasztalatainkat, segítjük egymást a zenekar körüli
              tevékenységekben, valamint egy olyan világzenei kollektívát
              alkotunk, amely méltón képviselheti a magyar világzenét a bolygónk
              bármelyik fesztiváljának nagyszínpadán.
            </p>
            <p>
              Az elismert művészektől a feltörekvő tehetségekig, egyesületünk
              által képviselt zenekarok egytől-egyig kiemelkedő minőséggel
              dolgozzák fel a Kárpát-medence népzenei hagyományait, elősegítve
              az örökségünk becsatornázását a modern zenei közegbe.
            </p>
          </div>
        </TextBox>
        <h2>
          <strong>További információért keressen minket:</strong>
        </h2>
        <h2>
          <a
            href="mailto:gallus@gallushirundo.hu"
            target="_blank"
            rel="noreferrer"
          >
            gallus@gallushirundo.hu
          </a>
        </h2>
        <h2>
          <a
            href="mailto:hirundo@gallushirundo.hu"
            target="_blank"
            rel="noreferrer"
          >
            hirundo@gallushirundo.hu
          </a>
        </h2>
      </ContainerStyles>
    </>
  );
}

export const query = graphql`
  query {
    zenekarokHero: file(relativePath: { eq: "zenekarok_01_desktop.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 70) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
