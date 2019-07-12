import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import NextTrain from "./NextTrain";

function SelectList() {
  const [data, setData] = useState({ Stations: [] });
  const [selectValue, setSelectValue] = useState("BL");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const result = await axios(
        `https://api.wmata.com/Rail.svc/json/jStations?LineCode=${selectValue}&api_key=12ba0c80cc534a579c199d73c52dd49a`
      );
      setData(result.data);
      setIsLoading(false);
    };

    fetchData();
  }, [selectValue]);

  const colors = {
    BL: "blue",
    GR: "green",
    RD: "red",
    YL: "yellow",
    SV: "silver",
    OR: "orange"
  };

  function NewColors(color) {
    return (
      <TrainStop style={{"backgroundColor": colors[color]}}>
        <span role="img" aria-label="train">
          🚇
        </span>{" "}
        {colors[color]}
      </TrainStop>
    );
  }
  
  return (
    <AppWrapper>
      <h1>{process.env.API_URL}</h1>
      <select
        value={selectValue}
        onChange={e => setSelectValue(e.target.value)}
      >
        <option value="BL">Blue Line</option>
        <option value="GR">Green Line</option>
        <option value="OR">Orange Line</option>
        <option value="RD">Red Line</option>
        <option value="SV">Silver Line</option>
        <option value="YL">Yellow Line</option>
      </select>
      {isLoading ? (
        <div>Loading</div>
      ) : (
        <div>
          {data.Stations.map((item, index) => (
            <div className="trainBox" key={index}>
              <b>{item.Name}</b>: {item.Address.Street}{" "}
              <NextTrain Code={item.Code} />
              <ul>
                {item.LineCode1 ? NewColors(item.LineCode1) : ""}
                {item.LineCode2 ? NewColors(item.LineCode2) : ""}
                {item.LineCode3 ? NewColors(item.LineCode3) : ""}
                {item.LineCode4 ? NewColors(item.LineCode4) : ""}
              </ul>
            </div>
          ))}
        </div>
      )}
    </AppWrapper>
  );
}

export default SelectList;

const AppWrapper = styled.div`
  width: 860px;
  margin: 0 auto;
  font-size: 1.3rem;

  select {
    width: 100%;
    font-size: 1.3rem;
    margin-bottom: 1.3rem;
  }
  ul {
    margin: 0;
    list-style-type: none;
    padding: 0;
  }
  .trainBox {
    margin-bottom: 1.3rem;
    text-align: center;
  }
`;

const TrainStop = styled.li`
  color: white;
  font-weight: bold;
  padding: 0.5rem;
  border-radius: 50px;
  border: 1px solid black;
  margin-bottom: 2px;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
  text-align: left;
`;

// const blue = { backgroundColor: "blue" };
// const green = { backgroundColor: "green" };
// const orange = { backgroundColor: "orange" };
// const red = { backgroundColor: "red" };
// const silver = { backgroundColor: "silver" };
// const yellow = { backgroundColor: "yellow" };
