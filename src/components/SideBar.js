import React from "react";
import { connect } from 'react-redux';
import ListCountries from "./ListCountries";
import * as MODE from './types'

const SideBar = ({ region, children }) => {
  console.count("SideBar");

  if (region) {
    return (
      <div className="ui list">        
        <div className="ui row">
          {children}
        </div>
      </div>
    );
  }
  return null;

}

const mapStateToProps = (state) => {
  return {
    region: state.region,
  };
};

export default connect(mapStateToProps, null)(SideBar);
