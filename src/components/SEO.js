import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

export default function SEO({ children, location, description, title, image }) {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  return (
    <Helmet titleTemplate={`%s | ${site.siteMetadata.title}`}>
      <html lang="hu" />
      <title>{title}</title>
      {/* Fav Icons */}
      <link rel="icon" type="image/png" href="/favicon.png" />
      <link rel="alternate icon" href="/favicon.ico" />
      {/* Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="utf-8" />
      <meta name="description" content={site.siteMetadata.description} />
      <link rel="canonical" href={site.siteMetadata.siteUrl} />
      {/* Open Graph */}
      {location && <meta property="og:url" content={location.href} />}
      <meta property="og:image" content={image || '/FMZ_logo.svg'} />
      <meta property="og:title" content={title} key="ogtitle" />
      <meta
        propery="og:site_name"
        content={site.siteMetadata.title}
        key="ogsitename"
      />
      <meta property="og:description" content={description} key="ogdesc" />
      <meta
        name="google-site-verification"
        content="LqeTgYMYUKUJadV3YIJyZ7bo9VBHRBEfyHG6z5e5KpE"
      />
      {children}
    </Helmet>
  );
}
