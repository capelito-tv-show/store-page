import React from "react";
import { compose, withState, withHandlers } from "recompose";
import Selector from "../components/Selector";

const TasteSelector = (acidity, freg, bitter, Acidity, Freg, Bitter) => {
  return (
    <div>
      <Selector value={acidity} onChange={Acidity} />
      <Selector value={freg} onChange={Freg} />
      <Selector value={bitter} onChange={Bitter} />
    </div>
  );
};

export default TasteSelector;
