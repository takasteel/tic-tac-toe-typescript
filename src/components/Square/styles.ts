import styled from 'styled-components';

interface MarkProps {
  type: string | null,
}

export const SquareContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: white;
  transition: background-color 0.3s;

  &:hover, :focus {
    cursor: pointer;
    background-color: #f0f0f0;
  }
`;

export const Mark = styled.p<MarkProps>`
  color: ${props => props.type === 'O' ? 'red' : 'blue'};
  position: absolute;
  font-size: 3.8rem;
`;