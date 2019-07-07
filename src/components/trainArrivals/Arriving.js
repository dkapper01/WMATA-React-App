import React from "react";

const Arriving = ({ item }) => {
  return (
    <div>
      {item.Line} Line is <b>Arriving</b> and going to {item.DestinationName}
    </div>
  );
};

export default Arriving;
