import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { menuItems } from '../menuItems';

const MobileMenuStyles = styled.div`
  // display: ${props => (props.open ? `grid` : `none`)};
  transition: display 0.9s ease-in-out;
  display: grid;
  place-items: center;
  width: 100%;
  z-index: 9999;
  background: #fff;
  color: #fff;
  text-align: center;
  font-size: 2.4rem;

  ul {
    width: 100%;
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    gap: 1rem;
    flex-direction: column;
    color: white;
  }

  a {
    display: block;
    padding: 1rem 0;
  }

  a[aria-current='page'] {
    background-color: var(--grey);
    font-weight: 500;
    letter-spacing: 1px;
  }
`;

export default function MobileMenu({ open, setOpen }) {
  return (
    <>
      <MobileMenuStyles>
        <ul>
          {menuItems.map((item, i) => (
            <li key={i}>
              <Link to={item.link} onClick={() => setOpen(!open)}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </MobileMenuStyles>
    </>
  );
}
