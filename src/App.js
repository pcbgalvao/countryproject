import React, { useState, useEffect } from "react";
import Dropdown from "./components/Dropdown";
import SideBar from "./components/SideBar";
import ListCountriesInfo from "./components/ListCountriesInfo";

const REGIONS = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

const App = () => {
  const [region, setRegion] = useState("");
  const [countriesList, setCountriesList] = useState([]);
  const [activateSearchCI, setActivateSearchCI] = useState(false);

  useEffect(() => {
    const countCheckedCountries = countriesList.filter(
      (country) => country.checked
    );

    setActivateSearchCI(countCheckedCountries.length > 1);
  }, [countriesList]);

  console.count("App");
  return (
    <div className="ui grid container">
      <div className="ten wide gray column">
        <Dropdown
          label="Select a Region"
          regions={REGIONS}
          regionSelected={region}
          setRegion={setRegion}
        />

        <ListCountriesInfo
          activateSearchCI={activateSearchCI}
          countriesList={countriesList}
        />
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
