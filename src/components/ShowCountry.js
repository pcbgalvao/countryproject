import React, { useEffect, useState } from "react";

const ShowCountry = ({ country, onInputSelectCountry }) => {
  const [check, setCheck] = useState(false);

  const handleInputChange = (event) => {
    event.preventDefault();
    setCheck(event.target.checked);
    onInputSelectCountry(event.target.checked, event.target.name);
  };

  const renderedCountry = (
    <div className="ui checkbox item">
      <div key={country.name}>
        <form>
          <label>
            <input
              type="checkbox"
              name={country.name}
              checked={check}
              onChange={handleInputChange}
            />
          </label>
        </form>
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
