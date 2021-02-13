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
        <h2>
          <strong>További információért keressen minket:</strong>
        </h2>
        <h2>
          <a href="mailto:workshop@fmz.ngo" target="_blank" rel="noreferrer">
            workshop@fmz.ngo
          </a>
        </h2>
      </ContainerStyles>
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
  }
`;
