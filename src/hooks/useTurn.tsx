import { ReactNode, useContext, useEffect } from 'react';
import { createContext, useState } from 'react';

interface TurnContextData {
  turn: boolean,
  handleMarkSquare: (index: number) => void,
  squares: string[],
  xWins: number,
  oWins: number,
}

interface TurnProviderProps {
  children: ReactNode;
}

const TurnContext = createContext<TurnContextData>(
  {} as TurnContextData
);


export function TurnProvider({children}: TurnProviderProps) {
  const [turn, setTurn] = useState(false);
  const [squares, setSquares] = useState<string[]>(Array(9).fill(null));
  const [xWins, setXWins] = useState<number>(0); 
  const [oWins, setOWins] = useState<number>(0); 

  const WINNING_POSSIBILITIES = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ]
  console.log(squares);
  const checkCondition = () => {
    for (let i = 0; i < WINNING_POSSIBILITIES.length; i++) {
      const [a, b, c] = WINNING_POSSIBILITIES[i];
      if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
        squares[a] === 'X' ? setXWins(xWins + 1) : setOWins(oWins + 1);
        console.log(squares[a]);
        setSquares(Array(9).fill(null));
      }
    }
    if (squares.every((square: string) => typeof square === 'string')) {
      setSquares(Array(9).fill(null))
    }
  }

  useEffect(() => {
    checkCondition();
  })

  const handleMarkSquare = (index: number) => {
    const squaresCopy = [...squares];
    if (squaresCopy[index] !== null) return
    if (turn) {
      squaresCopy[index] = 'O';
    } else {
      squaresCopy[index] = 'X';
    }
    setTurn(!turn);
    setSquares(squaresCopy as string[]);
  }

  return(
    <TurnContext.Provider value={
      {
        turn,
        handleMarkSquare,
        squares,
        xWins,
        oWins,
      }
    }>
      {children}
    </TurnContext.Provider>
  );
}

export function useTurn() {
  const context = useContext(TurnContext);
  return context;
}