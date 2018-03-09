import React, { Fragment } from "react";
import styled from "styled-components";

const Button = styled.button`
  background-color: transparent;
  border: 3px solid #CCC;
  border-radius: 10px;
  padding: 8px 16px;
  font-size: 14px;
  color: #666;
  transition: transform .1s ease-in-out;

  &:hover {
    cursor: pointer;
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
  </Fragment>
);
