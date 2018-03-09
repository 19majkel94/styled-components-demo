import React, { Fragment } from "react";
import styled from "styled-components";
import color from "color";

import { Colors, Layout, Typography } from "./consts";
const { baseFontSize } = Typography;

function getColor(props) {
  let buttonColor = props.primary ? "#007bff" : props.danger ? "#F66" : Colors.gray;
  if (props.darken) {
    buttonColor = color(buttonColor).darken(0.25).hex();
  }
  return buttonColor;
}

const Button = styled.button.attrs({
  color: props => props.color || getColor(props),
})`
  background-color: transparent;
  border: 3px solid ${props => props.color};
  border-radius: 10px;
  padding: ${Layout.padding / 2}px ${Layout.padding}px;
  font-size: ${baseFontSize};
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

const FullButton = Button.extend`
  color: white;
  background-color: ${props => props.color};
`;

const Link = Button.withComponent("a");

export default () => (
  <Fragment>
    <Button>Press me!</Button>
    <Button primary>Press me!</Button>
    <Button primary darken>Press me!</Button>
    <Button danger>Press me!</Button>
    <Button primary disabled>Press me!</Button>
    <Button color="palevioletred">Press me!</Button>
    <FullButton>Press me!</FullButton>
    <FullButton danger>Press me!</FullButton>
    <Link primary href="https://gorrion.io/">Gorrion</Link>
  </Fragment>
);
