import React from 'react';
import { useTurn } from '../../hooks/useTurn';
import { SquareContainer, Mark } from './styles';

interface SquareProps {
  handleMarkSquare: () => void;
  index: number,
}

export function Square({ handleMarkSquare, index }: SquareProps) {
  const { squares } = useTurn();
  return(
    <SquareContainer 
      onClick={handleMarkSquare}
    >
      <Mark type={squares[index]}>{squares[index]}</Mark>
    </SquareContainer>
  );
}