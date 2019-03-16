import React from 'react';
import BoxImg from '../public/box.png';

const Doclist = () => {
  return (
    <div className="w3-row w3-flex w3-flex-column w3-flex-full-center">
      <div className="w3-section w3-center">
        <img alt="A box" src={BoxImg} />
        <h1 className="w3-center">Documents</h1>
      </div>
      <div className="w3-col l8 m10 s12 w3-container w3-card w3-section">
        <div className="w3-section">
          <h2 className="w3-center w3-text-secondary">Filters</h2>
        </div>
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
              className="w3-button w3-danger w3-round w3-section"
              style={{ margin: 'auto' }}
            >
              Remove filter
            </div>
            <div className="w3-block w3-section w3-border-bottom" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doclist;
