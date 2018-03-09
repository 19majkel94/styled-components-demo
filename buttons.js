import React, { Fragment } from "react";
import styled from "styled-components";

const Button = styled.button.attrs({
  color: props => props.primary ? "#007bff" : props.danger ? "#F66" : "#888",
})`
  background-color: transparent;
  border: 3px solid ${props => props.color};
  border-radius: 10px;
  padding: 8px 16px;
  font-size: 14px;
  color: ${props => props.color};
  transition: transform .1s ease-in-out;

  &:hover {
    cursor: ${props => props.disabled ? "no-drop": "pointer"};
  }
  &:focus {
    outline: none;
  }
  &:active {
    transform: scale(0.9);
  }
`;

export default () => (
  <Fragment>
    <Button>Press me!</Button>
    <Button primary>Press me!</Button>
    <Button danger>Press me!</Button>
    <Button primary disabled>Press me!</Button>
  </Fragment>
);
