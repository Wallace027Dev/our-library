import styled from 'styled-components';

export const Container = styled.header`
  margin: 44px 85px;
  height: 500px;

  img.image-hero {
    position: absolute;
    right: 0;
    top: 0;
    z-index: -1;
    width: auto;
    height: 600px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 90px;

  a {
    font-size: 16px;
    font-weight: 500;
    text-decoration: none;
    color: #fff;
  }

  a:not(:first-child) {
    margin-left: 45px;
  }
`;

export const SearchSection = styled.section`
  h1 {
    font-size: 75px;
    font-weight: 700;
  }

  p {
    font-size: 25px;
    margin: 35px 0;
  }
`;

export const SearchBook = styled.div`
  background: #F5F6F8;
  width: 406px;
  height: 60px;
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 0px 15px;

  input {
    background: none;
    border: none;
    color: rgba(0, 0, 0, 0.3);
    width: 100%;
    height: 100%;
    font-size: 16px;
    outline: none; /* Changed from input:focus to here */
  }

  input:focus {
    color: #000;
  }
`;
