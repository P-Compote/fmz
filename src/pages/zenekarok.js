import React from 'react';
import ContainerStyles from '../styles/ContainerStyles';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { TextBox } from './index';

export default function Zenekarok({ data }) {
  return (
    <>
      <div>
        <Img fluid={data.zenekarokHero.childImageSharp.fluid} />
      </div>
      <h1>Zenekarok</h1>
      <ContainerStyles>
        <TextBox>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Adipiscing elit duis tristique sollicitudin. A iaculis at erat
              pellentesque adipiscing commodo elit at. Cursus sit amet dictum
              sit amet justo donec. Sodales ut eu sem integer vitae. At varius
              vel pharetra vel turpis nunc eget lorem dolor. Felis eget nunc
              lobortis mattis aliquam faucibus purus. Donec ultrices tincidunt
              arcu non sodales. Arcu odio ut sem nulla pharetra diam. Dolor
              magna eget est lorem ipsum dolor sit amet consectetur. Eget nullam
              non nisi est sit amet facilisis magna. Mi quis hendrerit dolor
              magna eget. Ac tortor dignissim convallis aenean et tortor at
              risus viverra. Quis viverra nibh cras pulvinar mattis nunc.
            </p>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu non
              diam phasellus vestibulum lorem. Senectus et netus et malesuada.
              Mauris a diam maecenas sed enim ut sem. Netus et malesuada fames
              ac turpis egestas integer. Tincidunt augue interdum velit euismod
              in pellentesque massa placerat duis. Mauris cursus mattis molestie
              a iaculis at erat. Neque egestas congue quisque egestas diam in
              arcu cursus. Pretium lectus quam id leo in. Risus ultricies
              tristique nulla aliquet enim tortor at. Auctor eu augue ut lectus.
            </p>
          </div>
        </TextBox>
        <h2>
          <strong>További információért keressen minket:</strong>
        </h2>
        <h2>
          <a
            href="mailto:gallus@gallushirundo.hu"
            target="_blank"
            rel="noreferrer"
          >
            gallus@gallushirundo.hu
          </a>
        </h2>
        <h2>
          <a
            href="mailto:hirundo@gallushirundo.hu"
            target="_blank"
            rel="noreferrer"
          >
            hirundo@gallushirundo.hu
          </a>
        </h2>
      </ContainerStyles>
    </>
  );
}

export const query = graphql`
  query {
    zenekarokHero: file(relativePath: { eq: "zenekarok_01_desktop.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 70) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
