import styled from 'styled-components';

export const ScoreContainer = styled.div`
  display: flex;
  width: 400px;
  max-width: 60vw;
  gap: 60px;
  div {
    display: flex;
    justify-content: space-around;
    width: 200px;
    max-width: 30vw;
    &:first-of-type {
      span:first-of-type {
        color: blue;
      }
    }
    &:last-of-type {
      span:first-of-type {
        color: red;
      }
    }
    span {
      font-size: 1.5rem;
      font-weight: bold;
    }
  }  
`;
