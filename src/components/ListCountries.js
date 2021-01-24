import axios from "axios";
import React, { useState, useEffect } from "react";

const ListCountries = ({ region, country }) => {
  const [deboundedCountry, setDebouncedCountry] = useState(country);
  const [countriesList, setCountriesList] = useState([]);
  const [selectedCountries, setSelectedCountries] = useState(countriesList);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedCountry(country);
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, [country]);

  useEffect(() => {
    console.log(region);
    const doGetCountry = async () => {
      const { data } = await axios.get(
        `https://restcountries.eu/rest/v2/region/${region}`,
        {},
        {}
      );
      setCountriesList(data);
    };
    doGetCountry();
  }, [region]);

  const renderedCountriesNames =
    countriesList.map(country => {
      return (
        <div>
          {country.name}
        </div>
      );
    });

  console.log(renderedCountriesNames);

  return (
    <div>
      <h1 className="ui header">{country}</h1>
      {renderedCountriesNames}
    </div>
  );
};

export default ListCountries;
