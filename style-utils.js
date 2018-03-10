import { css, keyframes } from "styled-components";

export const roundedBorder = px => css`
  border: 3px solid ${props => props.color || "inherit"};
  border-radius: ${px}px;
`;

export const swingAnimation = deg => keyframes`
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(-${deg}deg);
  }
  50% {
    transform: rotate(0deg);
  }
  75% {
    transform: rotate(${deg}deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;

export const media = {
  handheld: (...args) => css`
    @media (max-width: 420px) {
      ${css(...args)};
    }
  `
};
