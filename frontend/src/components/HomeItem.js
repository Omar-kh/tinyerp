import React from 'react';
import mockImg from '../public/box.png';

const HomeItem = ({ itemName }) => {
  return (
    <div className="w3-margin w3-card w3-col l5 m12 s12 w3-row">
      <div
        className="w3-col w3-container w3-flex w3-flex-column w3-flex-full-center w3-vertical-stretch"
        style={{ width: 160 }}
      >
        <img alt="icon" src={mockImg} />
      </div>
      <div className="w3-rest w3-container w3-hover-success w3-vertical-stretch">
        <h2>{itemName}</h2>
        <p>Description goes here for each element of the ERP. Lorem... </p>
      </div>
    </div>
  );
};

export default HomeItem;
