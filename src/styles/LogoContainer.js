import styled from 'styled-components';
import breakpoint from '../utils/breakpoints';

const LogoContainer = styled.div`
  width: 280px;
  height: 100%;
  margin: 4rem auto;
  img {
    display: block;
  }
  @media screen and ${breakpoint.device.md} {
    width: 180px;
    margin: 3rem auto;
  } ;
`;

export default LogoContainer;
