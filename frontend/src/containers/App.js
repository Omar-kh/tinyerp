import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Navbar2 from '../components/Navbar2';
import Homescreen from '../components/Homescreen';
import Docslist from '../components/Docslist';

class App extends Component {
  state = {};

  render = () => {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar2 />
          <Route exact path="/" component={Homescreen} />
          <Route path="/items" component={Docslist} />
        </div>
      </BrowserRouter>
    );
  };
}

export default App;
