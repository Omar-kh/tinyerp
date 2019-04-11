import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainContent from './MainContent';
import FullPage from './FullPage';
import Navbar from '../components/Navbar';
import Homescreen from '../components/Homescreen';
import Docslist from '../components/Docslist';
import Sidebar from '../components/Sidebar';
import DocView from '../components/documents/DocView';

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
            <Switch>
              <Route exact path="/" component={Homescreen} />
              <Route exact path="/:documents" component={Docslist} />
              <Route path="/:documents/:docId" component={DocView} />
            </Switch>
          </MainContent>
        </FullPage>
      </BrowserRouter>
    );
  };
}

export default App;
