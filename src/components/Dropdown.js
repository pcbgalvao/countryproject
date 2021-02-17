import React, { useState, useEffect, useRef } from "react";

const label = "Select a Region";
const REGIONS = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

const Dropdown = ({ selectedRegion, setSelectedRegion }) => {
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
      // console.log("Dropdown Component useEffect CLEANUP");
      document.body.removeEventListener("click", onBodyClick);
    };
  }, [selectedRegion]);

  const renderedRegions = REGIONS.map((item_region) => {
    if (item_region === selectedRegion) {
      return null;
    }

    return (
      <div
        key={item_region}
        className="item"
        onClick={() => setSelectedRegion(item_region)}
      >
        {item_region}
      </div>
    );
  });

  const onMenuFocus = (event) => {
    //event.preventDefault();
  };

  //console.log("dropdown-ref.current", ref.current);
  //console.count("DropDown");

  return (
    <div>
      <div className="ui header label">{label}</div>
      <div ref={ref} className="ui fluid form">
        <div className="field">
          <label className="label"></label>
          <div
            onFocus={onMenuFocus}
            className={`ui selection dropdown ${open ? "visible active" : ""}`}
            onClick={() => setOpen(!open)}
          >
            <i className="dropdown icon"></i>
            <div className="text">{selectedRegion}</div>
            <div className={`menu ${open ? "visible transition" : ""} `}>
              {renderedRegions}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;