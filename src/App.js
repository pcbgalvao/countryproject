import axios from "axios";

import React, { useState, useEffect } from "react";
import Dropdown from "./components/Dropdown";
import SideBar from "./components/SideBar";
import ListCountriesInfo from "./components/ListCountriesInfo";

import contriesData from "./data/contriesData";

const REGIONS = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

const App = () => {
  const [region, setRegion] = useState("");
  const [countriesList, setCountriesList] = useState(contriesData);

  //  useEffect(() => {
  //
  //if (region) {
  //      const doGetCountry = async () => {
  //const { data } = await axios.get(
  //          `https://restcountries.eu/rest/v2/region/${region}`,
  //{},
  //{}
  //);
  //setCountriesList(
  //          data.map((country) => {
  //return { ...country, checked: false };
  //})
  //);
  //};
  //doGetCountry();
  //}
  //}, [region]);

  console.count("App");
  return (
    <div className="ui grid container">
      <div className="ten wide gray column">
        <Dropdown
          label="Select a Region"
          regions={REGIONS}
          selected={region}
          onSelectedChange={setRegion}
        />
        <ListCountriesInfo countriesList={countriesList} />
      </div>
      <div className="four wide yellow column">
        <SideBar
          region={region}
          countriesList={countriesList}
          setCountriesList={setCountriesList}
        />
      </div>
    </div>
  );
};

export default App;
