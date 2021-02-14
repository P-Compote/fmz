import React from 'react';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';
import { TextBox } from '../pages/index';

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
        relativePath: { eq: "FMZ-subpage-bigArtboard-ubiktura.png" }
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
      <div>
        <Img
          fluid={data.ubikTuraLogo.childImageSharp.fluid}
          alt="ubikTúra"
          style={{ width: 199, display: 'block', margin: '3rem auto' }}
        />
      </div>
      <h2>
        <em>
          "...minek titok? csakis ti-ták!" /Ubiciták, Felkiáltások könyve 19./
        </em>
      </h2>
      <TextBox>
        <div>
          <p>
            Az UbikTūra az UbikEklektik univerzum része, egy csúszkáló
            valóságokon átívelő együttállás ahol a különböző törzsek keresik az
            alkotás közös pontjait. Szemben az UbikEklektik zenei és művészeti
            sokszínűségével, az UbikTūrán a természetjárást és az akusztikus
            zenét tettük középpontba, hogy egy valóban falusi hangulatú, a helyi
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
            Pusztafaluban, a még élő néphagyománnyal rendelkező zsákfalucskában
            új rezgések hullámzanak. Megértésükhöz őseink útját járva találunk
            választ. Két éve építettünk egy iránytűt a felkészüléshez, tavaly
            közösen megírtuk a község himnuszát, most itt az idő, hogy
            visszatekerjük az időt és tovább folytassuk a kutatást.
          </p>
        </div>
      </TextBox>
      <h2>
        <strong>További információért keressen minket:</strong>
      </h2>
      <h2>
        <a href="mailto:ubiktura@gmail.com" target="_blank" rel="noreferrer">
          ubiktura@gmail.com
        </a>
      </h2>
      <div style={{ position: 'relative', height: 320 }}>
        <div
          style={{
            border: '1px solid black',
            width: '50%',
            height: 'auto',
            padding: 100,
            display: 'grid',
            placeItems: 'center',
            position: 'absolute',
            left: '15%',
          }}
        >
          <p>Youtube beágyazás</p>
        </div>
      </div>
      <div>
        <Img fluid={data.ubikTuraMain.childImageSharp.fluid} alt="UbikTúra" />
      </div>
    </>
  );
}
