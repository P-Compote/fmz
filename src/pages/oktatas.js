import React, { useState } from 'react';
import scrollTo from 'gatsby-plugin-smoothscroll';
import ContainerStyles from '../styles/ContainerStyles';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { TextBox, OverlayText, ImageLinkContainer } from './index';
import Bobajka from '../components/Bobajka';
import Digital from '../components/Digital';
import Kozossegi from '../components/Kozossegi';
import SEO from '../components/SEO';

export default function Oktatas({ data }) {
  const [oktatas, setOktatas] = useState('');

  const revealOktatas = async oktatas => {
    await setOktatas(oktatas);
    scrollTo('#reszletek');
  };

  return (
    <>
      <SEO title={`Oktatás`} />
      <div>
        <Img fluid={data.oktatasHero.childImageSharp.fluid} />
      </div>
      <h1>Oktatás</h1>
      <ContainerStyles>
        <TextBox>
          <div>
            <p>
              Az egyesületünk legfontosabb céljai közé tartozik a magyar népi
              zenei kultúra megőrzése, valamint a modern zenei kultúra és
              népzenei hagyományok megismertetése a bölcsisektől a fiatal
              felnőttekig.
            </p>
            <p>
              Tevékenységeink között közösségi dalszerzés, hangszerbemutató és
              zeneterápia is szerepel. A közös zenei élmény megteremtése mellett
              fontosnak tartjuk a tehetségek felkarolását, karrierjük
              elindítását a művészet bármely területén.
            </p>
          </div>
          <div>
            <p>
              A zeneterápiás módszerek minden gyermek harmonikus fejlődését,
              egyre színesedő kommunikációját és egyéniségük kibontakozását
              segítik elő, de nagy segítséget nyújthatnak a különböző sajátos
              nevelési igényű gyermekek fejlesztésében, érzéseik feldolgozásában
              és kimutatásában, illetve a kapcsolatteremtésben is.
            </p>
            <p>
              Legyen az bölcsőde, általános iskola vagy fesztivál,
              foglalkozásaink során a csoportban résztvevők egy valódi közösségé
              kovácsolódnak, melynek mozgatórugója a közös alkotás, vagyis az
              örömzene.
            </p>
          </div>
        </TextBox>
        <h3>
          <strong>További információért keressen minket:</strong>
        </h3>
        <h3>
          <a href="mailto:info@fmz.ngo" target="_blank" rel="noreferrer">
            info@fmz.ngo
          </a>
        </h3>
      </ContainerStyles>
      <div>
        <ImageLinkContainer>
          <div
            onClick={() => revealOktatas('bobajka')}
            role="button"
            tabIndex={0}
            style={{ outline: 'none' }}
          >
            <Img
              fluid={data.bobajka.childImageSharp.fluid}
              alt="Bobájka bölcsi"
            />
            <OverlayText>Bobájka Bölcsi</OverlayText>
          </div>
        </ImageLinkContainer>
        <ImageLinkContainer>
          <div
            onClick={() => revealOktatas('digital')}
            role="button"
            tabIndex={0}
            style={{ outline: 'none' }}
          >
            <Img
              fluid={data.digital.childImageSharp.fluid}
              alt="Bobájka bölcsi"
            />
            <OverlayText>Digitális készségfejlesztés</OverlayText>
          </div>
        </ImageLinkContainer>
        <ImageLinkContainer>
          <div
            onClick={() => revealOktatas('kozossegi')}
            role="button"
            tabIndex={0}
            style={{ outline: 'none' }}
          >
            <Img
              fluid={data.kozossegi.childImageSharp.fluid}
              alt="Bobájka bölcsi"
            />
            <OverlayText>Közösségi dalírás</OverlayText>
          </div>
        </ImageLinkContainer>
        <div id="reszletek" style={{ marginTop: '-1.4rem' }} />
      </div>
      <div style={{ marginTop: '8rem' }}>
        {oktatas === 'bobajka' && <Bobajka />}
        {oktatas === 'digital' && <Digital />}
        {oktatas === 'kozossegi' && <Kozossegi />}
      </div>
    </>
  );
}

export const query = graphql`
  query {
    oktatasHero: file(relativePath: { eq: "FMZ-fejlecArtboard-oktatas.png" }) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 70) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    bobajka: file(relativePath: { eq: "FMZ-subpage-Artboard-bobajka.png" }) {
      childImageSharp {
        fluid(maxWidth: 1200, quality: 70) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    digital: file(relativePath: { eq: "FMZ-subpageArtboard-digital.png" }) {
      childImageSharp {
        fluid(maxWidth: 1200, quality: 70) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    kozossegi: file(relativePath: { eq: "FMZ-subpageArtboard-kozossegi.png" }) {
      childImageSharp {
        fluid(maxWidth: 1200, quality: 70) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
