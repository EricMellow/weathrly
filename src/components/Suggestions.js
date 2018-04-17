import React from 'react';
import './styles/Search.css';

const Suggestions = (suggestionArray) => {
  const suggestionsList = suggestionArray.map((city, index) => {

    return (
      <option
        key={index}
        value={city.word}
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