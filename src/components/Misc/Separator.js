import styled from 'styled-components';

const Separator = styled.div`
  height: ${({ y }) => y || 10}px;
  width:  ${({ x }) => x || 10}px;
  border-radius: 100%;
`;

export default Separator;