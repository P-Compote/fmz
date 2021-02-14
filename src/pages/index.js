import React from 'react';
import styled from 'styled-components';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import ContainerStyles from '../styles/ContainerStyles';

export const TextBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10rem;
  p {
    text-align: justify;
  }
`;

export const OverlayText = styled.div`
  width: 40%;
  position: absolute;
  background: rgba(255, 255, 255, 0.6);
  color: var(--black);
  padding: 5px;
  text-transform: uppercase;
  font-family: 'Roboto';
  letter-spacing: 1px;
  bottom: 0;
  left: 30%;
  z-index: 1000;
  text-align: center;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  transition: all 0.2s ease-in-out;
`;

export const ImageLinkContainer = styled.div`
  position: relative;
  picture {
    opacity: 0.7;
    /* img {
      filter: grayscale(80%);
    } */
    transition: all 0.3s ease-in-out;
  }
  &:hover {
    cursor: pointer;
    picture {
      /* img {
        filter: grayscale(0%);
      } */
      opacity: 1;
    }
    div {
      letter-spacing: 1px;
      background: rgba(255, 255, 255, 1);
    }
  }
`;

export default function Home({ data }) {
  return (
    <>
      <div>
        <Img fluid={data.hero.childImageSharp.fluid} />
      </div>
      <h1>Az egyesületről</h1>
      <ContainerStyles>
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
        <h2>
          <strong>További információért keressen minket:</strong>
        </h2>
        <h2>
          <a href="mailto:hello@fmz.ngo" target="_blank" rel="noreferrer">
            hello@fmz.ngo
          </a>
        </h2>
        <h1>Egyesületünk fő tevékenységei</h1>
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
      </ContainerStyles>
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
        fluid(maxWidth: 1200, quality: 70) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    zenekar: file(relativePath: { eq: "FMZ-mainpageArtboard-zenekarok.png" }) {
      childImageSharp {
        fluid(maxWidth: 1200, quality: 70) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    oktatas: file(relativePath: { eq: "FMZ-mainpageArtboard-oktatas.png" }) {
      childImageSharp {
        fluid(maxWidth: 1200, quality: 70) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
