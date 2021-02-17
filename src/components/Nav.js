import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import FmzLogo from '../assets/images/fmz-logo.png';
import ContainerStyles from '../styles/ContainerStyles';

const NavStyles = styled.nav`
  height: 100%;
  padding: 2% 0;
  display: flex;
  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: flex;
  }
  .logo-container {
    flex-grow: 1;
    margin: 0;
    display: grid;
    align-content: center;
    img {
      display: block;
      width: 26rem;
    }
  }
  .nav-container {
    display: grid;
    place-items: center;
    a[aria-current='page'] {
      border-bottom: 2px solid var(--black);
    }
  }
  a {
    margin: 0 3rem;
    font-size: 2.5rem;
  }
`;

export default function Nav() {
  return (
    <ContainerStyles>
      <NavStyles>
        <div className="logo-container">
          <Link to="/">
            <img src={FmzLogo} alt="fmz-logo" />
          </Link>
        </div>
        <div className="nav-container">
          <ul>
            <li>
              <Link to="/fesztivalok">Fesztiválok</Link>
            </li>
            <li>
              <Link to="/zenekarok">Zenekarok</Link>
            </li>
            <li>
              <Link to="/oktatas">Oktatás</Link>
            </li>
          </ul>
        </div>
      </NavStyles>
    </ContainerStyles>
  );
}
