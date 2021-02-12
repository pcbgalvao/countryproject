import React from "react";
import ListCountries from "./ListCountries";
import * as MODE from '../constants'

const SideBar = ({ children }) => {
  console.count("SideBar");

  return (    
      <div className="ui row">
        {children}
      </div>    
  );
}


export default SideBar;
