import React from "react";
import styled from "styled-components";
import SelectList from "./components/SelectList";

function App() {
  return (
    <AppWrapper>
      <a href="www.danielkapper.com" target="_blank">
        www.danielkapper.com
      </a>
      <h2>Pick a line and see when the next train comes</h2>
      <SelectList />
    </AppWrapper>
  );
}

export default App;

const AppWrapper = styled.div`
  min-width: 960px;
  width: 80vh;
  margin: 0 auto;
  text-align: center;
`;
