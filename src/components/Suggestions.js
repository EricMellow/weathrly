import React, { Component } from 'react';
import './styles/Search.css';

const Suggestions = (suggestionArray) => {
  const suggestionsList = suggestionArray.map((city,index) => {

    return (
      <option
        key={index}
        value={city.word}
        key={index}
      />
    );
  });

  return (
    <datalist id='cities' className ='cities'>
    {suggestionsList}
    </datalist>
  );
};

export default Suggestions;