import styled from "styled-components";

export const Container = styled.footer`
  background-color: var(--gray12);
  padding: 5rem 0;
  .l-footer-box{
    width: 80%;
    max-width: 1600px;
    margin: auto;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    .l-footer-logo{
      width: 10rem;
    }
    .wrapper-list{
      width: 22.5rem;
      max-width: 30%;
      .l-footer-topic{
        font-family: 'Oswald', 'Poppins';
        margin-bottom: 2rem;
        font-weight: 700;
        font-size: 1.5rem;
        line-height: 2rem;
        letter-spacing: 0.02em;
        color: var(--white);
      }
      .l-footer-list{
        list-style: none;
        &-item{
          font-family: 'Roboto';
          font-weight: 700;
          font-size: 1rem;
          line-height: 2rem;
          color: var(--gray3);
        }
      }
    }
  }
`;