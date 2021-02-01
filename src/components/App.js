import React, { useState, useEffect } from "react";
import Dropdown from "./Dropdown";
import SideBar from "./SideBar";
import ListCountries from "./ListCountries";
import * as MODE from './types';

const App = () => {
  const countCheckedCountries = 0;

  console.count("App");
  return (
    <div className="ui grid container">
      <div className="ten wide gray column">
        <Dropdown />
        <ListCountries mode={MODE.READ} />
      </div>
      <div className="six wide yellow column">
        <SideBar />
      </div>
    </div>
  );
};

export default App;
