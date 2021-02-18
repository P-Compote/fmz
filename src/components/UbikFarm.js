import React from 'react';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';
import { TextBox } from '../pages/index';
import ContainerStyles from '../styles/ContainerStyles';
import EmbedFacebook from './EmbedFacebook';
import LogoContainer from '../styles/LogoContainer';

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
        <LogoContainer>
          <Img fluid={data.ubikFarmLogo.childImageSharp.fluid} alt="UbikFarm" />
        </LogoContainer>
        <h3>
          <em>
            „Csended tojás. Ahhoz, hogy felbontása közben egyetlen, fontos
            darabkát se veszíts el belőle, nagyon óvatosan kell eljárnod.”
          </em>
        </h3>
        <h3>
          <em>/Ubiciták - Az Orákulum Nagyon Óvatos Eljárásai 12./</em>
        </h3>
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
        <h3>
          <strong>További információért keressen minket:</strong>
        </h3>
        <h3>
          <a href="mailto:ubikfarm@gmail.com" target="_blank" rel="noreferrer">
            ubikfarm@gmail.com
          </a>
        </h3>
        <EmbedFacebook videoId="159796498241310" fbPage="ubikeklektik" />
      </ContainerStyles>
      <div>
        <Img fluid={data.ubikFarmMain.childImageSharp.fluid} alt="UbikFarm" />
      </div>
    </>
  );
}
