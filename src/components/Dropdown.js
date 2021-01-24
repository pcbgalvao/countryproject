import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({ options, selected, onSelectedChange, label }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    console.log("Dropdown Component useEffect SIDE EFFECT");
    const onBodyClick = (event) => {
      if (ref.current && ref.current.contains(event.target)) {
        return;
      }
      setOpen(false);
      onSelectedChange("");
    };

    document.body.addEventListener("click", onBodyClick, { capture: true });

    return () => {
      console.log("Dropdown Component useEffect CLEANUP");
      document.body.removeEventListener("click", onBodyClick);
    };
  }, []);

  const renderedOptions = options.map((option) => {
    if (option.label === selected.label) {
      return null;
    }

    return (
      <div
        key={option.label}
        className="item"
        onClick={() => onSelectedChange(option)}
      >
        {option.label}
      </div>
    );
  });

  const onMenuFocus = (event) => {
    event.preventDefault();    
  }

  console.log(ref.current);

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
            <div className="text">{selected.label}</div>
            <div className={`menu ${open ? "visible transition" : ""} `}>
              {renderedOptions}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
