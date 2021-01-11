import React, { useState, useEffect } from 'react';

import axios from 'axios';

const Search = () => {
  const [term, setTerm] = useState('programming');
  const [results, setResults] = useState([]);

  const onInputChange = (event) => {
    setTerm(event.target.value);
  }

  //console.log ("I'm a runners, and always run");

  useEffect (() => {
    const search = async () => {
      const {data} = await axios.get('https://en.wikipedia.org/w/api.php',{
        params: {
          actions: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: term
        }      
      });
      setResults(data.query.search);
    };

    search('');
  }, [term])

  return (
    <div className="ui form">
      <div className="field">
        <label>Enter Search Term</label>
        <input 
          className="input" 
          value={term}
          onChange={onInputChange}
        />
      </div>
    </div>
  )
}

export default Search;