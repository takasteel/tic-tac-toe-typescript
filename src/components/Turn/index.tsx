import { useTurn } from '../../hooks/useTurn';
import { TurnText } from './styles'
export function Turn() {
  const { turn } = useTurn();

  return(
    <TurnText>
      {turn ? (
        <>O's turn</>
      ) : (
        <>X's turn</>
      )}
    </TurnText>
  );
}