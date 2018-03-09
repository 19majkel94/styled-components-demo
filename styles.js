import { css } from "styled-components";

export const roundedBorder = (px) => css`
  border: 3px solid ${props => props.color || "inherit"};
  border-radius: ${px}px;
`;