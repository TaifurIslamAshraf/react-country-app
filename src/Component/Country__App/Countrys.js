import React from "react";

import { v4 as uuidv4 } from "uuid";
import Country from "./Country";
import "./fetchData.modiul.css";

const Countrys = (props) => {
  return (
    <div className="country">
      {props.countrys.map((country) => {
        const newCountry = { country, id: uuidv4() };
        return (
          <Country
            {...newCountry}
            key={newCountry.id}
            onRemoveCountry={props.onRemoveCountry}
          />
        );
      })}
    </div>
  );
};

export default Countrys;
