import React from "react";
import { GiCook } from "react-icons/gi";
import { RiSpeedFill } from "react-icons/ri";
import { FaLightbulb } from "react-icons/fa";

function Icon({ fun, number, ownNumber }) {
  return (
    <div
      className={`icon ${ownNumber === number ? "active" : "inactive"}`}
      onClick={() => fun(ownNumber)}
    >
      {ownNumber === 1 ? <GiCook /> : null}
      {ownNumber === 2 ? <RiSpeedFill /> : null}
      {ownNumber === 3 ? <FaLightbulb /> : null}
    </div>
  );
}

export default Icon;
