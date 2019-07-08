import React, { useState, useEffect } from "react";
import axios from "axios";
import Coming from "./trainArrivals/Coming";
import Boarding from "./trainArrivals/Boarding";
import Arriving from "./trainArrivals/Arriving";

function NextTrain({ Code }) {
  const [data, setData] = useState({ Trains: [] });
  const [isLoading, setIsLoading] = useState(false);
  const [isToggle, setToggle] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const result = await axios(
        `https://api.wmata.com/StationPrediction.svc/json/GetPrediction/${Code}?api_key=12ba0c80cc534a579c199d73c52dd49a`
      );
      setData(result.data);
      console.log(result.data);
      setIsLoading(false);
    };
    fetchData();
  }, [Code]);

  console.log(Code + " test");

  function TrainComing(item) {
    switch (item.Min) {
      case "ARR":
        return (
          <div>
            <Arriving item={item} />
          </div>
        );
      case "BRD":
        return (
          <div>
            <Boarding item={item} />
          </div>
        );
      case "---":
        return <div>Empty</div>;
      default:
        return (
          <div>
            <Coming item={item} />
          </div>
        );
    }
  }

  return (
    <div>
      {isLoading ? (
        <div>Loadings</div>
      ) : (
        <div>
          <button onClick={() => setToggle(!isToggle)}>Next Train</button>
          {data.Trains.map((item, index) => (
            <div key={index}>{isToggle && TrainComing(item)}</div>
          ))}
        </div>
      )}
    </div>
  );
}

export default NextTrain;
