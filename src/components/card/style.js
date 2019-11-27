import styled from '@emotion/styled';

export const CardWrapper = styled.div`
  padding: 0;
  background: white;
  width: 450px;
  margin: 0 auto;
  height: 550px;
  text-align: center;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CardTitle = styled.div`
  fon-size: 17px;
  color: #2e2e2e;
  padding: 2rem 0;
`;

export const CardBody = styled.div`
  font-size: 20px;
`;

export const CardFooter = styled.div`
  font-size: 16px;
  color: blue;
  padding-top: 2rem;
  ul {
    padding: 0;
    li {
      list-style: none;
      a {
        padding-bottom: 1rem;
        display: block;
        text-decoration: none;
        color: #3c79dd;
      }
    }
  }
`;
