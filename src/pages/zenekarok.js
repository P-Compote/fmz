import React, { useState } from 'react';
import scrollTo from 'gatsby-plugin-smoothscroll';
import ContainerStyles from '../styles/ContainerStyles';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { TextBox, ImageLinkContainer, OverlayText } from './index';
import UbikTura from '../components/UbikTura';
import Ferenczi from '../components/Ferenczi';
import ParnoGraszt from '../components/ParnoGraszt';
import Betyars from '../components/Betyars';
import Napfonat from '../components/Napfonat';
import Mordai from '../components/Mordai';

export default function Zenekarok({ data }) {
  const [zenekar, setZenekar] = useState('');

  const revealZenekar = async band => {
    await setZenekar(band);
    scrollTo('#reszletek');
  };

  return (
    <>
      <div>
        <Img fluid={data.zenekarokHero.childImageSharp.fluid} />
      </div>
      <h1>Zenekarok</h1>
      <ContainerStyles>
        <div style={{ maxWidth: 348, margin: '3rem auto' }}>
          <Img
            fluid={data.gallusLogo.childImageSharp.fluid}
            alt="gallus hirundo logo"
          />
        </div>
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
        <div>
          <ImageLinkContainer>
            <div
              onClick={() => revealZenekar('ferenczi')}
              role="button"
              tabIndex={0}
              style={{ outline: 'none' }}
            >
              <Img
                fluid={data.ferenczi.childImageSharp.fluid}
                alt="Ferenczi György és az 1ső pesti rackák"
              />
              <OverlayText>Ferenczi György és az 1ső pesti rackák</OverlayText>
            </div>
          </ImageLinkContainer>
          <ImageLinkContainer>
            <div
              onClick={() => revealZenekar('parno')}
              role="button"
              tabIndex={0}
              style={{ outline: 'none' }}
            >
              <Img
                fluid={data.parno.childImageSharp.fluid}
                alt="Parno Graszt"
              />
              <OverlayText>Parno Graszt</OverlayText>
            </div>
          </ImageLinkContainer>
          <ImageLinkContainer>
            <div
              onClick={() => revealZenekar('betyars')}
              role="button"
              tabIndex={0}
              style={{ outline: 'none' }}
            >
              <Img
                fluid={data.betyars.childImageSharp.fluid}
                alt="Bohemian Betyars"
              />
              <OverlayText>Bohemian Betyars</OverlayText>
            </div>
          </ImageLinkContainer>
          <ImageLinkContainer>
            <div
              onClick={() => revealZenekar('napfonat')}
              role="button"
              tabIndex={0}
              style={{ outline: 'none' }}
            >
              <Img fluid={data.napfonat.childImageSharp.fluid} alt="Napfonat" />
              <OverlayText>Napfonat</OverlayText>
            </div>
          </ImageLinkContainer>
          <ImageLinkContainer>
            <div
              onClick={() => revealZenekar('mordai')}
              role="button"
              tabIndex={0}
              style={{ outline: 'none' }}
            >
              <Img fluid={data.mordai.childImageSharp.fluid} alt="Mordái" />
              <OverlayText>Mordái</OverlayText>
            </div>
          </ImageLinkContainer>
          <div id="reszletek" style={{ marginTop: '-4rem' }} />
        </div>
      </ContainerStyles>
      <div style={{ marginTop: '7rem' }}>
        {zenekar === 'ferenczi' && <Ferenczi />}
        {zenekar === 'parno' && <ParnoGraszt />}
        {zenekar === 'betyars' && <Betyars />}
        {zenekar === 'napfonat' && <Napfonat />}
        {zenekar === 'mordai' && <Mordai />}
      </div>
    </>
  );
}

export const query = graphql`
  query {
    zenekarokHero: file(
      relativePath: { eq: "FMZ-fejlecArtboard-zenekarok.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 70) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    gallusLogo: file(
      relativePath: { eq: "gallus_hirundo_full_logo_fekete_cropped.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1200, quality: 70) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    ferenczi: file(relativePath: { eq: "FMZ-subpageArtboard-ferenczi.png" }) {
      childImageSharp {
        fluid(maxWidth: 1200, quality: 70) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    parno: file(relativePath: { eq: "FMZ-subpageArtboard-parno.png" }) {
      childImageSharp {
        fluid(maxWidth: 1200, quality: 70) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    betyars: file(relativePath: { eq: "FMZ-subpageArtboard-betyars.png" }) {
      childImageSharp {
        fluid(maxWidth: 1200, quality: 70) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    napfonat: file(relativePath: { eq: "FMZ-subpageArtboard-napfonat.png" }) {
      childImageSharp {
        fluid(maxWidth: 1200, quality: 70) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    mordai: file(relativePath: { eq: "FMZ-subpageArtboard-mordai.png" }) {
      childImageSharp {
        fluid(maxWidth: 1200, quality: 70) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
