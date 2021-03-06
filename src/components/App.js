import React, { useState, useEffect } from "react";
import Header from "./Header";
import SideBar from "./SideBar";
import ListCountries from "./ListCountries";
import * as MODE from '../constants';

const App = () => {
  const [selectedRegion, setSelectedRegion] = useState('')
  const countCheckedCountries = 0;

  console.count("App");

  return (
    <div className="ui container">
      <div className="ui segment">
        <div className="ui fixed floated menu">
          <Header selectedRegion={selectedRegion} setSelectedRegion={setSelectedRegion} />
        </div>
      </div>
      <div className="ui segment">
        <div className="ui grid container">
          <div className="six wide light-blue column">
            <ListCountries selectedRegion={selectedRegion} mode={MODE.WRITE} />
          </div>

          <div className="five wide light-grey column">
            <SideBar>
              <ListCountries selectedRegion={selectedRegion} mode={MODE.READ} />
            </SideBar>
          </div>

          <div className="five wide light-grey column">
            <SideBar>
              <ListCountries selectedRegion={selectedRegion} mode={MODE.INFO} />
            </SideBar>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
