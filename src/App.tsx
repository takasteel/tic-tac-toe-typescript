import { Board } from "./components/Board";
import { Score } from "./components/Score";
import { Turn } from "./components/Turn";
import { Container } from "./styles";

export function App() {
  return (
    <Container>  
      <Turn />
      <Board />
      <Score />
    </Container>
  );
}