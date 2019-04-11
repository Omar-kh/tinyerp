import React from 'react';

const ListFilter = () => {
  return (
    <div className="w3-section w3-container">
      <div className="w3-row w3-flex w3-flex-row w3-flex-full-center w3-multiline">
        <select
          type="text"
          className="w3-select w3-round w3-border-primary w3-full-focus w3-col w3-quarter w3-margin"
        >
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </select>
        <select
          type="text"
          className="w3-select w3-round w3-border-primary w3-full-focus w3-col w3-quarter w3-margin"
        >
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </select>
        <select
          type="text"
          className="w3-select w3-round w3-border-primary w3-full-focus w3-col w3-quarter w3-margin"
        >
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </select>
        <div
          className="w3-button w3-text-danger w3-hover-danger w3-border-danger w3-round w3-section"
          style={{ margin: 'auto' }}
        >
          Remove filter
        </div>
      </div>
    </div>
  );
};

export default ListFilter;
