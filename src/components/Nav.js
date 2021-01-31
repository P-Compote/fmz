import React from 'react';
import { Link } from 'gatsby';

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Főoldal</Link>
          <Link to="/fesztivalok">Fesztiválok</Link>
          <Link to="/zenekarok">Zenekarok</Link>
          <Link to="/oktatas">Oktatás</Link>
        </li>
      </ul>
    </nav>
  );
}
