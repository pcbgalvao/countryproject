import React from "react";
import ListCountries from "./ListCountries";

const SideBar = (props) => {
  const { region, countriesList, setCountriesList } = props;
  
  console.count ("SideBar");
  return (
    <div className="ui list">
      <div className="ui centered header">
        Region: {region}
        <ListCountries
          region={region}          
          countriesList={countriesList}
          setCountriesList={setCountriesList}
        />
      </div>
    </div>
  );
};

export default SideBar;
