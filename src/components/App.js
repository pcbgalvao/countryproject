import React, { useState, useEffect } from "react";
import Dropdown from "./Dropdown";
import SideBar from "./SideBar";
import ListCountries from "./ListCountries";
import * as MODE from './types';

const App = () => {
  const countCheckedCountries = 0;
  const COUNTRY_FIELDS = {
    [MODE.READ]: ['name', 'flag', 'area'],
    [MODE.WRITE]: ['name', 'flag'],
  }

  console.count("App");

  return (
    <div>
      <div className="ui container">
        <div className="menu">
          <Dropdown />
        </div>
      </div>
      <div className="ui segment">
        <div className="ui grid container">
          <div className="six wide light-blue column">
            <ListCountries mode={MODE.WRITE} />
          </div>

          <div className="five wide light-grey column">
            <SideBar>
              <ListCountries mode={MODE.READ} />
            </SideBar>
          </div>

          <div className="five wide light-grey column">
            <SideBar>
              <ListCountries mode={MODE.INFO} />
            </SideBar>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
