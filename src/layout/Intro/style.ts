import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  0%{
    transform: rotate(0deg);
  }
  50%{
    transform: rotate(-10deg);
  }
  100%{
    transform: rotate(0deg);
  }
`;

export const Container = styled.section`
  position: relative;
  width: 80%;
  max-width: 1600px;
  margin: auto;
  padding-top: 3.75rem;
  padding-bottom: 7.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .l-intro {
    &-title {
      font-family: "Oswald", "Poppins";
      font-weight: 600;
      font-size: 2.5rem;
      letter-spacing: 0.02em;
      line-height: 4rem;
      color: var(--gray11);
      &-span {
        border-bottom: 0.375rem solid var(--green3);
      }
    }
    &-text {
      font-size: 1.5rem;
      line-height: 2.25rem;
      font-weight: 600;
      color: var(--gray9);
      font-family: "Roboto", "Arial";
      width: 22.5rem;
      margin-top: 1.25rem;
      margin-bottom: 2rem;
    }
  }
  .l-image-home {
    width: 50%;
    .wrapper {
      animation: ${rotate} 4s linear infinite;
      padding-bottom: 50.6%;
      width: 100%;
      position: relative;
    }
  }
  .sep {
    position: absolute;
    bottom: 2.5rem;
    height: 3rem;
    width: 3rem;
  }
`;
