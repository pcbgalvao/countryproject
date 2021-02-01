import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import {selectedRegion} from './../actions';

const label = "Select a Region";
const REGIONS = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

const Dropdown = ({ region, selectedRegion }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    console.log("Dropdown Component useEffect SIDE EFFECT");
    const onBodyClick = (event) => {
      if (ref.current && ref.current.contains(event.target)) {
        return;
      }
      setOpen(false);
      //onSelectedChange("");
    };

    document.body.addEventListener("click", onBodyClick, { capture: true });

    return () => {
      console.log("Dropdown Component useEffect CLEANUP");
      document.body.removeEventListener("click", onBodyClick);
    };
  }, [region]);

  const renderedRegions = REGIONS.map((item_region) => {
    if (item_region === region) {
      return null;
    }

    return (
      <div
        key={item_region}
        className="item"
        onClick={() => selectedRegion(item_region)}
      >
        {item_region}
      </div>
    );
  });

  const onMenuFocus = (event) => {
    //event.preventDefault();
  };

  console.log("dropdown-ref.current", ref.current);
  console.count("DropDown");

  return (
    <div>
      <div ref={ref} className="ui form">
        <div className="field">
          <label className="label">{label}</label>
          <div
            onFocus={onMenuFocus}
            className={`ui selection dropdown ${open ? "visible active" : ""}`}
            onClick={() => setOpen(!open)}
          >
            <i className="dropdown icon"></i>
            <div className="text">{region}</div>
            <div className={`menu ${open ? "visible transition" : ""} `}>
              {renderedRegions}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    region: state.region,
    };
};

export default connect(mapStateToProps, { selectedRegion })(
  Dropdown
);

