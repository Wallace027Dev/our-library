import styled from "styled-components";

const Button = styled.button`
  background-color: #ff971d;
  color: #fff;
  border: none;
  font-size: 16px;
  border-radius: 4px;
  transition: background-color 0.3s ease;
  margin-top: 10px;
  height: 48px;
  padding: 4px;
  cursor: pointer;
  width: 100%;

  &:hover {
    background-color: #e6891a;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 3px #ff971d;
  }
`;

const Input = styled.input`
  padding: 4px;
  margin: 5px 0;
  border: 1px solid #f5f6f8;
  border-radius: 4px;
  font-size: 16px;
  width: 100%;

  &:focus {
    border-color: #ff971d;
    outline: none;
    box-shadow: 0 0 3px #ff971d;
  }
`;

const Form = styled.form`
  div {
    margin-top: 8px;
  }
`;

const Wishlist = styled.div`
  display: flex;
  align-items: center;

  button {
    margin-left: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ff971d;
    color: #fff;
    border: none;
    font-size: 16px;
    border-radius: 4px;
    transition: background-color 0.3s ease;
    height: 16px;
    width: 16px;
  }
`;

export { Button, Input, Form, Wishlist };
