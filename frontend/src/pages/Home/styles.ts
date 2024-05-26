import styled from 'styled-components';

export const Container = styled.main`
  background: #f5f6f8;
  width: 100vw;
  min-height: 40vh;
  padding: 90px 0 0 85px;
  display: flex;
  flex-direction: row;


  aside {
    margin-right: 60px;
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    h1 {
      margin-bottom: 18px;
      font-weight: 700;
    }

    h1, button {
      font-size: 24px;
      margin: 12px 0;
    }

    button {
      background: none;
      border: none;
    }

    button:hover {
      color: #ff971d;
      cursor: pointer;
    }
  }

  section {
    width: 100%;
    background: #fff;
    width: 100%;
    min-height: 30vh;
    padding: 42px 75px;

    h1 {
      font-size: 40px;
      font-weight: 500;
      margin-bottom: 60px;
    }

    div {
      display: flex;
      flex-wrap: wrap;
      margin: 10px;
    }
}
`;

export const BookComponent = styled.div`
  display: flex;
  height: 225px;
  flex-grow: 1;
  
  img {
    width: 148px;
    height: 225px;
  }
  
  div {
    display: flex;
    flex-direction: column;
    margin-left: 24px;
    width: 245px;
  }

  h2 {
    font-size: 24px;
    font-weight: 400;
  }

  h3 {
    font-weight: 500;
    margin: 24px 0;
  }

  h3, p {
    font-size: 16px;
    color: rgba(0, 0, 0, 0.6);
  }
`;
