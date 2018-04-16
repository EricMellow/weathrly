import React, { Component } from 'react';

const Suggestions = (suggestionArray) => {
  const suggestionsList = suggestionArray.map((city) => {
    return (
      <option
        value={city.word}
      />
    );
  });

  return (
    <datalist id='cities'>
    {suggestionsList}
    </datalist>
  );
};

export default Suggestions;