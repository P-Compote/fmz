import styled from 'styled-components';

const LogoContainer = styled.div`
  width: 280px;
  height: 100%;
  margin: 4rem auto;
  img {
    display: block;
  }
  @media screen and (max-width: 768px) {
    width: 180px;
    margin: 3rem auto;
  } ;
`;

export default LogoContainer;
