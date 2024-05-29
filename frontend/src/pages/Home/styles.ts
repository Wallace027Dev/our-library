import styled from 'styled-components';

export const BookComponent = styled.div`
  display: flex;
  min-height: 225px;
  max-width: 460px;
  flex-grow: 1;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  margin: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  img {
    border-radius: 4px;
    width: 148px;
    height: 225px;
    object-fit: cover;
    margin: 12px;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: start;
    margin-left: 24px;
    padding: 20px;
    width: calc(100% - 148px - 48px);

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
  }
`;

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

    p {
      font-size: 24px;
      margin: 12px 0;
      cursor: pointer;
      color: inherit;
      transition: color 0.3s, border-bottom 0.3s;

      &:hover {
        color: #ff971d;
      }
    }
  }

  section {
    width: 100%;
    background: #fff;
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
      margin: -10px;

      ${BookComponent} {
        margin: 10px;
      }
    }
  }
`;

export const CategoryLabel = styled.p<{ isSelected: boolean }>`
  font-size: 24px;
  margin: 12px 0;
  cursor: pointer;
  color: ${props => (props.isSelected ? '#ff971d' : 'black')};
  transition: color 0.3s, border-bottom 0.3s;

  &:hover {
    color: #ff971d;
  }
`;
