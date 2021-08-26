import { Link } from "gatsby";
import * as React from "react";
import styled from "styled-components";

const Button = ({ text, primary, path }) => {
  return (
    <ButtonWrapper to={path} primary={primary}>
      {text}
    </ButtonWrapper>
  );
};

export default Button;

const ButtonWrapper = styled(Link)`
  background: ${({ primary, theme }) =>
    primary ? theme.primaryColors.peach : theme.primaryColors.white};
  border: none;
  border-radius: 8px;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  color: ${({ primary, theme }) =>
    primary ? theme.primaryColors.white : theme.primaryColors.black};
  display: inline-block;
  font-size: 1.5rem;
  font-weight: medium;
  letter-spacing: 1px;
  line-height: 21px;
  margin: 2rem 0;
  padding: 1.8rem 2rem;
  position: relative;
  text-decoration: none;
  z-index: 30;

  :hover {
    background: rgb(255, 173, 155);
    color: rgb(255, 255, 255);
  }
`;
