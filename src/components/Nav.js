import React from 'react';
import { Link } from 'gatsby';

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Főoldal</Link>
        </li>
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
    </nav>
  );
}
