/**
 * @file SPM Home.
 * @author Mahesh
 */
import React from 'react';
import DashBoard from '../Dashboard/Dashboard';
import MyFavorite from '../MyFavorite/MyFavorite';
import News from '../News/News';
import './Home.scss';

class Home extends React.Component {
  render() {
    return (
      <div className="landing-wrapper">
        <div className="landing-col landing-col-2-3">
          <DashBoard />
        </div>
        <div className="landing-col landing-col-1-3">
          <div className="landing-tab-column">
            <MyFavorite />
            <News />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
