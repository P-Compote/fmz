import React from 'react';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';
import { TextBox } from '../pages/index';
import ContainerStyles from '../styles/ContainerStyles';
import EmbedYoutube from './EmbedYoutube';
import Social from './SocialLinks';

export default function Mordai() {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "mordai_logo_fekete.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 70) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      main: file(relativePath: { eq: "FMZ-subpage-bigArtboard-mordai.png" }) {
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
            fluid={data.logo.childImageSharp.fluid}
            alt="Mordái logo"
            style={{ width: 320, display: 'block', margin: '5rem auto' }}
          />
        </div>
        <h4>
          <em>
            „Mély brácsa és szabad szaxofon harmóniáinak keveredése magyar
            balladák szövegvilágával.”
          </em>
        </h4>
        <TextBox>
          <div>
            <p>
              A MORDÁI a 60-as, 70-es évek kisérletező magyar népzenei vonulatok
              repertoárjából (Muzsikás Zenekar, Sebő együttes, stb.) táplálkozó
              folk rock zenekar. Hangvételében az útonállók sötét szellemiségét
              idézi meg.
            </p>
          </div>
          <div>
            <p>
              A zenekar elismert magyar népzenei és szabadzenei körökből jött
              létre, élen a számom sikeres projektben közreműködő Nové Soma
              énekessel. A füstös, balladai homály átjárja a koncertet, amely
              kétségen kívül egyedülálló színfolt a magyar világzene palettáján.{' '}
            </p>
          </div>
        </TextBox>
        <Social
          youtube="https://www.youtube.com/channel/UCo-Fh9u4eDKH6n_iTIN_0ow?sub_confirmation=1"
          spotify="https://open.spotify.com/artist/43Zk3zSxVK6O9brG92ICTI?si=qbN53xCgTqqKALhXBp2G7w"
          facebook="https://www.facebook.com/mordaimusic/"
        />
        <EmbedYoutube videoId="L6Cl7UC9Jz4" />
      </ContainerStyles>
      <div>
        <Img fluid={data.main.childImageSharp.fluid} alt="Mordái" />
      </div>
    </>
  );
}
