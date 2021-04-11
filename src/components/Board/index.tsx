import { useTurn } from "../../hooks/useTurn";
import { Square } from "../Square";
import { BoardContainer } from "./styles";

export function Board() {
  const { handleMarkSquare } = useTurn();  
  return(
    <BoardContainer>
      <Square handleMarkSquare={() => handleMarkSquare(0)} index={0} />
      <Square handleMarkSquare={() => handleMarkSquare(1)} index={1} />
      <Square handleMarkSquare={() => handleMarkSquare(2)} index={2} />
      <Square handleMarkSquare={() => handleMarkSquare(3)} index={3} />
      <Square handleMarkSquare={() => handleMarkSquare(4)} index={4} />
      <Square handleMarkSquare={() => handleMarkSquare(5)} index={5} />
      <Square handleMarkSquare={() => handleMarkSquare(6)} index={6} />
      <Square handleMarkSquare={() => handleMarkSquare(7)} index={7} />
      <Square handleMarkSquare={() => handleMarkSquare(8)} index={8} />
    </BoardContainer>
  );
}