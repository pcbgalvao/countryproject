import React from "react";
import ListCountries from "./ListCountries";

const SideBar = ({ children }) => {
  console.count("SideBar");

  return (    
      <div className="ui row">
        {children}
      </div>    
  );
}


export default SideBar;
