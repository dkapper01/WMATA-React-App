import React from "react";

const Coming = ({ item }) => {
  return (
    <div>
      {item.Line} Line is coming in <i>{item.Min} minutes</i> and going to{" "}
      {item.DestinationName}
    </div>
  );
};

export default Coming;
