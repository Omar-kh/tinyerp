import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import MainContent from './MainContent';
import FullPage from './FullPage';
import Navbar from '../components/Navbar';
import Homescreen from '../components/Homescreen';
import Docslist from '../components/Docslist';
import Sidebar from '../components/Sidebar';

class App extends Component {
  constructor() {
    super();
    this.state = {
      sidebarStyle: {
        display: 'none'
      }
    };
  }

  toggleSidebar = () => {
    const { sidebarStyle } = this.state;
    return sidebarStyle.display === 'none'
      ? this.setState({
          sidebarStyle: {
            display: 'block'
          }
        })
      : this.setState({
          sidebarStyle: {
            display: 'none'
          }
        });
  };

  render = () => {
    const { sidebarStyle } = this.state;
    return (
      <BrowserRouter>
        <FullPage>
          <Navbar toggleSidebar={this.toggleSidebar} />
          <MainContent>
            <Sidebar sideBarStyle={sidebarStyle} />
            <Route exact path="/" component={Homescreen} />
            <Route path="/items" component={Docslist} />
          </MainContent>
        </FullPage>
      </BrowserRouter>
    );
  };
}

export default App;
