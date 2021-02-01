import React from "react";
import ListCountries from "./ListCountries";
import * as MODE from './types'

const SideBar = ({ region, countriesList, setCountriesList }) => {
  console.count("SideBar");
  return (
    <div className="ui list">
      <div className="ui centered header">Region: {region}</div>
      <ListCountries mode={MODE.WRITE} />
    </div>
  );
};

export default SideBar;
