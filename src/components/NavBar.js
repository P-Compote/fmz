import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { CgMenuRightAlt, CgClose } from 'react-icons/cg';
import breakpoint from '../utils/breakpoints';
import MobileMenu from './MobileMenu';
import { menuItems } from '../menuItems';
import { useWindowSize } from '../utils/useWindowSize';

const NavBarStyles = styled.nav`
  background-color: var(--white);
  overflow-x: hidden;
  padding: 2rem 0;
  a {
    color: inherit;
  }
`;

const NavContainer = styled.div`
  max-width: var(--container);
  margin: 0 auto;
  display: flex;
  align-items: center;

  .logo {
    flex-grow: 1;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;

    a {
      font-size: 2.5rem;
    }

    a[aria-current='page'] {
      border-bottom: 2px solid var(--black);
    }

    @media screen and ${breakpoint.device.lg} {
      display: none;
    }
  }

  li {
    margin-left: 6rem;

    &:nth-child(1) {
      margin-left: 0;
    }
  }

  @media screen and ${breakpoint.device.xl} {
    margin-left: 2rem;
    margin-right: 2rem;
  }
`;

const HamburgerStyles = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  svg {
    width: 40px;
    height: 40px;
  }
  @media (min-width: 992px) {
    display: none;
  }
`;

const LogoContainer = styled.div`
  width: 26rem;
`;

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const size = useWindowSize();

  useEffect(() => {
    if (size.width > 992) {
      setOpen(false);
    }
  }, [size]);

  const showMobileMenu = () => {
    setOpen(!open);
  };

  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "FMZ_logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 70) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <>
      <NavBarStyles>
        <NavContainer>
          <div className="logo">
            <LogoContainer>
              <Link to="/" onClick={() => setOpen(false)}>
                <Img fluid={data.logo.childImageSharp.fluid} alt="FMZ logo" />
              </Link>
            </LogoContainer>
          </div>
          <ul>
            {menuItems.map((item, i) => (
              <li key={i}>
                <Link to={item.link}>{item.name}</Link>
              </li>
            ))}
          </ul>
          <HamburgerStyles onClick={showMobileMenu}>
            {open ? <CgClose /> : <CgMenuRightAlt />}
          </HamburgerStyles>
        </NavContainer>
      </NavBarStyles>
      {open && <MobileMenu open={open} setOpen={setOpen} />}
    </>
  );
}