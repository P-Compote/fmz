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
              Az egyesületünk 2014-ben indította el az Ubik fesztiválsorozatot,
              amelynek célja egy dinamikusan fejlődő, innovatív és nemzetközi
              összművészeti fesztivál megteremtése, amely elősegíti a különböző
              művészeti ágak és az országokon átívelő kultúrák együttműködését.
              Rendezvényeinken a családias közeg megteremtésével, kizárólag
              önkéntesekből álló építő és művészbrigáddal valamint az egyedi
              történetmeséléssel szeretnénk különlegesek lenni.
            </p>
            <p>
              Nálunk mindenki otthon érezheti magát, kipróbálhatja valamennyi
              művészet munkafolyamatait és életre szóló kapcsolatokat teremthet
              egy a nemzetközi, kreatív közegben.
            </p>
          </div>
          <div>
            <p>
              Céljuk a fiatal feltörekvő alkotók közötti szakmai kapcsolat
              megteremtése, közösségé formálása és munkáik bemutatása a
              közönségnek.
            </p>
            <p>
              Az Ubik univerzumnak egy évről évre változó sci-fi kerettörténet
              adja meg a vázát. Mondavilágunk szerint az Ubik időpontja egy
              párhuzamos valóságokban létrejövő együttállás, ahol a különböző
              szubkultúrák összefonódnak. Mindegyik rendezvénysorozatnak megvan
              a saját üzenete, törzsei, évről-évre változó küldetése. Ez
              biztosítja a fesztiválok egyediségét, valamint a minden évben
              változó, de adott évben egységes koncepció összefogja a sokszor
              teljesen különböző művészeti alkotások kavalkádját.
            </p>
          </div>
        </TextBox>
        <h2>
          <strong>További információért keressen minket:</strong>
        </h2>
        <h2>
          <a href="mailto:festival@fmz.ngo" target="_blank" rel="noreferrer">
            festival@fmz.ngo
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
