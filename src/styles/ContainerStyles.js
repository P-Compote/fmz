import styled from 'styled-components';

const ContainerStyles = styled.div`
  max-width: var(--container);
  margin: 0 auto;
  @media screen and (max-width: 1130px) {
    margin-left: 3.5rem;
    margin-right: 3.5rem;
  } ;
`;

export default ContainerStyles;
