import React, { useState } from 'react';
import styled from 'styled-components';
import scrollTo from 'gatsby-plugin-smoothscroll';
import ContainerStyles from '../styles/ContainerStyles';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { TextBox, ImageLinkContainer, OverlayText } from './index';
import Ferenczi from '../components/Ferenczi';
import ParnoGraszt from '../components/ParnoGraszt';
import Betyars from '../components/Betyars';
import Napfonat from '../components/Napfonat';
import Mordai from '../components/Mordai';
import SEO from '../components/SEO';
import LogoContainer from '../styles/LogoContainer';
import { useWindowSize } from '../utils/useWindowSize';

const InlineLink = styled.a`
  font-weight: 500;
  border-bottom: 2px solid;
  background-color: #f2f2f2;

  &:hover {
    border-bottom: none;
    background-color: revert;
  }
`;

export default function Zenekarok({ data }) {
  const [zenekar, setZenekar] = useState('');
  const size = useWindowSize();

  const revealZenekar = async band => {
    await setZenekar(band);
    scrollTo('#reszletek');
  };

  return (
    <>
      <SEO title={`Zenekarok`} />
      <div>
        <Img fluid={data.zenekarokHero.childImageSharp.fluid} />
      </div>
      <ContainerStyles>
        <h1>Zenekarok</h1>
        <LogoContainer style={size.width < 768 ? { margin: '4rem 0' } : null}>
          <Img
            fluid={data.gallusLogo.childImageSharp.fluid}
            alt="gallus hirundo logo"
          />
        </LogoContainer>
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
              Ezért hívtuk életre a{' '} <InlineLink
                href="https://puszafalat.eu"
                target="_blank"
                rel="noopener noreferrer"
              >
                Puszafalat
              </InlineLink> projektet, vagy ezért alapítottuk a{' '}
              <InlineLink
                href="https://gallushirundo.hu"
                target="_blank"
                rel="noopener noreferrer"
              >
                Gallus &amp; Hirundo menedzsment irodát
              </InlineLink>
              , amely extra kezet nyújt az általunk képviselt zenekarok számára.
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
        <h3>
          <strong>További információért keressen minket:</strong>
        </h3>
        <h3>
          <a
            href="mailto:music@gallushirundo.hu"
            target="_blank"
            rel="noreferrer"
          >
            music@gallushirundo.hu
          </a>
        </h3>
      </ContainerStyles>
      <div>
        <ImageLinkContainer>
          <div
            onClick={() => revealZenekar('ferenczi')}
            role="button"
            tabIndex={0}
            style={{ outline: 'none' }}
          >
            <Img
              fluid={
                data[`ferenczi${size.width < 768 ? `Mobile` : ``}`]
                  .childImageSharp.fluid
              }
              alt="Ferenczi György és az 1ső pesti rackák"
            />
            <OverlayText>Ferenczi György és az 1ső pesti rackák </OverlayText>
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
              fluid={
                data[`parno${size.width < 768 ? `Mobile` : ``}`].childImageSharp
                  .fluid
              }
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
              fluid={
                data[`betyars${size.width < 768 ? `Mobile` : ``}`]
                  .childImageSharp.fluid
              }
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
            <Img
              fluid={
                data[`napfonat${size.width < 768 ? `Mobile` : ``}`]
                  .childImageSharp.fluid
              }
              alt="Napfonat"
            />
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
            <Img
              fluid={
                data[`mordai${size.width < 768 ? `Mobile` : ``}`]
                  .childImageSharp.fluid
              }
              alt="Mordái"
            />
            <OverlayText>Mordái</OverlayText>
          </div>
        </ImageLinkContainer>
      </div>
      <div id="reszletek" style={{ paddingTop: '1rem' }}>
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
    ferencziMobile: file(
      relativePath: { eq: "FMZ-subpageArtboard-ferenczi_mobile.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 800, quality: 70) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    parnoMobile: file(
      relativePath: { eq: "FMZ-subpageArtboard-parno_mobile.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 800, quality: 70) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    betyarsMobile: file(
      relativePath: { eq: "FMZ-subpageArtboard-betyars_mobile.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 800, quality: 70) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    napfonatMobile: file(
      relativePath: { eq: "FMZ-subpageArtboard-napfonat_mobile.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 800, quality: 70) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    mordaiMobile: file(
      relativePath: { eq: "FMZ-subpageArtboard-mordai_mobile.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 800, quality: 70) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
