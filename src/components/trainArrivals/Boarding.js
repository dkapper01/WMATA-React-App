import React from "react";

const Boarding = ({ item }) => {
  return (
    <div>
      {item.Line} is <b>Boarding Now</b> and going to {item.DestinationName}
    </div>
  );
};

export default Boarding;
