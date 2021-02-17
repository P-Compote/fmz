import React from 'react';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';
import { TextBox } from '../pages/index';
import ContainerStyles from '../styles/ContainerStyles';
import EmbedYoutube from './EmbedYoutube';

export default function Napfonat() {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "napfonat_color_solo_transparent.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 70) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      main: file(relativePath: { eq: "FMZ-subpage-bigArtboard-napfonat.png" }) {
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
            alt="Napfonat logo"
            style={{ width: 320, display: 'block', margin: '5rem auto' }}
          />
          <h2>Napfonat</h2>
        </div>
        <h4>
          <em>
            „Egység, kör, több szólam, ritmus, összhang, figyelem, mélység, lágy
            és sokszínű nőiesség...”
          </em>
        </h4>
        <TextBox>
          <div>
            <p>
              A Napfonat 2018 tavaszán alakult, egy energikus női, ütős
              hangszerekkel kiegészített a cappella együttessé.
            </p>
            <p>
              Az együttes tagjai külön-külön is izgalmas zenei világokat
              képviselnek, zenei (jazz, népzene, könnyűzene), és kulturális
              (Felvidék, Erdély, Oroszország) hátterükből fakadóan.
            </p>
          </div>
          <div>
            <p>
              Ez a sokféleség egyedi (hang)színt és egyfajta világzenei jelleget
              kölcsönöz az együttesnek. Kompozícióikban gyakran nyúlnak vissza a
              hagyományos zenei gyökerekhez és sajátos módon fogalmazzák újra a
              magyar és más nemzetek (orosz, szlovák, lengyel, spanyol, cigány,
              indiai, tahiti stb.) népdalainak világát, polifonikus hangzásba
              öltöztetve őket, kiemelve a népzene erejét és szépségét, az
              énekhang felszabadító hatását.
            </p>
          </div>
        </TextBox>
        <h3>
          <strong>További információért keressen minket:</strong>
        </h3>
        <h3>
          <a href="mailto:" target="_blank" rel="noreferrer">
            IDE KELL EGY EMAIL VAGY WEBOLDAL
          </a>
        </h3>
        <EmbedYoutube videoId="" />
      </ContainerStyles>
      <div>
        <Img fluid={data.main.childImageSharp.fluid} alt="Napfonat" />
      </div>
    </>
  );
}
