import React from "react";
import styled from "styled-components";
import SelectList from "./components/SelectList";
import NextTrain from "./components/NextTrain";

function App() {
  return (
    <AppWrapper>
      <SelectList />
    </AppWrapper>
  );
}

export default App;

const AppWrapper = styled.div`
  width: 960px;
  margin: 0 auto;
`;
