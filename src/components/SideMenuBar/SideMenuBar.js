import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { getTranslate, getActiveLanguage } from 'react-localize-redux';
import './SideMenuBar.scss';

class SideMenuBar extends React.Component {
  render() {
    return (
      <div className="sidebar">
        <nav className="sidebar-menu" >
          <ul>
            <li>
              <Link className="transition sidebar-item  sidebar-item--active " to="/">
                <div className="sidebar-item-icon sidebar-icon-home" />
                <span className="sidebar-title">{this.props.translate('Home')}</span>
              </Link>
            </li>
            <li>
              <Link className="transition sidebar-item " to="MyTeam">
                <div className="sidebar-item-icon sidebar-icon-my-team" />
                <span className="sidebar-title">{this.props.translate('MyTeam')}</span>
              </Link>
            </li>
            <li>
              <Link className="transition sidebar-item " to="PersonalInfo">
                <div className="sidebar-item-icon sidebar-icon-personal-information" />
                <span className="sidebar-title">{this.props.translate('PersonalInformation')}</span>
              </Link>
            </li>
            <li>
              <Link className="transition sidebar-item " to="JobInfo">
                <div className="sidebar-item-icon sidebar-icon-job-info" />
                <span className="sidebar-title">{this.props.translate('JobInformation')}</span>
              </Link>
            </li>
            <li>
              <Link className="transition sidebar-item " to="Compensation">
                <div className="sidebar-item-icon sidebar-icon-compensation" />
                <span className="sidebar-title">{this.props.translate('Compensation')}</span>
              </Link>
            </li>
            <li>
              <Link className="transition sidebar-item " to="Benefits">
                <div className="sidebar-item-icon sidebar-icon-benefits" />
                <span className="sidebar-title">{this.props.translate('Benefits')}</span>
              </Link>
            </li>
            <li>
              <Link className="transition sidebar-item " to="TimeOff">
                <div className="sidebar-item-icon sidebar-icon-time-off" />
                <span className="sidebar-title">{this.props.translate('TimeOff')}</span>
              </Link>
            </li>
            <li>
              <Link className="transition sidebar-item " to="Organisation">
                <div className="sidebar-item-icon sidebar-icon-org-chart" />
                <span className="sidebar-title">{this.props.translate('OrgChart')}</span>
              </Link>
            </li>
            <li>
              <Link className="transition sidebar-item " to="Workers">
                <div className="sidebar-item-icon sidebar-icon-comparison" />
                <span className="sidebar-title">{this.props.translate('WorkersComparison')}</span>
              </Link>
            </li>
            <li>
              <Link className="transition sidebar-item " to="Development">
                <div className="sidebar-item-icon sidebar-icon-development" />
                <span className="sidebar-title">{this.props.translate('Development')}</span>
              </Link>
            </li>
            <li>
              <Link className="transition sidebar-item " to="Expenses">
                <div className="sidebar-item-icon sidebar-icon-expenses" />
                <span className="sidebar-title">{this.props.translate('Expenses')}</span>
              </Link>
            </li>
            <li>
              <Link className="transition sidebar-item " to="Reports">
                <div className="sidebar-item-icon sidebar-icon-documentation" />
                <span className="sidebar-title">{this.props.translate('Reports')}</span>
              </Link>
            </li>
            <li>
              <Link className="transition sidebar-item " to="Audit">
                <div className="sidebar-item-icon sidebar-icon-audit" />
                <span className="sidebar-title">{this.props.translate('Audit')}</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { translate: getTranslate(state.locale),
    currentLanguage: getActiveLanguage(state.locale).code };
}

export default connect(mapStateToProps)(SideMenuBar);
