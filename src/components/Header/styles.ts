import styled from "styled-components";

export const Container = styled.header`
  width: 80%;
  max-width: 1440px;
  margin: auto;
  padding: 3.75rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .header-logo{
    position: relative;
    width: 12rem;
    height: 2.2rem;
  }
  .menu-list{
    list-style: none;
    display: flex;
    align-items: baseline;
    gap: 2.5rem;

    &-item{
      font-family: 'Oswald','Poppins';
      font-size: 1.5rem;
      line-height: 1.5rem;
      &-profile{
        display: flex;
        align-items: baseline;
        gap: 0.75rem;
      }
    }
  }
`;