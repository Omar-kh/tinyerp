import React, { Component } from 'react';
import HomeItem from './HomeItem';

class Homescreen extends Component {
  state = {
    homeItems: ['Items', 'Stock', 'Sales', 'Orders', 'Payments', 'Deliveries']
  };

  render = () => {
    const { homeItems } = this.state;
    return (
      <div className="homescreen w3-row-padding w3-flex-full-center">
        <div className="w3-row w3-twothird w3-flex-hcenter w3-multiline">
          {homeItems.map(homeItem => {
            return <HomeItem itemName={homeItem} />;
          })}
        </div>
      </div>
    );
  };
}

export default Homescreen;
