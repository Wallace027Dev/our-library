import styled from "styled-components";

const Container = styled.main`
  aside {
    margin-right: 60px;
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  section {
    width: 100%;
    background: #fff;
    min-height: 30vh;
    padding: 42px 85px;
  }
`;

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
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;

  div {
    width: 300px;
  }

  label {
    margin: 16px 0 8px 0;
  }
`;

const LabelWithButton = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;

  button {
    margin-left: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #ff971d;
    color: #fff;
    border: none;
    font-size: 16px;
    border-radius: 4px;
    transition: background-color 0.3s ease;
    height: 16px;
    width: 16px;
  }
`;

const LabelWithInput = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;

  input {
    margin-left: 12px;
    border-radius: 4px;
  }
`;

const CategoryButton = styled(Button)`
  background-color: #fff;
  color: #ff971d;
  border: 2px solid #ff971d;

  &.active {
    background-color: #ff971d;
    color: #fff;
  }

  &:hover {
    background-color: #f5f6f8;
    color: #ff971d;
  }
`;


export { Container, Button, Input, Form, LabelWithButton, LabelWithInput, CategoryButton };
