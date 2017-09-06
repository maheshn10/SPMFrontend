import React from 'react';
import SideMenuBar from '../SideMenuBar/SideMenuBar';
import NavBar from '../NavBar/NavBar';
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';
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
            <BreadCrumbs />
            {this.props.children}
          </div>
        </main>
      </div>
    );
  }
}
export default Layout;
