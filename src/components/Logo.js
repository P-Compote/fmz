import React from 'react';
import styled from 'styled-components';

const LogoStyles = styled.div`
  /* font-family: 'Poppins'; */
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  text-align: left;
  h1 {
    text-align: left;
  }
  p,
  h1,
  h5 {
    margin: 0;
    padding: 0;
    line-height: 1;
  }
  h1 {
    font-size: 6rem;
  }
  h5 {
    text-transform: uppercase;
    font-size: 2rem;
    margin-left: 0.5%;
  }
  .left p {
    text-align: right;
    margin-top: 0.5rem;
    line-height: 1.1;
  }
`;

export default function Logo() {
  return (
    <LogoStyles className="logo">
      <div className="left">
        <p>Fiatalok a</p>
        <p>Magyar</p>
        <p>Zenéért</p>
      </div>
      <div className="right">
        <h1>FMZ</h1>
        <h5>egyesület</h5>
      </div>
    </LogoStyles>
  );
}
