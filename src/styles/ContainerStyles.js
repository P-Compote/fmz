import styled from 'styled-components';
import breakpoint from '../utils/breakpoints';

const ContainerStyles = styled.div`
  max-width: var(--container);
  margin: 0 auto;
  @media screen and ${breakpoint.device.xl} {
    margin-left: 2rem;
    margin-right: 2rem;
  } ;
`;

export default ContainerStyles;
