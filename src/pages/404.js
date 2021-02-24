import React from 'react';
import SEO from '../components/SEO';
import ContainerStyles from '../styles/ContainerStyles';

export default function FourOFourPage() {
  return (
    <>
      <ContainerStyles>
        <SEO title="404" />
        <h1>Sajnos ilyen oldal nem létezik</h1>
      </ContainerStyles>
    </>
  );
}
