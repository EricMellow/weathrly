import React, { Component } from 'react';
import './styles/Search.css';

const Suggestions = (suggestionArray) => {
  const suggestionsList = suggestionArray.map((city) => {
    return (
      <option
        value={city.word}
      />
    );
  });

  return (
    <datalist id='cities' className = 'cities'>
    {suggestionsList}
    </datalist>
  );
};

export default Suggestions;