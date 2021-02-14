import React from 'react';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';
import { TextBox } from '../pages/index';
import ContainerStyles from '../styles/ContainerStyles';

export default function UbikFarm() {
  const data = useStaticQuery(graphql`
    query {
      ubikFarmLogo: file(relativePath: { eq: "ubikfarm_logo.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 70) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      ubikFarmMain: file(
        relativePath: { eq: "FMZ-subpage-bigArtboard-ubikfarm.png" }
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
            fluid={data.ubikFarmLogo.childImageSharp.fluid}
            alt="UbikFarm"
            style={{ width: 199, display: 'block', margin: '5rem auto' }}
          />
        </div>
        <h2>
          <em>
            „Csended tojás. Ahhoz, hogy felbontása közben egyetlen, fontos
            darabkát se veszíts el belőle, nagyon óvatosan kell eljárnod.”
          </em>
        </h2>
        <h2>
          <em>/Ubiciták - Az Orákulum Nagyon Óvatos Eljárásai 12./</em>
        </h2>
        <TextBox>
          <div>
            <p>
              Az UbikFarm egy underground művészeti és természetiközeli
              fesztivál, amelyet egy önellátó közösségi gazdaságban szervezünk,
              Vértesszőlősön. Célja, hogy bemutassuk a farm működését és
              szokásait az idelátogatók számára, valamint fellépési lehetőséget
              teremtsünk a feltörekvő fiatal művészek és ritka underground
              műfajok képviselőinek.
            </p>
          </div>
          <div>
            <p>
              -fekete-fehérek - próbálják megtalálni civilizációjuk hiányzó
              árnyalatait. Ezért a színek minden árnyalatát felkérik, hogy
              fedezzék fel ősi figuráik jelentését, még homályban. Hisznek egy
              elkövetkező nem mindennapi kultúra anekdotáiban, és kinfolklónk
              színezik ezeknek az alakoknak a fekete-fehér kontúrjait.
            </p>
          </div>
        </TextBox>
        <h2>
          <strong>További információért keressen minket:</strong>
        </h2>
        <h2>
          <a href="mailto:ubikfarm@gmail.com" target="_blank" rel="noreferrer">
            ubikfarm@gmail.com
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
      </ContainerStyles>
      <div>
        <Img fluid={data.ubikFarmMain.childImageSharp.fluid} alt="UbikFarm" />
      </div>
    </>
  );
}
