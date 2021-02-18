import React from 'react';
import styled from 'styled-components';
import { VscGlobe } from 'react-icons/vsc';
import { FaYoutube } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaSpotify } from 'react-icons/fa';
import { FaFacebookSquare } from 'react-icons/fa';

const SocialContainer = styled.div`
  margin: 7rem auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  justify-content: space-around;
  max-width: 60%;
  text-align: center;
  svg {
    width: 70px;
    height: 70px;
  }
  .spotify,
  .insta,
  .youtube,
  .www,
  .facebook {
    transition: all 0.2s ease-in-out;
  }
  .spotify {
    fill: #1db954;
  }

  .insta {
    fill: #dd2a7b;
  }
  .youtube {
    fill: #ff0000;
  }
  .www {
    fill: #282828;
  }
  .facebook {
    fill: #3b5998;
  }

  .spotify:hover,
  .insta:hover,
  .youtube:hover,
  .www:hover,
  .facebook:hover {
    transform: scale(1.1);
    cursor: pointer;
  }

  .spotify:hover {
    fill: #2bde6a;
  }
  .insta:hover {
    fill: #515bd4;
  }
  .youtube:hover {
    fill: #f33;
  }
  .www:hover {
    fill: #414141;
  }
  .facebook:hover {
    fill: #4c70ba;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(40px, 1fr));
    max-width: 90%;
    margin: 4rem auto;
    svg {
      width: 40px;
      height: 40px;
    }
  }
`;

const Social = ({ web, youtube, instagram, spotify, facebook }) => {
  return (
    <SocialContainer>
      {web && (
        <a href={web} target="_blank" rel="noreferrer">
          <VscGlobe className="www" />
        </a>
      )}
      {facebook && (
        <a href={facebook} target="_blank" rel="noreferrer">
          <FaFacebookSquare className="facebook" />
        </a>
      )}
      {youtube && (
        <a href={youtube} target="_blank" rel="noreferrer">
          <FaYoutube className="youtube" />
        </a>
      )}
      {instagram && (
        <a href={instagram} target="_blank" rel="noreferrer">
          <FaInstagram className="insta" />
        </a>
      )}
      {spotify && (
        <a href={spotify} target="_blank" rel="noreferrer">
          <FaSpotify className="spotify" />
        </a>
      )}
    </SocialContainer>
  );
};

export default Social;
