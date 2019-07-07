import React from "react";

const Coming = ({ item }) => {
  return (
    <div>
      {item.Line} Line is coming in {item.Min} minutes and going to{" "}
      {item.DestinationName}
    </div>
  );
};

export default Coming;
