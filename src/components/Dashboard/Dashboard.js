import React from 'react';
import { Link } from 'react-router';
import './Dashboard.scss';

class DashBoard extends React.Component {
  render() {
    return (
      <div className="tiles-container">

        <Link className="tile" to="MyTeam">
          <div className="tile-icon tile-icon-my-team"><div className="tile-icon-inner" /></div>
          <h2 className="tile-title">My Team</h2>
        </Link>

        <Link className="tile" to="PersonalInfo">
          <div className="tile-icon tile-icon-personal-information"><div className="tile-icon-inner" /></div>
          <h2 className="tile-title">Personal Information</h2>
        </Link>

        <Link className="tile" to="JobInfo">
          <div className="tile-icon tile-icon-job-info"><div className="tile-icon-inner" /></div>
          <h2 className="tile-title">Job Information</h2>
        </Link>

        <Link className="tile" to="Compensation">
          <div className="tile-icon tile-icon-compensation"><div className="tile-icon-inner" /></div>
          <h2 className="tile-title">Compensation</h2>
        </Link>

        <Link className="tile" to="Benefits">
          <div className="tile-icon tile-icon-benefits"><div className="tile-icon-inner" /></div>
          <h2 className="tile-title">Benefits</h2>
        </Link>

        <Link className="tile" to="TimeOff">
          <div className="tile-icon tile-icon-time-off"><div className="tile-icon-inner" /></div>
          <h2 className="tile-title">Time Off</h2>
        </Link>

        <Link className="tile" to="Organisation">
          <div className="tile-icon tile-icon-org-charts"><div className="tile-icon-inner" /></div>
          <h2 className="tile-title">Org Chart</h2>
        </Link>

        <Link className="tile" to="Workers">
          <div className="tile-icon tile-icon-workers-comparison"><div className="tile-icon-inner" /></div>
          <h2 className="tile-title">Workers Comparison</h2>
        </Link>

        <Link className="tile" to="Development">
          <div className="tile-icon tile-icon-development"><div className="tile-icon-inner" /></div>
          <h2 className="tile-title">Development</h2>
        </Link>

        <Link className="tile" to="Expenses">
          <div className="tile-icon tile-icon-expenses"><div className="tile-icon-inner" /></div>
          <h2 className="tile-title">Expenses</h2>
        </Link>

        <Link className="tile" to="Reports">
          <div className="tile-icon tile-icon-documentation"><div className="tile-icon-inner" /></div>
          <h2 className="tile-title">Reports</h2>
        </Link>

        <Link className="tile" to="Audit">
          <div className="tile-icon tile-icon-audit"><div className="tile-icon-inner" /></div>
          <h2 className="tile-title">Audit</h2>
        </Link>


      </div>
    );
  }
}

export default DashBoard;
