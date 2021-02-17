import React from 'react';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';
import { TextBox } from '../pages/index';
import ContainerStyles from '../styles/ContainerStyles';
import EmbedFacebook from './EmbedFacebook';

export default function UbikTura() {
  const data = useStaticQuery(graphql`
    query {
      ubikTuraLogo: file(relativePath: { eq: "ubiktura-logo.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 70) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      ubikTuraMain: file(
        relativePath: { eq: "FMZ-fejlecArtboard-fesztival.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 2000, quality: 70) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  return (
    <>
      <ContainerStyles>
        <div>
          <Img
            fluid={data.ubikTuraLogo.childImageSharp.fluid}
            alt="ubikTúra"
            style={{ width: 199, display: 'block', margin: '5rem auto' }}
          />
        </div>
        <h3>
          <em>
            "...minek titok? csakis ti-ták!" /Ubiciták, Felkiáltások könyve 19./
          </em>
        </h3>
        <TextBox>
          <div>
            <p>
              Az UbikTūra az UbikEklektik univerzum része, egy csúszkáló
              valóságokon átívelő együttállás ahol a különböző törzsek keresik
              az alkotás közös pontjait.
            </p>
            <p>
              Szemben az UbikEklektik zenei és művészeti sokszínűségével, az
              UbikTūrán a természetjárást és az akusztikus zenét tettük
              középpontba, hogy egy valóban falusi hangulatú, a helyi
              lakosságnak is befogadható keresztmetszet jöjjön létre. A
              rendezvényeink programja az akusztikus népzene, népi hagyományok
              ápolására, ezek modernizálására alapul.
            </p>
          </div>
          <div>
            <p>
              Célunk, hogy a vidéki és budapesti kultúra találkozási pontja
              legyünk, és eltöröljük azt a tévhitet, hogy a táncházban csak
              néptáncosok érezhetik jól magukat.
            </p>
            <p>
              Pusztafaluban, a még élő néphagyománnyal rendelkező
              zsákfalucskában új rezgések hullámzanak. Megértésükhöz őseink
              útját járva találunk választ. Két éve építettünk egy iránytűt a
              felkészüléshez, tavaly közösen megírtuk a község himnuszát, most
              itt az idő, hogy visszatekerjük az időt és tovább folytassuk a
              kutatást.
            </p>
          </div>
        </TextBox>
        <h3>
          <strong>További információért keressen minket:</strong>
        </h3>
        <h3>
          <a href="mailto:ubiktura@gmail.com" target="_blank" rel="noreferrer">
            ubiktura@gmail.com
          </a>
        </h3>
        <EmbedFacebook videoId="1611397285708425" fbPage="ubikeklektik" />
      </ContainerStyles>
      <div>
        <Img fluid={data.ubikTuraMain.childImageSharp.fluid} alt="UbikTúra" />
      </div>
    </>
  );
}
