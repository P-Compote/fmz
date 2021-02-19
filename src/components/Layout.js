import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import 'normalize.css';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <Typography />
      <NavBar />
      {children}
      <Footer />
    </>
  );
}
