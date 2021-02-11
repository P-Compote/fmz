import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import ContainerStyles from '../styles/ContainerStyles';

const TextBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10rem;
  p {
    text-align: justify;
  }
`;

const ImageNavContainer = styled.div`
  img {
    opacity: 0.7;
    transition: opacity 0.4s ease;
  }
  a:hover {
    img {
      opacity: 1;
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
              összművészeti fesztiválok keretében. Az idén ötödik alkalommal
              megrendezett UbikEklektik fesztiválunk megkapta a Minősített
              Fesztivál kitüntetést. A rendezvényeink programja az akusztikus
              népzene, népi hagyományok ápolására, ezek modernizálására alapul.
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
          <a href="mailto:hello@fmz.world" target="_blank" rel="noreferrer">
            hello@fmz.world
          </a>
        </h2>
        <h1>Egyesületünk fő tevékenységei</h1>
        <ImageNavContainer>
          <div>
            <Link to="/fesztivalok">
              <Img fluid={data.feszt.childImageSharp.fluid} alt="fesztiválok" />
            </Link>
          </div>
          <div>
            <Link to="/zenekarok">
              <Img fluid={data.zenekar.childImageSharp.fluid} alt="zenekarok" />
            </Link>
          </div>
          <div>
            <Link to="/oktatas">
              <Img fluid={data.oktatas.childImageSharp.fluid} alt="oktatás" />
            </Link>
          </div>
        </ImageNavContainer>
      </ContainerStyles>
    </>
  );
}

export const query = graphql`
  query {
    hero: file(relativePath: { eq: "home_01_res.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 70) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    feszt: file(relativePath: { eq: "home_fesztivalok_res.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200, quality: 70) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    zenekar: file(relativePath: { eq: "home_zenekarok_res.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200, quality: 70) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    oktatas: file(relativePath: { eq: "home_oktatas_res.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200, quality: 70) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
