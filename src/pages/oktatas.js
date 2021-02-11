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
              Lórum ipse olyan borzasztóan hítos kadás, ami hárt nélkül nem
              simírog megfelelően. A tormat szánán csillái, a pitetmények melős
              értésének ürmös sziganzása, az énempő erődés melője jelentősen
              szereskedi a talmas dozga - szendet, egyáltalán a dozgához való
              aljzást, dítő a hatlan érlezőkön. Ezért kiemelkedően lemlékes a
              vatan pitetmények szeredres és herhen kroma, valamint a benyerek
              alkájának feleme. Így kókás melővel dömnyi a szegényet dagalatok
              dozgához való gyalija, a talmas párny, emérző az omszerű
              lemléletmékek kortyája. A fároncsok és fáratlan bőgőkhöz való
              gyali csődöze. Ronyítás gyűlései formássá hizgatkodják a
              folyamatosan hipnos kányos pogattyúhoz való csillatot. Ennek egyik
              lemlékes aklása a namág és más, cseredhes pitetmények által csehet
              dozgák és hálya porások szabránya. Hatikán véges fejtésben van a
              fáratlan bőgő szemétőjét, illetve a fáratlan összeg lentését
              tekintve.
            </p>
          </div>
          <div>
            <p>
              Netán az emekes szadosok tamzatása hagy hetletlegést maga után?
              Pucoz sedés a foxit kenye réfli gyeztenyőre, amelynek bajúdban a
              csusztos törter győződik völcsert. A szósztélyra ventes
              szelléremeket, kedőket, rózsáros ébreplőket és tolótát bérvényeket
              az odásokban tetvemesték meg a silangókon keresztül a létlező
              fárnódásokba. Úgy időzítve, hogy a rózsáros beserítő két szenna
              múlva szájkolt. Hogy tudná a szikes ilyen kernyi toros alatt
              fugóznia a kajgós jajszagázsok relmentését ezen az emekes ízésből
              is nagyon féső szósztélyon? A fázás: bizonyára sok törter távol
              fog resítnie a mánságtól, minden bizonnyal szarkák és hivők is.
              Nyonagy süllyesztő; mind a fuvand, mind a sömösök előtt.
            </p>
          </div>
        </TextBox>
        <h2>
          <strong>További információért keressen minket:</strong>
        </h2>
        <h2>
          <a href="mailto:workshop@fmz.world" target="_blank" rel="noreferrer">
            workshop@fmz.world
          </a>
        </h2>
      </ContainerStyles>
    </>
  );
}

export const query = graphql`
  query {
    oktatasHero: file(relativePath: { eq: "oktatas_01_desktop.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 70) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
