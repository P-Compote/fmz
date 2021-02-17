import React from 'react';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';
import { TextBox } from '../pages/index';
import ContainerStyles from '../styles/ContainerStyles';
import EmbedYoutube from './EmbedYoutube';

export default function Bobajka() {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "bobajka-logo.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 70) {
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
            alt="Bobájka bölcsi logo"
            style={{ width: 320, display: 'block', margin: '5rem auto' }}
          />
        </div>
        <TextBox>
          <div>
            <p>
              Bobájka Bölcsi tevékenységei között legkisebb korú gyermekeknek
              nyújt zenei oktatás és képességfejlesztést. Fő alapelveink a
              gyermekközpontúság, családközpontúság, alkalmazkodás és elfogadás.
              Célunk, hogy hozzájáruljunk a kisgyermekes családok harmonikus
              mindennapjaihoz, megőrizzük és beépítsük a mindennapokba a
              hagyományos értékeket.
            </p>
          </div>
          <div>
            <p>
              Szeretnénk, ha a hozzánk beíratott gyerekek megismerkednének
              kulturális értékeinkkel, a népi játékok egyben közösségi
              tevékenységek, vidámak, összetartozást, közösségi élményt
              jelentenek. A kézműveskedés sikerélményt ad a gyermekeknek,
              fejleszti kézügyességüket, a tánc pedig a mozgáskészséget és a
              mozgás örömét adja a gyermekeknek. A Bobájka Családi Bölcsőde két
              kiemelendő, különleges és nem mindennapi szolgáltatást is nyújt az
              oda járó gyermekek számára: a zeneterápiát, valamint a
              kutyaterápiát.
            </p>
          </div>
        </TextBox>
        <h3>
          <strong>További információért keressen minket:</strong>
        </h3>
        <h3>
          <a
            href="mailto:hello@bobajkabolcsi.hu"
            target="_blank"
            rel="noreferrer"
          >
            hello@bobajkabolcsi.hu
          </a>
        </h3>
        <EmbedYoutube videoId="" />
      </ContainerStyles>
    </>
  );
}
