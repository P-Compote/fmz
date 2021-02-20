import styled from 'styled-components';
import breakpoint from '../utils/breakpoints';

const ContainerStyles = styled.div`
  max-width: var(--container);
  margin: 0 auto;
  @media screen and ${breakpoint.device.xl} {
    margin-left: 3.5rem;
    margin-right: 3.5rem;
  }
  @media screen and ${breakpoint.device.xs} {
    margin-left: 1.5rem;
    margin-right: 1.5rem;
  }
`;

export default ContainerStyles;
