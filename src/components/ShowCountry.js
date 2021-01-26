import React, { useEffect, useState } from "react";

const ShowCountry = ({ country, onInputSelectCountry }) => {
  const [checked, setChecked] = useState(country.checked);

  useEffect(() => {
    onInputSelectCountry(checked, country.name);
  }, [checked]);

  const renderedCountry = (
    <div className="ui checkbox item">
      <div key={country.name}>
        <label className={country.name} htmlFor={country.name}>
          <a>
            <input
              id={country.name}
              type="checkbox"
              name={country.name}
              checked={checked}
              onClick={(e) => {
                setChecked(e.target.checked);
              }}
              onChange={() => {
                setChecked(!checked);
              }}
            />
          </a>
        </label>
        <p>{country.name}</p>
      </div>
    </div>
  );
  console.count("ShowCountry");
  console.log(country.name, country.checked);
  return (
    <div>
      <div className="ui list">{renderedCountry}</div>
    </div>
  );
};

export default ShowCountry;
