import React from "react";
import { render } from "react-dom";
import styled, { injectGlobal } from "styled-components";

import Buttons from "./buttons";

injectGlobal`
  * {
    box-sizing: border-box;
  }
  html, body {
    height: 100%;
    margin: 0;
    font-family: 'Open Sans', sans-serif;
  }
  body {
    padding: 10px;
  }
  #container {
    height: 100%;
  }
`;

const AppWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const AppTitle = styled.h1`
  margin: 12px 6px;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  & > * {
    margin: 12px;
  }
`;

const App = () => (
  <AppWrapper>
    <AppTitle>styled-components demo</AppTitle>
    <ButtonsWrapper>
      <Buttons />
    </ButtonsWrapper>
  </AppWrapper>
);

render(<App />, document.getElementById("container"));
