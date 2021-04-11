import styled from "styled-components";

export const BoardContainer = styled.div`
  display: grid;
  grid-template-areas: 
    "s1 s2 s3"
    "s4 s5 s6"
    "s7 s8 s9";
  align-items: center;
  justify-items: center;
  gap: 0.5rem;
  border: 0.5rem solid black;
  width: 400px;
  height: 400px;
  max-width: 60vw;
  max-height: 60vw;
  background: black;
  margin: 5rem 0;
`;
