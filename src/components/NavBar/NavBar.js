/**
 * @file SPM NavBar.
 * @author Mahesh
 */
import React from 'react';
import { Link } from 'react-router';
// import { ButtonToolbar, DropdownButton, MenuItem } from 'react-bootstrap';
import './NavBar.scss';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.toggleLanguageDropdown = this.toggleLanguageDropdown.bind(this);
  }
  toggleLanguageDropdown(elementID) {
    const x = document.getElementById(elementID);
    x.classList.toggle('active');
  }

  render() {
    return (
      <div className="navbar">
        <div className="sidebar-logo-block">
          <Link className="sidebar-logo" to="/">
            <img
              className="sidebar-logo-image"
              src="../../assets/images/sidebar/sidebar-logo.svg"
              alt="Go to index"
              title="Go to index"
            />
          </Link>
        </div>
        <div className="navbar-toggle-search">
          <form action="#" className="navbar-search">
            <input type="submit" value="" className="navbar-search-submit" />
            <input
              type="text"
              className="navbar-search-input"
              placeholder="Search"
            />
          </form>
        </div>
        <ul className="navbar-actions">
          <li>
            <a
              className="navbar-action languageNav"
              title="Language"
              onClick={() => this.toggleLanguageDropdown('LanguageDropdown')}
            >
              <div className="navbar-icon navbar-icon-language">
                <span className="badge badge--nav">En</span>
              </div>
              <ul className="take-action box-dropdown-content" id="LanguageDropdown">
                <li>
                  <a>English</a>
                </li>
                <li>
                  <a>German</a>
                </li>
              </ul>
            </a>
          </li>
          <li>
            <a className="navbar-action" title="Show my calendar">
              <div className="navbar-icon navbar-icon-calendar">
                <span className="badge badge--nav">5</span>
              </div>
            </a>
          </li>
          <li>
            <a className="navbar-action" title="Show my messages">
              <div className="navbar-icon navbar-icon-mail">
                <span className="badge badge--nav">15</span>
              </div>
            </a>
          </li>
          <li>
            <a className="navbar-action" title="Show all notifications">
              <div className="navbar-icon navbar-icon-notification">
                <span className="badge badge--nav">99+</span>
              </div>
            </a>
          </li>
          <li>
            <div className="navbar-user">
              <img
                className="navbar-avatar"
                src="../../assets/images/navbar/sample-avatar.png"
                alt="Samruddhi Vairat"
                title="Samruddhi Vairat"
              />
              <span className="navbar-name">
                Samruddhi
                <br />
                Vairat
              </span>
              <div className="navbar-dropdown js-box-dropdown" onClick={() => this.toggleLanguageDropdown('profileDropDown')}>
                <ul className="take-action box-dropdown-content js-box-dropdown-content" id="profileDropDown">
                  <li>
                    <a>User Profile</a>
                  </li>
                  <li>
                    <a>Admin Options</a>
                  </li>
                  <li>
                    <a>Proxy Options</a>
                  </li>
                  <li>
                    <a>Change Language</a>
                  </li>
                  <li>
                    <a>Logout</a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}
export default NavBar;
