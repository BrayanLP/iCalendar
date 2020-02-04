import styled from '@emotion/styled';

export const Header = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 92px;
  background: white;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  nav {
    height: 92px;
    line-height: 92px;
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    ul {
      margin: 0;
      padding: 0;
      li {
        display: inline-block;

        a {
          margin: 0 1rem;
          color: #22272a;
          text-decoration: none;
        }
      }
    }
  }
`;
