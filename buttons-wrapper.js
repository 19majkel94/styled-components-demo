import React from "react";
import styled from "styled-components";

import { Button } from "./buttons";

export default styled.div`
  width: 100%;
  border: 1px solid darkkhaki;
  display: flex;
  flex-direction: column;
  align-items: center;
  & > * {
    margin: 8px;
  }
`;
