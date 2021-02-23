import React from 'react';
import styled from 'styled-components';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import ContainerStyles from '../styles/ContainerStyles';
import SEO from '../components/SEO';
import breakpoint from '../utils/breakpoints';

export const TextBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10rem;
  div {
    text-indent: 7%;
  }
  p {
    text-align: justify;
  }
  @media screen and ${breakpoint.device.md} {
    grid-template-columns: 1fr;
    gap: 0rem;
    div {
      text-indent: 0;
    }
    p {
      text-align: left;
      font-family: 'Karla', -apple-system, BlinkMacSystemFont, 'Segoe UI',
        Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
        sans-serif;
      margin: 0;
      margin-bottom: 2.5rem;
      font-size: 2.2rem;
      line-height: 1.625;
    }
  } ;
`;

export const OverlayText = styled.div`
  width: 50%;
  position: absolute;
  padding: 5px;
  background: rgba(255, 255, 255, 0.6);
  color: var(--black);
  text-transform: uppercase;
  letter-spacing: 1px;
  bottom: 0;
  left: 25%;
  z-index: 1000;
  text-align: center;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  transition: all 0.2s ease-in-out;
  font-size: 1.7rem;
  @media screen and ${breakpoint.device.md} {
    width: 80%;
    left: 10%;
    font-size: 1.4rem;
    padding: 2px;
  } ;
`;

export const ImageLinkContainer = styled.div`
  position: relative;

  div {
    font-weight: 500;
    transition: all 0.2s ease-in-out;
  }

  &:hover {
    cursor: pointer;
    div {
      letter-spacing: 1px;
      font-size: 2.5rem;
      font-weight: 600;
      background: rgba(255, 255, 255, 1);
    }
  }
  @media screen and ${breakpoint.device.md} {
    &:hover {
      div {
        font-size: 1.9rem;
      }
    }
  }
`;

export default function Home({ data }) {
  return (
    <>
      <SEO title={`Főoldal`} />
      <div>
        <Img fluid={data.hero.childImageSharp.fluid} />
      </div>
      <ContainerStyles>
        <h1>Az egyesületről</h1>
        <TextBox>
          <div>
            <p>
              A Fiatalok a Magyar Zenéért Egyesület egy 2011-ben alapított
              önkéntes fiatalokból álló alkotóközösség, melynek víziója a
              Kárpát-medencei néphagyományok megismertetése a fiatalabb
              generációval. Az egyesületünk tíz éve segíti a hazai világ- és
              népzenei zenekarok szakmai és üzleti fejlődését. Az alapításunk
              óta több mint 30 nemzetközi turnét bonyolítottunk már le és számos
              világzenei kiadóval és érdekképviselettel vagyunk állandó
              kapcsolatban Ázsia, Amerika és Európa országaiban.
            </p>
            <p>
              A nemzetközi sikerek mellett törekszünk a tapasztalataink helyi
              promótálására is, átadva tudásunkat a következő generációknak
              összművészeti fesztiválok keretében. Az UbikEklektik fesztiválunk
              2017-ben megkapta a Minősített Fesztivál kitüntetést. Célunk egy
              találkozási pontot teremteni a különböző művészeti ágakban alkotók
              között.
            </p>
          </div>
          <div>
            <p>
              2018-ban alapítottuk a Bobájka Bölcsit, melynek célja a gyermekek
              számára a családias légkör mellett olyan plusz élményekkel
              szolgálni, melyek emlékezetessé teszik mindennapjaikat, és a
              játszva tanulás mellett támogatják érzelmi intelligenciájuk,
              beszédfejlődésük és biztonságérzetük kialakulását. Zenei nevelés,
              kutyaterápiás foglalkozás, népi hagyományok ismertetése, megőrzése
              valamint az alapvető környezetvédelmi ismeretek elsajátításának
              támogatása.
            </p>
            <p>
              Egyesületünk küldetése, hogy a fiatal lakosság ismerje meg saját
              néphagyományait és legyen aktív tagja a hagyományőrzésnek, annak
              feldolgozásának. Célunk a helyi tehetséggondozás és a kezdő
              kezdeményezések becsatornázása a magyarországi zenei közegbe.
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
        <h2>Egyesületünk fő tevékenységei</h2>
      </ContainerStyles>
      <div>
        <ImageLinkContainer>
          <Link to="/fesztivalok">
            <Img fluid={data.feszt.childImageSharp.fluid} alt="fesztiválok" />
            <OverlayText>Fesztiválok</OverlayText>
          </Link>
        </ImageLinkContainer>
        <ImageLinkContainer>
          <Link to="/zenekarok">
            <Img fluid={data.zenekar.childImageSharp.fluid} alt="zenekarok" />
            <OverlayText>Zenekarok</OverlayText>
          </Link>
        </ImageLinkContainer>
        <ImageLinkContainer>
          <Link to="/oktatas">
            <Img fluid={data.oktatas.childImageSharp.fluid} alt="oktatás" />
            <OverlayText>Oktatás</OverlayText>
          </Link>
        </ImageLinkContainer>
      </div>
    </>
  );
}

export const query = graphql`
  query {
    hero: file(relativePath: { eq: "FMZ-fejlecArtboard-main.png" }) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 70) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    feszt: file(relativePath: { eq: "FMZ-mainpageArtboard-festival.png" }) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 70) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    # fesztMobile: file(relativePath: { eq: "43-fesztivalok.jpg" }) {
    #   childImageSharp {
    #     fluid(maxWidth: 800, quality: 70) {
    #       ...GatsbyImageSharpFluid_withWebp
    #     }
    #   }
    # }
    zenekar: file(relativePath: { eq: "FMZ-mainpageArtboard-zenekarok.png" }) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 70) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    # zenekarMobile: file(relativePath: { eq: "43-zenekarok.jpg" }) {
    #   childImageSharp {
    #     fluid(maxWidth: 800, quality: 70) {
    #       ...GatsbyImageSharpFluid_withWebp
    #     }
    #   }
    # }
    oktatas: file(relativePath: { eq: "FMZ-subpage-big-javArtboard-9.png" }) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 70) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    # oktatasMobile: file(relativePath: { eq: "43-oktatas.jpg" }) {
    #   childImageSharp {
    #     fluid(maxWidth: 800, quality: 70) {
    #       ...GatsbyImageSharpFluid_withWebp
    #     }
    #   }
    # }
  }
`;
