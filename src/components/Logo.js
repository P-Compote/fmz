import React from 'react';
import styled from 'styled-components';

const LogoStyles = styled.div`
  font-family: 'Mediaan';
  font-size: 6px;
  font-size: clamp(6px, 0.75vw, 8px);
  width: 35em;
  height: 16em;
  /* border: 1px solid rebeccapurple; */
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  color: var(--black);
  h1 {
    margin: 0;
    padding: 0;
    font-weight: 300;
    text-align: left;
    font-size: 8em;
    margin-top: 0.24em;
  }
  p {
    font-family: Poppins;
    margin: 0;
    padding: 0;
    font-size: 1.8em;
    line-height: 1.2;
    font-weight: 400;
  }
`;

export default function Logo() {
  return (
    <LogoStyles className="logo">
      <h1>FMZ</h1>
      <div>
        <p>Fiatalok a</p>
        <p>Magyar Zenéért</p>
        <p>Egyesület</p>
      </div>
    </LogoStyles>
  );
}
