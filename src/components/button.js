import * as React from "react";
import styled, { css } from "styled-components";
import themes from "../themes/themes";

const Button = ({ text }) => {
  return <ButtonWrapper>{text}</ButtonWrapper>;
};

export default Button;

const ButtonWrapper = styled.button`
  background: ${(props) =>
    props.primary ? "rgb(231,129,107)" : "rgba(255, 255, 255, 1)"};
  border: none;
  border-radius: 8px;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  display: inline-block;
  font-size: 1.5rem;
  font-weight: 500;
  letter-spacing: 1px;
  margin: 2rem 0;
  padding: 1.8rem 2rem;
  position: relative;
  z-index: 30;

  :hover {
    background: rgb(255, 173, 155);
    color: rgb(255, 255, 255);
  }

  ${(props) =>
    props.primary &&
    css`
      background: rgb(231, 129, 107);
    `}
`;
