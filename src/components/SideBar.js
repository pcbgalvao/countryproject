import React from "react";
import ShowCountryList from "./ShowCountryList";

const SideBar = ({
  region,
  countriesList,
  setCountriesList
}) => {
  console.count("SideBar");
  return (
    <div className="ui list">
      <div className="ui centered header">Region: {region}</div>
      <ShowCountryList
        region={region}
        countriesList={countriesList}
        setCountriesList={setCountriesList}        
      />
    </div>
  );
};

export default SideBar;
