import React from 'react';
import ContainerStyles from '../styles/ContainerStyles';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { TextBox } from './index';

export default function Fesztivalok({ data }) {
  return (
    <>
      <div>
        <Img fluid={data.fesztivalokHero.childImageSharp.fluid} />
      </div>
      <h1>Fesztiválok</h1>
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
          <a href="mailto:festival@fmz.world" target="_blank" rel="noreferrer">
            festival@fmz.world
          </a>
        </h2>
      </ContainerStyles>
    </>
  );
}

export const query = graphql`
  query {
    fesztivalokHero: file(relativePath: { eq: "fesztivalok_01_desktop.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 70) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
