import React from 'react';
import SideMenuBar from '../SideMenuBar/SideMenuBar';
import NavBar from '../NavBar/NavBar';
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';
import Help from '../Help/Help';
import './Layout.scss';

class Layout extends React.Component {
  render() {
    const { location } = this.props;
    console.log(location.pathname);
    return (
      <div>
        <SideMenuBar />
        <main className="app">
          <div className="app-wrapper">
            <NavBar />
            <div className="app-container">
              <div className="container">
                <div className="page-nav">
                  <BreadCrumbs />
                  <Help />
                </div>
              </div>
              {this.props.children}
            </div>
          </div>
        </main>
      </div>
    );
  }
}
export default Layout;
