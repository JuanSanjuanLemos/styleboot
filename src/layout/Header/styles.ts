import styled from "styled-components";

export const Container = styled.header`
  width: 80%;
  max-width: 1600px;
  margin: auto;
  padding: 3.75rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .l-header-logo{
    position: relative;
    width: 10rem;
  }
  .menu-list{
    list-style: none;
    display: flex;
    align-items: center;
    gap: 2.5rem;

    &-item{
      font-family: 'Oswald','Poppins';
      font-size: 1.5rem;
      line-height: 2rem;
      transition: 0.2s linear;
      &.-page:hover{
        border-bottom: 0.3rem solid var(--green3);
      }
      &-profile{
        display: flex;
        align-items: center;
        gap: 0.75rem;
      }
    }
  }
`;