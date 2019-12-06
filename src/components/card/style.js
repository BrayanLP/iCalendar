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

export const CardDashboard = styled.div`
  width: 230px;
  min-width: 230px;
  height: 100px;
  background: white;
  color: white;
  margin: 1rem;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
  font-size: 20px;
  border-radius: 1rem;
  &:hover {
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  }
  .title {
    font-weight: bold;
    font-size: 24px;
    padding-bottom: 6px;
  }
  &:nth-child(n) {
    background: #18dcff;
  }
  &:nth-child(2n) {
    background: #ffaf40;
  }
  &:nth-child(3n) {
    background: #7158e2;
  }
  &:nth-child(4n) {
    background: #3ae374;
  }
  &:nth-child(5n) {
    background: #4b4b4b;
  }
`;
export const CardDashboardLists = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: scroll;
`;

export const Col2 = styled.section`
  display: flex;
  flex-flow: row;
  & > div {
    margin: 1rem;
    padding: 1rem;
    border-radius: 1rem;
    width: 50%;
    background: white;
    height: 450px;
    overflow-y: auto;
  }
`;
