import React from 'react';
import mockImg from '../public/box.png';

const HomeItem = ({ itemName }) => {
  return (
    <div className="column is-one-fifth-desktop is-half-mobile">
      <div className="is-flex is-horizontally-centered">
        <figure className="image">
          <img
            alt="items"
            src="https://img.icons8.com/dusk/64/000000/commodity.png"
          />
        </figure>
      </div>
      <p className="has-text-centered is-size-4 is-family-primary has-text-weight-semibold">
        {itemName}
      </p>
    </div>
  );
};

export default HomeItem;
