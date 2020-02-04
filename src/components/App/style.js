import styled from '@emotion/styled';

export const Wrapper = styled.div`
  // background: linear-gradient(45deg, #22272a 30%, #000000 100%);
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    // background-image: url(https://source.unsplash.com/1600x900/?calendar);
    // background-image: url(https://source.unsplash.com/9n1USijYJZ4/1600x900/?calendar);
    background-image: url(https://source.unsplash.com/YH6uA5HlzMM/1600x900/?calendar);
    background-attachment: fixed;
    background-size: cover;
    z-index: -1;
    opacity: 0.9;
  }
`;

export const Main = styled.main`
  margin: 0 auto;
  width: 75%;
  padding: 1rem;
`;
