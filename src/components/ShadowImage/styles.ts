import styled, { keyframes } from "styled-components";
const rotate = keyframes`
  0%{
    transform: rotate(0deg);
  }
  50%{
    transform: rotate(-5deg);
  }
  100%{
    transform: rotate(0deg);
  }
`;
export const Container = styled.div`
  width: 100%;
  height: 6rem;
  margin-top: 1rem;
  animation: ${rotate} 4s linear infinite;
  border-radius: 100%;
  background: linear-gradient(187.09deg, #E4E4E4 15.55%, #F1F1F1 94.81%);
`;