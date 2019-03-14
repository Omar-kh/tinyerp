import React, { Component } from 'react';
import HomeItem from './HomeItem';

class Homescreen extends Component {
  state = {
    homeItems: [
      'Items',
      'Stock',
      'Sales',
      'POS',
      'Orders',
      'Payments',
      'Deliveries'
    ]
  };

  render = () => {
    const { homeItems } = this.state;
    return (
      <div className="homescreen w3-row-padding">
        <div className="w3-twothird">
          <div className="">
            {homeItems.map(homeItem => {
              return <HomeItem itemName={homeItem} />;
            })}
          </div>
        </div>
      </div>
    );
  };
}

export default Homescreen;
