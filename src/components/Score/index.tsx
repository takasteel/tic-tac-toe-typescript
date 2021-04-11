import { useTurn } from "../../hooks/useTurn";
import { ScoreContainer } from "./styles";

export function Score() {
  const { xWins, oWins } = useTurn();
  return(
    <ScoreContainer>
      <div>
        <span>X</span><span>{xWins}</span>
      </div>
      <div>
        <span>O</span><span>{oWins}</span>
      </div>
    </ScoreContainer>
  );
}