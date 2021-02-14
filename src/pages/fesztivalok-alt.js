import React from 'react';
import ContainerStyles from '../styles/ContainerStyles';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import { TextBox, ImageLinkContainer, OverlayText } from './index';

export default function FesztivalokAlt({ data }) {
  return (
    <>
      <div>
        <Img
          fluid={data.fesztivalokHero.childImageSharp.fluid}
          alt="fesztiválok"
        />
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
        <div>
          <ImageLinkContainer>
            <Link to="/fesztival/ubikeklektik">
              <Img
                fluid={data.ubikEklektik.childImageSharp.fluid}
                alt="ubikEklektik"
              />
              <OverlayText>UbikEklektik</OverlayText>
            </Link>
          </ImageLinkContainer>
          <ImageLinkContainer>
            <Link to="/fesztival/ubiktura">
              <Img fluid={data.ubikTura.childImageSharp.fluid} alt="ubikTúra" />
              <OverlayText>UbikTūra</OverlayText>
            </Link>
          </ImageLinkContainer>
          <ImageLinkContainer>
            <Link to="/fesztival/ubikfarm">
              <Img fluid={data.ubikFarm.childImageSharp.fluid} alt="ubikFarm" />
              <OverlayText>UbikFarm</OverlayText>
            </Link>
          </ImageLinkContainer>
        </div>
      </ContainerStyles>
    </>
  );
}

export const query = graphql`
  query {
    fesztivalokHero: file(
      relativePath: { eq: "FMZ-fejlecArtboard-fesztival.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 70) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    ubikEklektik: file(
      relativePath: { eq: "FMZ-subpageArtboard-ubikeklektik.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1200, quality: 70) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    ubikTura: file(relativePath: { eq: "FMZ-subpageArtboard-ubiktura.png" }) {
      childImageSharp {
        fluid(maxWidth: 1200, quality: 70) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    ubikFarm: file(relativePath: { eq: "FMZ-subpageArtboard-ubikfarm.png" }) {
      childImageSharp {
        fluid(maxWidth: 1200, quality: 70) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
