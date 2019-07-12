import React from "react";
import styled from "styled-components";
import SelectList from "./components/SelectList";

function App() {
  return (
    <AppWrapper>
      <p>www.danielkapper.com</p>
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
