import React from 'react';
import ContainerStyles from '../styles/ContainerStyles';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { TextBox } from './index';

export default function Oktatas({ data }) {
  return (
    <>
      <div>
        <Img fluid={data.oktatasHero.childImageSharp.fluid} />
      </div>
      <h1>Oktatás</h1>
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
          </div>
        </TextBox>
        <h2>
          <strong>További információért keressen minket:</strong>
        </h2>
        <h2>
          <a href="mailto:workshop@fmz.world" target="_blank" rel="noreferrer">
            workshop@fmz.world
          </a>
        </h2>
      </ContainerStyles>
    </>
  );
}

export const query = graphql`
  query {
    oktatasHero: file(relativePath: { eq: "oktatas_01_desktop.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 70) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
