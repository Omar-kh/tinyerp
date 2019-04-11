import React, { Component } from 'react';
import HomeItem from './HomeItem';
import MainSearch from './MainSearch';

class Homescreen extends Component {
  state = {
    homeItems: ['Items', 'Stock', 'Sales', 'Orders', 'Payments', 'Deliveries']
  };

  render = () => {
    const { homeItems } = this.state;
    return (
      <div className="w3-row-padding w3-flex-stretch w3-flex w3-flex-column w3-flex-full-center">
        <MainSearch />
        <div className="w3-row w3-twothird w3-flex w3-flex-hcenter w3-multiline">
          {homeItems.map(homeItem => {
            return <HomeItem itemName={homeItem} />;
          })}
        </div>
      </div>
    );
  };
}

export default Homescreen;
