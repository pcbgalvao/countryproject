import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({ regions, selected, onSelectedChange, label }) => {
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
  }, [selected]);

  const renderedRegions = regions.map((region) => {
    if (region === selected) {
      return null;
    }

    return (
      <div
        key={region}
        className="item"
        onClick={() => onSelectedChange(region)}
      >
        {region}
      </div>
    );
  });

  const onMenuFocus = (event) => {
    event.preventDefault();
  }

  console.log("dropdown-ref.current", ref.current);
  console.count ("DropDown");
  
  return (
    <div>
      <div ref={ref} className="ui form">
        <div className="field">
          <label className="label">{label}</label>
          <div onFocus={onMenuFocus}
            className={`ui selection dropdown ${open ? "visible active" : ""}`}
            onClick={() => setOpen(!open)}
          >
            <i className="dropdown icon"></i>
            <div className="text">{selected}</div>
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
