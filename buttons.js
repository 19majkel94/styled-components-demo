import React, { Fragment } from "react";
import styled, { css, ThemeProvider } from "styled-components";
import color from "color";

import ButtonsWrapper, { Wrapper } from "./buttons-wrapper";
import { roundedBorder, swingAnimation } from "./style-utils";
import { Colors, Layout, Typography } from "./consts";
const { baseFontSize } = Typography;

function getColor(props) {
  let buttonColor = props.primary ? "#007bff" : props.danger ? "#F66" : Colors.gray;
  if (props.darken) {
    buttonColor = color(buttonColor).darken(0.25).hex();
  }
  return buttonColor;
}

export const Button = styled.button.attrs({
  color: props => props.color || getColor(props),
  transitiontime: props => props.theme.transitionTime || "1.5s",
})`
  background-color: transparent;
  ${roundedBorder(20)}
  padding: ${Layout.padding / 2}px ${Layout.padding}px;
  font-size: ${baseFontSize};
  color: ${props => props.color};
  transition: transform ${props => props.transitiontime} ease-in-out;

  &:hover {
    ${props => !props.disabled && css`
      animation: ${swingAnimation(10)} .5s linear;
    `}
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

  ${ButtonsWrapper}:hover & {
    opacity: 0.5;
  }
`;

const Link = Button.withComponent("a");

const firstTheme = { transitionTime: ".1s" };
const secondTheme = { transitionTime: ".75s" };

export default () => (
  <ButtonsWrapper>
    <ThemeProvider theme={firstTheme}>
      <Fragment>
        <Button>Press me!</Button>
        <Button primary>Press me!</Button>
        <Button primary darken>Press me!</Button>
      </Fragment>
    </ThemeProvider>
    <ThemeProvider theme={secondTheme}>
      <Fragment>
        <Button danger>Press me!</Button>
        <Button primary disabled>Press me!</Button>
        <Button color="palevioletred">Press me!</Button>
        <FullButton>Press me!</FullButton>
        <FullButton danger>Press me!</FullButton>
      </Fragment>
    </ThemeProvider>
    <Link primary href="https://gorrion.io/">Gorrion</Link>
  </ButtonsWrapper>
);
