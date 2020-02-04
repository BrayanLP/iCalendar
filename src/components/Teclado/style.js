import styled from '@emotion/styled';

export const TecladoWrapper = styled.div`
  form {
    margin-bottom: 1.5rem;
    input {
      border: none;
      // border-bottom: 1px solid gray;
      font-size: 35px;
      border-radius: 5px;
      width: 100%;
      text-align: center;
      // background: red;
      outline: none;
    }
  }
  ul {
    display: grid;
    grid-template-columns: 70px 70px 70px;
    padding: 0;
    margin: 0;
    grid-gap: 1rem;
    justify-content: center;
    align-items: center;
    li {
      list-style: none;
      width: 70px;
      height: 70px;
      border: 1px solid gray;
      color: gray;
      border-radius: 50%;
      display: grid;
      align-items: center;
      cursor: pointer;
      &:hover {
        background: #3c79dd;
        border-color: #3c79dd;
        color: white;
        box-shadow: 0 3px 5px rgba(0, 0, 0, 0.4);
      }
      &:nth-child(10) {
        grid-column: 2;
        grid-row: 4;
      }
      &:nth-child(11) {
        grid-column: 3;
        grid-row: 4;
        background: red;
        border-color: red;
        svg {
          color: white;
        }
      }
      svg {
        width: 100%;
      }
    }
  }
`;
