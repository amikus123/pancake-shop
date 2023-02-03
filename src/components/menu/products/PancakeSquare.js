import React from "react";

function PancakeSquare({ data }) {
  const { category } = data;
  // on click it will open a modal
  return (
    <div className="square">
      <img src="" alt="" />
      {category}
    </div>
  );
}

export default PancakeSquare;
