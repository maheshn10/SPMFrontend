/**
 * @file Terminate Component.
 * @author Mahesh
 */
import React from 'react';
import './AddEmployee.scss';

class AddEmployee extends React.Component {
  constructor(props) {
    super(props);
    this.toggleElement = this.toggleElement.bind(this);
    this.tabChange = this.tabChange.bind(this);
  }
  toggleElement(elementID) {
    const x = document.getElementById(elementID);
    x.classList.toggle('active');
  }
  tabChange(e) {
    console.log(e.target);
    if (!e.target.classList.contains('active')) {
      console.log('test');
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <div id="steps-add-employee" className="steps-wrapper">
              <div className="steps">
                <div className="step-app">
                  <div className="steps-placeholder">
                    <div className="steps-nav panel">
                      <ul className="step-steps cd-multi-steps text-top">
                        <li>
                          {' '}
                          <a href="#step1">
                            {' '}
                            <span className="step-text">Identify</span>
                            {' '}
                          </a>
                          {' '}
                        </li>
                        <li>
                          {' '}
                          <a href="#step2">
                            {' '}
                            <span className="step-text">
                              Personal Information
                            </span>
                            {' '}
                          </a>
                          {' '}
                        </li>
                        <li>
                          {' '}
                          <a href="#step3">
                            {' '}
                            <span className="step-text">Job Information</span>
                            {' '}
                          </a>
                          {' '}
                        </li>
                        <li>
                          {' '}
                          <a href="#step4">
                            {' '}
                            <span className="step-text">
                              Compensation Information
                            </span>
                            {' '}
                          </a>
                          {' '}
                        </li>
                      </ul>
                      <div className="step-footer">
                        <button className="step-prev" data-direction="prev">
                          Previous
                        </button>
                        <button className="step-next" data-direction="next">
                          Next
                        </button>
                        <button className="step-save" data-direction="finish">
                          Save
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="step-content">
                    <div className="step-tab-panel" id="step1">
                      <div className="fields-inline panel">
                        <div className="form-field">
                          <label htmlFor="addemp-hire-date">* Hire Date</label>
                          <input
                            type="text"
                            className="entry-input js-datepicker"
                            name="addemp-hire-date"
                            id="addemp-hire-date"
                          />
                        </div>
                        <div className="form-field">
                          <label htmlFor="addemp-company">* Company</label>
                          <select id="addemp-company" className="custom-select">
                            <option value="addemp-company-1">
                              No Selection
                            </option>
                            <option value="addemp-company-2">
                              Company 001
                            </option>
                            <option value="addemp-company-3">
                              Company 002
                            </option>
                          </select>
                        </div>
                        <div className="form-field">
                          <label htmlFor="addemp-reason">* Event Reason</label>
                          <select id="addemp-reason" className="custom-select">
                            <option value="addemp-reason-1">
                              No Selection
                            </option>
                            <option value="addemp-reason-2">Reason 001</option>
                            <option value="addemp-reason-3">Reason 002</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="step-tab-panel" id="step2">
                      <div className="box">
                        <ul className="box-headings js-tabs">
                          <li className="box-heading active">
                            <div className="box-icon">
                              {' '}<svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 41.49 43"
                              >
                                <title>Zasób 3</title>
                                <polygon
                                  points="39.99 5.24 36.25 1.5 16.84 20.91 15.1 26.39 20.58 24.65 39.99 5.24 39.99 5.24"
                                  fill="none"
                                  stroke="#f4f7fa"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="3"
                                />
                                <line
                                  x1="33.22"
                                  y1="4.58"
                                  x2="36.96"
                                  y2="8.32"
                                  fill="none"
                                  stroke="#f4f7fa"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="3"
                                />
                                <polyline
                                  points="32.1 14.08 32.1 41.5 1.5 41.5 1.5 6.62 31.07 6.62"
                                  fill="none"
                                  stroke="#f4f7fa"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="3"
                                />
                                <line
                                  x1="6.75"
                                  y1="14.75"
                                  x2="21.98"
                                  y2="14.75"
                                  fill="none"
                                  stroke="#f4f7fa"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="3"
                                />
                                <line
                                  x1="6.75"
                                  y1="20.65"
                                  x2="16.84"
                                  y2="20.65"
                                  fill="none"
                                  stroke="#f4f7fa"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="3"
                                />
                                <line
                                  x1="6.75"
                                  y1="26.55"
                                  x2="14.73"
                                  y2="26.55"
                                  fill="none"
                                  stroke="#f4f7fa"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="3"
                                />
                              </svg>{' '}
                            </div>
                            <h2 className="box-title">
                              Biographical Information
                            </h2>
                            <ul className="box-actions">
                              <li>
                                {' '}<a href="" title="Help">
                                  {' '}<svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 50 50"
                                  >
                                    <circle
                                      cx="25"
                                      cy="25"
                                      r="24"
                                      fill="none"
                                      stroke="#fff"
                                      strokeLinecap="round"
                                      strokeMiterlimit="10"
                                      strokeWidth="2"
                                    />
                                    <rect width="50" height="50" fill="none" />
                                    <path
                                      d="M23.53,30.41V28.94a4.75,4.75,0,0,1,1.08-3.23l2.4-3.3c1.25-1.72,1.68-2.55,1.68-3.77a3.22,3.22,0,0,0-3.48-3.34c-2,0-3.3,1.22-3.73,3.41a.32.32,0,0,1-.4.29l-2.26-.4a.32.32,0,0,1-.29-.4,6.42,6.42,0,0,1,6.74-5.7c3.87,0,6.49,2.55,6.49,6.1A7.47,7.47,0,0,1,30,23.27l-2.4,3.3a3.7,3.7,0,0,0-.93,2.69V30.4a.34.34,0,0,1-.36.36H23.89A.33.33,0,0,1,23.53,30.41Zm-.18,3.44a.34.34,0,0,1,.36-.36h2.73a.34.34,0,0,1,.36.36v3.08a.34.34,0,0,1-.36.36H23.71a.34.34,0,0,1-.36-.36Z"
                                      fill="#fff"
                                    />
                                  </svg>{' '}
                                </a>{' '}
                              </li>
                            </ul>
                          </li>
                        </ul>
                        <div className="box-content">
                          <div className="box-tab active">
                            <div className="box-inner box-inner--no-pad">
                              <div className="toggler active" id="biographicalInfo">
                                <div className="toggler-bar toggler-bar--no-top js-toggler-bar" onClick={() => this.toggleElement('biographicalInfo')}>
                                  <h2 className="toggler-title">
                                    Biographical Information
                                  </h2>
                                  <span className="box-filter-arrow" />{' '}
                                </div>
                                <div className="toggler-content">
                                  <table className="table table--stripes">
                                    <tbody>
                                      <tr>
                                        <td className="table-align">
                                          <span className="table-label">
                                            Date of Birth
                                          </span>
                                        </td>
                                        <td>
                                          <input
                                            type="text"
                                            className="js-datepicker entry-input"
                                          />
                                        </td>
                                      </tr>
                                      <tr>
                                        <td className="table-align">
                                          <span className="table-label">
                                            Country of Birth
                                          </span>
                                        </td>
                                        <td>
                                          <select className="custom-select">
                                            <option value="v-1">
                                              Drop-down
                                            </option>
                                          </select>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td className="table-align">
                                          <span className="table-label">
                                            Region of Birth
                                          </span>
                                        </td>
                                        <td>
                                          <input
                                            type="text"
                                            className="entry-input"
                                          />
                                        </td>
                                      </tr>
                                      <tr>
                                        <td className="table-align">
                                          <span className="table-label">
                                            Date of Death
                                          </span>
                                        </td>
                                        <td>
                                          <input
                                            type="text"
                                            className="js-datepicker entry-input"
                                          />
                                        </td>
                                      </tr>
                                      <tr>
                                        <td className="table-align">
                                          <span className="table-label">
                                            Employee Id
                                          </span>
                                        </td>
                                        <td>
                                          <input
                                            type="text"
                                            className="entry-input"
                                          />
                                        </td>
                                      </tr>
                                      <tr>
                                        <td className="table-align">
                                          <span className="table-label">
                                            Employee Global Id
                                          </span>
                                        </td>
                                        <td>
                                          <input
                                            type="text"
                                            className="entry-input"
                                          />
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="box">
                        <ul className="box-headings">
                          <li className="box-heading active">
                            <div className="box-icon">
                              {' '}<svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 47.78 43"
                              >
                                <title>Zasób 1</title>
                                <path
                                  d="M35.08,5.12h11.2V41.5H1.5V5.12H12.7m.84-3.62h20.7V8.37H13.54ZM28.29,18H40.17M28.29,22.76H40.17M28.29,27.57H40.17M28.29,32.38h7.49M14.19,25.32A4.45,4.45,0,0,1,11,20.62a3.31,3.31,0,0,1,3.08-3.52h.14a3.31,3.31,0,0,1,3.23,3.39s0,.09,0,.14c0,2.08-.66,3.85-3.22,4.7Zm-3,.55h5.93a3.63,3.63,0,0,1,3.61,3.61v2.88H7.61V29.49a3.62,3.62,0,0,1,3.61-3.61Z"
                                  fill="none"
                                  stroke="#f4f7fa"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="3"
                                />
                              </svg>{' '}
                            </div>
                            <h2 className="box-title">Personal Information</h2>
                            <ul className="box-actions">
                              <li>
                                {' '}<a href="" title="Help">
                                  {' '}<svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 50 50"
                                  >
                                    <circle
                                      cx="25"
                                      cy="25"
                                      r="24"
                                      fill="none"
                                      stroke="#fff"
                                      strokeLinecap="round"
                                      strokeMiterlimit="10"
                                      strokeWidth="2"
                                    />
                                    <rect width="50" height="50" fill="none" />
                                    <path
                                      d="M23.53,30.41V28.94a4.75,4.75,0,0,1,1.08-3.23l2.4-3.3c1.25-1.72,1.68-2.55,1.68-3.77a3.22,3.22,0,0,0-3.48-3.34c-2,0-3.3,1.22-3.73,3.41a.32.32,0,0,1-.4.29l-2.26-.4a.32.32,0,0,1-.29-.4,6.42,6.42,0,0,1,6.74-5.7c3.87,0,6.49,2.55,6.49,6.1A7.47,7.47,0,0,1,30,23.27l-2.4,3.3a3.7,3.7,0,0,0-.93,2.69V30.4a.34.34,0,0,1-.36.36H23.89A.33.33,0,0,1,23.53,30.41Zm-.18,3.44a.34.34,0,0,1,.36-.36h2.73a.34.34,0,0,1,.36.36v3.08a.34.34,0,0,1-.36.36H23.71a.34.34,0,0,1-.36-.36Z"
                                      fill="#fff"
                                    />
                                  </svg>{' '}
                                </a>{' '}
                              </li>
                            </ul>
                          </li>
                        </ul>
                        <div className="box-inner box-inner--no-pad">
                          <div className="toggler active" id="personalInfo">
                            <div className="toggler-bar toggler-bar--no-top js-toggler-bar" onClick={() => this.toggleElement('personalInfo')}>
                              <h2 className="toggler-title">
                                Personal Information
                              </h2>
                              <span className="box-filter-arrow" />{' '}
                            </div>
                            <div className="toggler-content">
                              <table className="table table--stripes">
                                <tbody>
                                  <tr>
                                    <td className="table-align">
                                      <span className="table-label">
                                        First Name:
                                      </span>
                                    </td>
                                    <td>
                                      <input
                                        type="text"
                                        className="entry-input"
                                      />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="table-align">
                                      <span className="table-label">
                                        Last Name:
                                      </span>
                                    </td>
                                    <td>
                                      <input
                                        type="text"
                                        className="entry-input"
                                      />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="table-align">
                                      <span className="table-label">
                                        Middle Name:
                                      </span>
                                    </td>
                                    <td>
                                      <input
                                        type="text"
                                        className="entry-input"
                                      />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="table-align">
                                      <span className="table-label">
                                        Sufix:
                                      </span>
                                    </td>
                                    <td>
                                      <select className="custom-select">
                                        <option value="v-1">Drop-down</option>
                                      </select>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="table-align">
                                      <span className="table-label">
                                        Display Name:
                                      </span>
                                    </td>
                                    <td>
                                      <input
                                        type="text"
                                        className="entry-input"
                                      />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="table-align">
                                      <span className="table-label">
                                        Formal Name:
                                      </span>
                                    </td>
                                    <td>
                                      <input
                                        type="text"
                                        className="entry-input"
                                      />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="table-align">
                                      <span className="table-label">
                                        Title:
                                      </span>
                                    </td>
                                    <td>
                                      <select className="custom-select">
                                        <option value="v-1">Drop-down</option>
                                      </select>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="table-align">
                                      <span className="table-label">
                                        Birth Name:
                                      </span>
                                    </td>
                                    <td>
                                      <input
                                        type="text"
                                        className="entry-input"
                                      />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="table-align">
                                      <span className="table-label">
                                        Initials:
                                      </span>
                                    </td>
                                    <td>
                                      <input
                                        type="text"
                                        className="entry-input"
                                      />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="table-align">
                                      <span className="table-label">
                                        Prefix:
                                      </span>
                                    </td>
                                    <td>
                                      <select className="custom-select">
                                        <option value="v-1">Drop-down</option>
                                      </select>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="table-align">
                                      <span className="table-label">
                                        Gender:
                                      </span>
                                    </td>
                                    <td>
                                      <select className="custom-select">
                                        <option value="v-1">Drop-down</option>
                                      </select>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="table-align">
                                      <span className="table-label">
                                        Marital Status
                                      </span>
                                    </td>
                                    <td>
                                      <select className="custom-select">
                                        <option value="v-1">Drop-down</option>
                                      </select>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="table-align">
                                      <span className="table-label">
                                        Marital Status Since:
                                      </span>
                                    </td>
                                    <td>
                                      <input
                                        type="text"
                                        className="entry-input js-datepicker"
                                      />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="table-align">
                                      <span className="table-label">
                                        Second Nationality:
                                      </span>
                                    </td>
                                    <td>
                                      <select className="custom-select">
                                        <option value="v-1">
                                          Drop-down for ISO Country Code
                                        </option>
                                      </select>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="table-align">
                                      <span className="table-label">
                                        Third Nationality:
                                      </span>
                                    </td>
                                    <td>
                                      <select className="custom-select">
                                        <option value="v-1">
                                          Drop-down for ISO Country Code
                                        </option>
                                      </select>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="table-align">
                                      <span className="table-label">
                                        Native Preferred Language:
                                      </span>
                                    </td>
                                    <td>
                                      <select className="custom-select">
                                        <option value="v-1">
                                          Drop-down for ISO Country Code
                                        </option>
                                      </select>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="table-align">
                                      <span className="table-label">
                                        Challenge Status:
                                      </span>
                                    </td>
                                    <td>
                                      <input
                                        type="text"
                                        className="entry-input"
                                      />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="table-align">
                                      <span className="table-label">
                                        Certificate Start Date:
                                      </span>
                                    </td>
                                    <td>
                                      <input
                                        type="text"
                                        className="entry-input js-datepicker"
                                      />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="table-align">
                                      <span className="table-label">
                                        Certificate End Date:
                                      </span>
                                    </td>
                                    <td>
                                      <input
                                        type="text"
                                        className="entry-input js-datepicker"
                                      />
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div className="toggler active" id="countrySpecificFields">
                            <div className="toggler-bar js-toggler-bar" onClick={() => this.toggleElement('countrySpecificFields')}>
                              <h2 className="toggler-title">
                                Country Specific Fields
                              </h2>
                              <span className="box-filter-arrow" />{' '}
                            </div>
                            <div className="toggler-content">
                              <div className="toggler-content-inner">
                                <div className="table-additional-info">
                                  <div className="table-additional-info-ico">
                                    {' '}<svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      xlink="http://www.w3.org/1999/xlink"
                                      viewBox="0 0 29.79 20"
                                    >
                                      <image
                                        width="70"
                                        height="47"
                                        transform="scale(0.43)"
                                        href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEcAAAAwCAYAAABDl2dmAAAACXBIWXMAABn9AAAZ/QEDysJxAAACfElEQVRoQ+2bzWsTQRTAe7T/WCwWixcRT16sZ71Uz4KIiIhoq0hFaMBWsYkfICgFEam0SimIF7FpG2q7MZ+lTROzm+zzzeDUJKbvjTZh2tl58AuEffN478fuzhySPgDoUxy7tjSAJBEPCRHoFYWTwweBEPGQJDLQ7EKgpBxBpriBuolG4yaYQvrb5cS5YbqNRqOmiO/KwUZj3CC9QKNJk8SUnGlukF6g0aBJEkpOjhukF2g0aBJPyWEH6cTZ+2n4lNph8w6pnMa+5Dx8lwcRQhKXewjlwL7kfFmrSjnx9wU2N1JyTt1ahkYo3cB60WfzIyXn5qsf0BwXH62za9rZqfoHmv+Sc248DfntoEVOZjOACxPf2bVWyXmxsAmzX8uwuFqRLGV+Ql09Tx2iUmvAdrUB2a0AvJIPn9MVe+U8nS/tKYILvx7ClaRnrxzBvZkcEDdLx9jCu2eEeQ9xzZkGdOQILic8COp6hnL4SIn3EleTa840oCtHMP42z3mRwd0xVso5M7bKeZEvY66OnXLu8nJqQQhD11NsLevkXH2e4dzIuDSp91hxJ1TTwL/IeYlnHhXFch3uvM7C+Yk1eVreKPm716Y/ltha1slZydbk8HPfynD69krLtRM3UjD5oSh3tGXM42pZJ0ds0aNvsjBI5Igt/AHualwt6+R0G6450zg5BE4OgZND4OQQODkEUg53jI4qTg6Bk0Pg5BA4OQRODoGTQ+DkEEg53GEoqjg5BE4OgZNDoOTkuMQIkldyEhrJUSOh5MQ0kqPGUSlHfOCXuMaCqPDnF+y/5fQjjzUW2s6TQvt/HxR44TjyDMloFLIFMauYeajZxV9yHK38Ah02myc3C1moAAAAAElFTkSuQmCC"
                                      />
                                    </svg>{' '}
                                  </div>
                                  United States{' '}
                                </div>
                                <table className="table table--stripes">
                                  <tbody>
                                    <tr>
                                      <td className="table-align">
                                        <span className="table-label">
                                          Ethnic Group:
                                        </span>
                                      </td>
                                      <td>
                                        <select className="custom-select">
                                          <option value="v-1">Drop-down</option>
                                        </select>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="table-align">
                                        <span className="table-label">
                                          Veteran:
                                        </span>
                                      </td>
                                      <td>
                                        <select className="custom-select">
                                          <option value="v-1">
                                            Drop-down (Yes/No)
                                          </option>
                                        </select>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="table-align">
                                        <span className="table-label">
                                          Challenged Veteran:
                                        </span>
                                      </td>
                                      <td>
                                        <select className="custom-select">
                                          <option value="v-1">Drop-down</option>
                                        </select>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="box">
                        <ul className="box-headings js-tabs">
                          <li className="box-heading active">
                            <div className="box-icon">
                              {' '}<svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 43 43"
                              >
                                <title>Zasób 4</title>
                                <path
                                  d="M21.5,1.5a20,20,0,1,1-20,20,20,20,0,0,1,20-20Z"
                                  fill="none"
                                  stroke="#f4f7fa"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="3"
                                />
                                <line
                                  x1="21.5"
                                  y1="1.5"
                                  x2="21.5"
                                  y2="41.48"
                                  fill="none"
                                  stroke="#f4f7fa"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="3"
                                />
                                <line
                                  x1="1.51"
                                  y1="21.5"
                                  x2="41.49"
                                  y2="21.5"
                                  fill="none"
                                  stroke="#f4f7fa"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="3"
                                />
                                <path
                                  d="M35.63,7.57c-3.05,2.76-8.25,4.57-14.14,4.57S10.42,10.34,7.37,7.59"
                                  fill="none"
                                  stroke="#f4f7fa"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="3"
                                />
                                <path
                                  d="M35.63,35.43c-3.05-2.76-8.25-4.57-14.14-4.57S10.42,32.66,7.37,35.41"
                                  fill="none"
                                  stroke="#f4f7fa"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="3"
                                />
                                <path
                                  d="M21.32,41.27a24.07,24.07,0,0,1-10-19.73,24.08,24.08,0,0,1,10-19.71"
                                  fill="none"
                                  stroke="#f4f7fa"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="3"
                                />
                                <path
                                  d="M22,41.27A24.07,24.07,0,0,0,32,21.54,24.08,24.08,0,0,0,22,1.83"
                                  fill="none"
                                  stroke="#f4f7fa"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="3"
                                />
                              </svg>{' '}
                            </div>
                            <h2 className="box-title">
                              National ID Information
                            </h2>
                            <ul className="box-actions">
                              <li>
                                {' '}<a href="" title="Help">
                                  {' '}<svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 50 50"
                                  >
                                    <circle
                                      cx="25"
                                      cy="25"
                                      r="24"
                                      fill="none"
                                      stroke="#fff"
                                      strokeLinecap="round"
                                      strokeMiterlimit="10"
                                      strokeWidth="2"
                                    />
                                    <rect width="50" height="50" fill="none" />
                                    <path
                                      d="M23.53,30.41V28.94a4.75,4.75,0,0,1,1.08-3.23l2.4-3.3c1.25-1.72,1.68-2.55,1.68-3.77a3.22,3.22,0,0,0-3.48-3.34c-2,0-3.3,1.22-3.73,3.41a.32.32,0,0,1-.4.29l-2.26-.4a.32.32,0,0,1-.29-.4,6.42,6.42,0,0,1,6.74-5.7c3.87,0,6.49,2.55,6.49,6.1A7.47,7.47,0,0,1,30,23.27l-2.4,3.3a3.7,3.7,0,0,0-.93,2.69V30.4a.34.34,0,0,1-.36.36H23.89A.33.33,0,0,1,23.53,30.41Zm-.18,3.44a.34.34,0,0,1,.36-.36h2.73a.34.34,0,0,1,.36.36v3.08a.34.34,0,0,1-.36.36H23.71a.34.34,0,0,1-.36-.36Z"
                                      fill="#fff"
                                    />
                                  </svg>{' '}
                                </a>{' '}
                              </li>
                            </ul>
                          </li>
                        </ul>
                        <div className="box-content">
                          <div className="box-tab active">
                            <div className="box-inner box-inner--no-pad">
                              <table className="table table--stripes table--typeb">
                                <thead>
                                  <tr>
                                    <th>Country</th>
                                    <th>National ID Card Type</th>
                                    <th>National ID </th>
                                    <th>Is Primary </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>
                                      <select className="custom-select">
                                        <option value="v-1">Drop-down</option>
                                      </select>
                                    </td>
                                    <td>
                                      <input
                                        type="text"
                                        className="entry-input"
                                      />
                                    </td>
                                    <td>
                                      <input
                                        type="text"
                                        className="entry-input"
                                      />
                                    </td>
                                    <td>
                                      <select className="custom-select">
                                        <option value="v-1">Yes</option>
                                        <option value="v-2">No</option>
                                      </select>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <select className="custom-select">
                                        <option value="v-1">Drop-down</option>
                                      </select>
                                    </td>
                                    <td>
                                      <input
                                        type="text"
                                        className="entry-input"
                                      />
                                    </td>
                                    <td>
                                      <input
                                        type="text"
                                        className="entry-input"
                                      />
                                    </td>
                                    <td>
                                      <select className="custom-select">
                                        <option value="v-1">Yes</option>
                                        <option value="v-2">No</option>
                                      </select>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="box">
                        <ul className="box-headings js-tabs">
                          <li className="box-heading active">
                            <div className="box-icon">
                              {' '}<svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 42.52 43"
                              >
                                <title>Zasób 5</title>
                                <path
                                  d="M5.71,1.5H36.82A4.22,4.22,0,0,1,41,5.71V27a4.22,4.22,0,0,1-4.21,4.21H26.51L21.26,41.5,16,31.26H5.71A4.22,4.22,0,0,1,1.5,27V5.71A4.22,4.22,0,0,1,5.71,1.5Z"
                                  fill="none"
                                  stroke="#f4f7fa"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="3"
                                />
                                <polyline
                                  points="15.76 12.89 15.76 24.41 26.91 24.41 26.91 13.71"
                                  fill="none"
                                  stroke="#f4f7fa"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="3"
                                />
                                <polyline
                                  points="12.84 15.69 12.91 15.63 12.84 15.54 21.19 8.09 21.26 8.16 21.34 8.09 29.68 15.54 29.61 15.63 29.68 15.69"
                                  fill="none"
                                  stroke="#f4f7fa"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="3"
                                />
                              </svg>{' '}
                            </div>
                            <h2 className="box-title">Address</h2>
                            <ul className="box-actions">
                              <li>
                                {' '}<a href="" title="Help">
                                  {' '}<svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 50 50"
                                  >
                                    <circle
                                      cx="25"
                                      cy="25"
                                      r="24"
                                      fill="none"
                                      stroke="#fff"
                                      strokeLinecap="round"
                                      strokeMiterlimit="10"
                                      strokeWidth="2"
                                    />
                                    <rect width="50" height="50" fill="none" />
                                    <path
                                      d="M23.53,30.41V28.94a4.75,4.75,0,0,1,1.08-3.23l2.4-3.3c1.25-1.72,1.68-2.55,1.68-3.77a3.22,3.22,0,0,0-3.48-3.34c-2,0-3.3,1.22-3.73,3.41a.32.32,0,0,1-.4.29l-2.26-.4a.32.32,0,0,1-.29-.4,6.42,6.42,0,0,1,6.74-5.7c3.87,0,6.49,2.55,6.49,6.1A7.47,7.47,0,0,1,30,23.27l-2.4,3.3a3.7,3.7,0,0,0-.93,2.69V30.4a.34.34,0,0,1-.36.36H23.89A.33.33,0,0,1,23.53,30.41Zm-.18,3.44a.34.34,0,0,1,.36-.36h2.73a.34.34,0,0,1,.36.36v3.08a.34.34,0,0,1-.36.36H23.71a.34.34,0,0,1-.36-.36Z"
                                      fill="#fff"
                                    />
                                  </svg>{' '}
                                </a>{' '}
                              </li>
                            </ul>
                          </li>
                        </ul>
                        <div className="box-content">
                          <div className="box-tab active">
                            <div className="box-inner box-inner--no-pad">
                              <div className="toggler active" id="homeAddress">
                                <div className="toggler-bar toggler-bar--no-top js-toggler-bar" onClick={() => this.toggleElement('homeAddress')}>
                                  <h2 className="toggler-title">
                                    Home Address
                                  </h2>
                                  <span className="box-filter-arrow" />{' '}
                                </div>
                                <div className="toggler-content">
                                  <table className="table table--stripes">
                                    <tbody>
                                      <tr>
                                        <td className="table-align">
                                          <span className="table-label">
                                            Address Type:
                                          </span>
                                        </td>
                                        <td>
                                          <select className="custom-select">
                                            <option value="v-1">
                                              Drop-Down (Home Address / Mailing Address)
                                            </option>
                                          </select>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td className="table-align">
                                          <span className="table-label">
                                            Country:
                                          </span>
                                        </td>
                                        <td>
                                          <select className="custom-select">
                                            <option value="v-1">
                                              Drop-Down (Home Address / Mailing Address)
                                            </option>
                                          </select>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td className="table-align">
                                          <span className="table-label">
                                            Address Line 1
                                          </span>
                                        </td>
                                        <td>
                                          <input
                                            type="text"
                                            className="entry-input"
                                          />
                                        </td>
                                      </tr>
                                      <tr>
                                        <td className="table-align">
                                          <span className="table-label">
                                            Address Line 2
                                          </span>
                                        </td>
                                        <td>
                                          <input
                                            type="text"
                                            className="entry-input"
                                          />
                                        </td>
                                      </tr>
                                      <tr>
                                        <td className="table-align">
                                          <span className="table-label">
                                            City
                                          </span>
                                        </td>
                                        <td>
                                          <input
                                            type="text"
                                            className="entry-input"
                                          />
                                        </td>
                                      </tr>
                                      <tr>
                                        <td className="table-align">
                                          <span className="table-label">
                                            Country
                                          </span>
                                        </td>
                                        <td>
                                          <input
                                            type="text"
                                            className="entry-input"
                                          />
                                        </td>
                                      </tr>
                                      <tr>
                                        <td className="table-align">
                                          <span className="table-label">
                                            State
                                          </span>
                                        </td>
                                        <td>
                                          <input
                                            type="text"
                                            className="entry-input"
                                          />
                                        </td>
                                      </tr>
                                      <tr>
                                        <td className="table-align">
                                          <span className="table-label">
                                            ZIP
                                          </span>
                                        </td>
                                        <td>
                                          <input
                                            type="text"
                                            className="entry-input"
                                          />
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                              <div className="toggler active" id="MailingAddress">
                                <div className="toggler-bar js-toggler-bar" onClick={() => this.toggleElement('MailingAddress')}>
                                  <h2 className="toggler-title">
                                    Mailing Address
                                  </h2>
                                  <span className="box-filter-arrow" />{' '}
                                </div>
                                <div className="toggler-content">
                                  <table className="table table--stripes">
                                    <tbody>
                                      <tr>
                                        <td className="table-align">
                                          <span className="table-label">
                                            Address Type:
                                          </span>
                                        </td>
                                        <td>
                                          <select className="custom-select">
                                            <option value="v-1">
                                              Drop-Down (Home Address / Mailing Address)
                                            </option>
                                          </select>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td className="table-align">
                                          <span className="table-label">
                                            Country:
                                          </span>
                                        </td>
                                        <td>
                                          <select className="custom-select">
                                            <option value="v-1">
                                              Drop-Down (Home Address / Mailing Address)
                                            </option>
                                          </select>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td className="table-align">
                                          <span className="table-label">
                                            Address Line 1
                                          </span>
                                        </td>
                                        <td>
                                          <input
                                            type="text"
                                            className="entry-input"
                                          />
                                        </td>
                                      </tr>
                                      <tr>
                                        <td className="table-align">
                                          <span className="table-label">
                                            Address Line 2
                                          </span>
                                        </td>
                                        <td>
                                          <input
                                            type="text"
                                            className="entry-input"
                                          />
                                        </td>
                                      </tr>
                                      <tr>
                                        <td className="table-align">
                                          <span className="table-label">
                                            City
                                          </span>
                                        </td>
                                        <td>
                                          <input
                                            type="text"
                                            className="entry-input"
                                          />
                                        </td>
                                      </tr>
                                      <tr>
                                        <td className="table-align">
                                          <span className="table-label">
                                            Country
                                          </span>
                                        </td>
                                        <td>
                                          <input
                                            type="text"
                                            className="entry-input"
                                          />
                                        </td>
                                      </tr>
                                      <tr>
                                        <td className="table-align">
                                          <span className="table-label">
                                            State
                                          </span>
                                        </td>
                                        <td>
                                          <input
                                            type="text"
                                            className="entry-input"
                                          />
                                        </td>
                                      </tr>
                                      <tr>
                                        <td className="table-align">
                                          <span className="table-label">
                                            ZIP
                                          </span>
                                        </td>
                                        <td>
                                          <input
                                            type="text"
                                            className="entry-input"
                                          />
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="box">
                        <ul className="box-headings js-tabs">
                          <li className="box-heading active">
                            <div className="box-icon">
                              {' '}<svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 41.46 43"
                              >
                                <title>Zasób 6</title>
                                <path
                                  d="M4,1.5H31.46A2.49,2.49,0,0,1,33.94,4V39a2.49,2.49,0,0,1-2.48,2.48H4A2.49,2.49,0,0,1,1.5,39V4A2.49,2.49,0,0,1,4,1.5Z"
                                  fill="none"
                                  stroke="#f4f7fa"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="3"
                                />
                                <path
                                  d="M34.94,4.83h4.31a.74.74,0,0,1,.71.75V31.46a.74.74,0,0,1-.71.75H34.94"
                                  fill="none"
                                  stroke="#f4f7fa"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="3"
                                />
                                <line
                                  x1="39.25"
                                  y1="11.68"
                                  x2="34.94"
                                  y2="11.68"
                                  fill="none"
                                  stroke="#f4f7fa"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="3"
                                />
                                <line
                                  x1="39.25"
                                  y1="18.52"
                                  x2="34.94"
                                  y2="18.52"
                                  fill="none"
                                  stroke="#f4f7fa"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="3"
                                />
                                <line
                                  x1="39.25"
                                  y1="25.37"
                                  x2="34.94"
                                  y2="25.37"
                                  fill="none"
                                  stroke="#f4f7fa"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="3"
                                />
                                <path
                                  d="M20.17,20.62a14.12,14.12,0,0,1-.6,3.29A14.79,14.79,0,0,0,19,26.8q0,.67.26.67a3.61,3.61,0,0,0,1-.24l.22-.1.43,1.2a8.45,8.45,0,0,1-2,1.1,6,6,0,0,1-2.2.48,1.94,1.94,0,0,1-2.11-2.15,13.5,13.5,0,0,1,.59-3.19,14.6,14.6,0,0,0,.59-2.72,2.67,2.67,0,0,0-.62-1.68l-.19-.26.07-.41a19.69,19.69,0,0,1,4.85-.38,2.27,2.27,0,0,1,.38,1.5Zm-1.79-3.37a2.39,2.39,0,0,1-1.7-.58,1.94,1.94,0,0,1-.61-1.48,1.87,1.87,0,0,1,.76-1.51,2.82,2.82,0,0,1,1.84-.61,2.54,2.54,0,0,1,1.68.5,1.75,1.75,0,0,1,.6,1.42,2.08,2.08,0,0,1-.73,1.58,2.59,2.59,0,0,1-1.82.67Z"
                                  fill="#f4f7fa"
                                />
                              </svg>{' '}
                            </div>
                            <h2 className="box-title">Work Permit Info</h2>
                            <ul className="box-actions">
                              <li>
                                {' '}<a href="" title="Help">
                                  {' '}<svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 50 50"
                                  >
                                    <circle
                                      cx="25"
                                      cy="25"
                                      r="24"
                                      fill="none"
                                      stroke="#fff"
                                      strokeLinecap="round"
                                      strokeMiterlimit="10"
                                      strokeWidth="2"
                                    />
                                    <rect width="50" height="50" fill="none" />
                                    <path
                                      d="M23.53,30.41V28.94a4.75,4.75,0,0,1,1.08-3.23l2.4-3.3c1.25-1.72,1.68-2.55,1.68-3.77a3.22,3.22,0,0,0-3.48-3.34c-2,0-3.3,1.22-3.73,3.41a.32.32,0,0,1-.4.29l-2.26-.4a.32.32,0,0,1-.29-.4,6.42,6.42,0,0,1,6.74-5.7c3.87,0,6.49,2.55,6.49,6.1A7.47,7.47,0,0,1,30,23.27l-2.4,3.3a3.7,3.7,0,0,0-.93,2.69V30.4a.34.34,0,0,1-.36.36H23.89A.33.33,0,0,1,23.53,30.41Zm-.18,3.44a.34.34,0,0,1,.36-.36h2.73a.34.34,0,0,1,.36.36v3.08a.34.34,0,0,1-.36.36H23.71a.34.34,0,0,1-.36-.36Z"
                                      fill="#fff"
                                    />
                                  </svg>{' '}
                                </a>{' '}
                              </li>
                            </ul>
                          </li>
                        </ul>
                        <div className="box-content">
                          <div className="box-tab active">
                            <div className="box-inner box-inner--no-pad">
                              <table className="table table--stripes table--typeb">
                                <thead>
                                  <tr>
                                    <th>Country</th>
                                    <th>Document Type</th>
                                    <th>Document Title</th>
                                    <th>Document Number</th>
                                    <th>Issue Date</th>
                                    <th>Issue Place</th>
                                    <th>Issuing Authority</th>
                                    <th>Expiration Date</th>
                                    <th>Validated</th>
                                    <th>Attachments</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>
                                      <select className="custom-select">
                                        <option value="v-1">Drop-down</option>
                                      </select>
                                    </td>
                                    <td>
                                      <input
                                        type="text"
                                        className="entry-input"
                                      />
                                    </td>
                                    <td>
                                      <input
                                        type="text"
                                        className="entry-input"
                                      />
                                    </td>
                                    <td>
                                      <input
                                        type="text"
                                        className="entry-input"
                                      />
                                    </td>
                                    <td className="text-center">
                                      <input
                                        type="text"
                                        className="entry-input js-datepicker"
                                      />
                                    </td>
                                    <td>
                                      <input
                                        type="text"
                                        className="entry-input"
                                      />
                                    </td>
                                    <td>
                                      <input
                                        type="text"
                                        className="entry-input"
                                      />
                                    </td>
                                    <td>
                                      <input
                                        type="text"
                                        className="entry-input"
                                      />
                                    </td>
                                    <td>
                                      <select className="custom-select">
                                        <option value="v-1">Drop-down</option>
                                      </select>
                                    </td>
                                    <td>
                                      <input
                                        type="text"
                                        className="entry-input"
                                      />
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="box">
                        <ul className="box-headings js-tabs">
                          <li className="box-heading active">
                            <div className="box-icon">
                              {' '}<svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 43.93 43"
                              >
                                <title>Zasób 7</title>
                                <polygon
                                  points="1.5 41.5 42.43 41.5 42.43 16.5 21.96 1.5 1.5 16.5 1.5 41.5 1.5 41.5"
                                  fill="none"
                                  stroke="#f4f7fa"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="3"
                                />
                                <polyline
                                  points="42.43 41.5 21.96 24.74 1.5 41.5"
                                  fill="none"
                                  stroke="#f4f7fa"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="3"
                                />
                                <line
                                  x1="1.93"
                                  y1="17.1"
                                  x2="16.82"
                                  y2="28.38"
                                  fill="none"
                                  stroke="#f4f7fa"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="3"
                                />
                                <line
                                  x1="42"
                                  y1="17.1"
                                  x2="27.11"
                                  y2="28.38"
                                  fill="none"
                                  stroke="#f4f7fa"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="3"
                                />
                              </svg>{' '}
                            </div>
                            <h2 className="box-title">Contact Information</h2>
                            <ul className="box-actions">
                              <li>
                                {' '}<a href="" title="Help">
                                  {' '}<svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 50 50"
                                  >
                                    <circle
                                      cx="25"
                                      cy="25"
                                      r="24"
                                      fill="none"
                                      stroke="#fff"
                                      strokeLinecap="round"
                                      strokeMiterlimit="10"
                                      strokeWidth="2"
                                    />
                                    <rect width="50" height="50" fill="none" />
                                    <path
                                      d="M23.53,30.41V28.94a4.75,4.75,0,0,1,1.08-3.23l2.4-3.3c1.25-1.72,1.68-2.55,1.68-3.77a3.22,3.22,0,0,0-3.48-3.34c-2,0-3.3,1.22-3.73,3.41a.32.32,0,0,1-.4.29l-2.26-.4a.32.32,0,0,1-.29-.4,6.42,6.42,0,0,1,6.74-5.7c3.87,0,6.49,2.55,6.49,6.1A7.47,7.47,0,0,1,30,23.27l-2.4,3.3a3.7,3.7,0,0,0-.93,2.69V30.4a.34.34,0,0,1-.36.36H23.89A.33.33,0,0,1,23.53,30.41Zm-.18,3.44a.34.34,0,0,1,.36-.36h2.73a.34.34,0,0,1,.36.36v3.08a.34.34,0,0,1-.36.36H23.71a.34.34,0,0,1-.36-.36Z"
                                      fill="#fff"
                                    />
                                  </svg>{' '}
                                </a>{' '}
                              </li>
                            </ul>
                          </li>
                        </ul>
                        <div className="box-content">
                          <div className="box-tab active">
                            <div className="box-inner box-inner--no-pad">
                              <div className="toggler active" id="emailInfo">
                                <div className="toggler-bar toggler-bar--no-top js-toggler-bar" onClick={() => this.toggleElement('emailInfo')}>
                                  <h2 className="toggler-title">
                                    Email information
                                  </h2>
                                  <span className="box-filter-arrow" />{' '}
                                </div>
                                <div className="toggler-content">
                                  <div className="toggler-content-inner toggler-content-inner--nopad">
                                    <table className="table table--stripes table--typeb">
                                      <thead>
                                        <tr>
                                          <th>Email type</th>
                                          <th>Email address</th>
                                          <th>Is primary</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tr>
                                          <td>
                                            <input
                                              type="text"
                                              className="entry-input"
                                            />
                                          </td>
                                          <td>
                                            <input
                                              type="text"
                                              className="entry-input"
                                            />
                                          </td>
                                          <td>
                                            <select className="custom-select">
                                              <option value="v-1">
                                                Drop-down
                                              </option>
                                            </select>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              </div>
                              <div className="toggler active" id="phoneInfo">
                                <div className="toggler-bar js-toggler-bar" onClick={() => this.toggleElement('phoneInfo')}>
                                  <h2 className="toggler-title">
                                    Phone information
                                  </h2>
                                  <span className="box-filter-arrow" />{' '}
                                </div>
                                <div className="toggler-content">
                                  <div className="toggler-content-inner toggler-content-inner--nopad">
                                    <table className="table table--stripes table--typeb">
                                      <thead>
                                        <tr>
                                          <th>Phone type</th>
                                          <th>Phone number</th>
                                          <th>Extension</th>
                                          <th>Is primary</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tr>
                                          <td>
                                            <select className="custom-select">
                                              <option value="v-1">
                                                Drop-down
                                              </option>
                                            </select>
                                          </td>
                                          <td>
                                            <input
                                              type="text"
                                              className="entry-input"
                                            />
                                          </td>
                                          <td>
                                            <input
                                              type="text"
                                              className="entry-input"
                                            />
                                          </td>
                                          <td>
                                            <select className="custom-select">
                                              <option value="v-1">
                                                Drop-down
                                              </option>
                                            </select>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="step-tab-panel" id="step3">
                      <div className="box">
                        <ul className="box-headings js-tabs">
                          <li className="box-heading active">
                            <div className="box-icon">
                              {' '}<svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 40 40"
                              >
                                <g id="Warstwa_2" data-name="Warstwa 2">
                                  <g id="dashboard">
                                    <path
                                      d="M38.91,9.93a3.74,3.74,0,0,0-5.28,0l-1,1V1.11A1.11,1.11,0,0,0,31.56,0H4.26A4.26,4.26,0,0,0,0,4.26V35.74A4.26,4.26,0,0,0,4.26,40h27.3a1.11,1.11,0,0,0,1.11-1.11V21.45l6.24-6.24a3.73,3.73,0,0,0,0-5.28ZM16.47,2.22h4.07V6.61l-1.37-1a1.11,1.11,0,0,0-1.34,0l-1.37,1ZM6,37.78H4.26a2,2,0,0,1-2-2V4.26a2,2,0,0,1,2-2H6Zm24.43,0H8.24V23.21H9.75a1.11,1.11,0,0,0,0-2.22H8.24V19h4.14a1.11,1.11,0,0,0,0-2.22H8.24V2.22h6V8.85A1.11,1.11,0,0,0,16,9.73l2.48-1.88L21,9.73a1.31,1.31,0,0,0,1.17.11,1.12,1.12,0,0,0,.62-1V2.22h7.68V13.11L18,25.56a1.11,1.11,0,0,0-.33.79v3.71a1.11,1.11,0,0,0,1.11,1.11H22.5a1.11,1.11,0,0,0,.79-.33l7.16-7.16ZM22,28.94H19.9V26.8L33.47,13.23l2.14,2.14Zm15.3-15.3-.16.16L35,11.66l.16-.16a1.55,1.55,0,0,1,2.14,0A1.57,1.57,0,0,1,37.34,13.64Z"
                                      fill="#f4f7fa"
                                    />
                                  </g>
                                </g>
                              </svg>{' '}
                            </div>
                            <h2 className="box-title">Employment Detail</h2>
                            <ul className="box-actions">
                              <li>
                                {' '}<a href="" title="Help">
                                  {' '}<svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 50 50"
                                  >
                                    <circle
                                      cx="25"
                                      cy="25"
                                      r="24"
                                      fill="none"
                                      stroke="#fff"
                                      strokeLinecap="round"
                                      strokeMiterlimit="10"
                                      strokeWidth="2"
                                    />
                                    <rect width="50" height="50" fill="none" />
                                    <path
                                      d="M23.53,30.41V28.94a4.75,4.75,0,0,1,1.08-3.23l2.4-3.3c1.25-1.72,1.68-2.55,1.68-3.77a3.22,3.22,0,0,0-3.48-3.34c-2,0-3.3,1.22-3.73,3.41a.32.32,0,0,1-.4.29l-2.26-.4a.32.32,0,0,1-.29-.4,6.42,6.42,0,0,1,6.74-5.7c3.87,0,6.49,2.55,6.49,6.1A7.47,7.47,0,0,1,30,23.27l-2.4,3.3a3.7,3.7,0,0,0-.93,2.69V30.4a.34.34,0,0,1-.36.36H23.89A.33.33,0,0,1,23.53,30.41Zm-.18,3.44a.34.34,0,0,1,.36-.36h2.73a.34.34,0,0,1,.36.36v3.08a.34.34,0,0,1-.36.36H23.71a.34.34,0,0,1-.36-.36Z"
                                      fill="#fff"
                                    />
                                  </svg>{' '}
                                </a>{' '}
                              </li>
                            </ul>
                          </li>
                        </ul>
                        <div className="box-content">
                          <div className="row">
                            <div className="col-xs-12">
                              <div className="box-tab active">
                                <div className="box-inner box-inner--no-pad">
                                  <div className="toggler active" id="keyJobAttribute">
                                    <div className="toggler-bar toggler-bar--no-top js-toggler-bar" onClick={() => this.toggleElement('keyJobAttribute')}>
                                      <h2 className="toggler-title">
                                        Key Job Attribute
                                      </h2>
                                      <span className="box-filter-arrow" />{' '}
                                    </div>
                                    <div className="toggler-content">
                                      <table className="table table--stripes">
                                        <tbody>
                                          <tr>
                                            <td className="table-align">
                                              <span className="table-label">
                                                Job Code
                                              </span>
                                            </td>
                                            <td>
                                              <select className="custom-select">
                                                <option value="v-1">
                                                  Drop-down
                                                </option>
                                              </select>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td className="table-align">
                                              <span className="table-label">
                                                Position
                                              </span>
                                            </td>
                                            <td>
                                              <select className="custom-select">
                                                <option value="v-1">
                                                  Drop-down
                                                </option>
                                              </select>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                  </div>
                                  <div className="toggler active" id="orgnlInfo">
                                    <div className="toggler-bar js-toggler-bar" onClick={() => this.toggleElement('orgnlInfo')}>
                                      <h2 className="toggler-title">
                                        Organizational Information
                                      </h2>
                                      <span className="box-filter-arrow" />{' '}
                                    </div>

                                    <div className="toggler-content">
                                      <table className="table table--stripes">
                                        <tbody>
                                          <tr>
                                            <td className="table-align">
                                              <span className="table-label">
                                                Company
                                              </span>
                                            </td>
                                            <td>
                                              <select className="custom-select">
                                                <option value="v-1">
                                                  Drop-down
                                                </option>
                                              </select>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td className="table-align">
                                              <span className="table-label">
                                                Business Unit
                                              </span>
                                            </td>
                                            <td>
                                              <select className="custom-select">
                                                <option value="v-1">
                                                  Drop-down
                                                </option>
                                              </select>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td className="table-align">
                                              <span className="table-label">
                                                Division
                                              </span>
                                            </td>
                                            <td>
                                              <select className="custom-select">
                                                <option value="v-1">
                                                  Drop-down
                                                </option>
                                              </select>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td className="table-align">
                                              <span className="table-label">
                                                Department
                                              </span>
                                            </td>
                                            <td>
                                              <select className="custom-select">
                                                <option value="v-1">
                                                  Drop-down
                                                </option>
                                              </select>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td className="table-align">
                                              <span className="table-label">
                                                Location
                                              </span>
                                            </td>
                                            <td>
                                              <select className="custom-select">
                                                <option value="v-1">
                                                  Drop-down
                                                </option>
                                              </select>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td className="table-align">
                                              <span className="table-label">
                                                Timezone
                                              </span>
                                            </td>
                                            <td>
                                              <select className="custom-select">
                                                <option value="v-1">
                                                  Drop-down
                                                </option>
                                              </select>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td className="table-align">
                                              <span className="table-label">
                                                Cost Center
                                              </span>
                                            </td>
                                            <td>
                                              <select className="custom-select">
                                                <option value="v-1">
                                                  Drop-down
                                                </option>
                                              </select>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-xs-12">
                              <div className="box-tab active">
                                <div className="box-inner box-inner--no-pad">
                                  <div className="toggler active" id="jobInfo">
                                    <div className="toggler-bar toggler-bar--no-top js-toggler-bar" onClick={() => this.toggleElement('jobInfo')}>
                                      <h2 className="toggler-title">
                                        Job Information
                                      </h2>
                                      <span className="box-filter-arrow" />{' '}
                                    </div>
                                    <div className="toggler-content">
                                      <table className="table table--stripes">
                                        <tbody>
                                          <tr>
                                            <td className="table-align">
                                              <span className="table-label">
                                                Employee Status
                                              </span>
                                            </td>
                                            <td>
                                              <select className="custom-select">
                                                <option value="v-1">
                                                  Drop-down
                                                </option>
                                              </select>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td className="table-align">
                                              <span className="table-label">
                                                Supervisor
                                              </span>
                                            </td>
                                            <td>
                                              <select className="custom-select">
                                                <option value="v-1">
                                                  Drop-down
                                                </option>
                                              </select>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td className="table-align">
                                              <span className="table-label">
                                                Job Classification
                                              </span>
                                            </td>
                                            <td>
                                              <select className="custom-select">
                                                <option value="v-1">
                                                  Drop-down
                                                </option>
                                              </select>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td className="table-align">
                                              <span className="table-label">
                                                Job Title
                                              </span>
                                            </td>
                                            <td>
                                              <input
                                                type="text"
                                                className="entry-input"
                                              />
                                            </td>
                                          </tr>
                                          <tr>
                                            <td className="table-align">
                                              <span className="table-label">
                                                Local Job Title
                                              </span>
                                            </td>
                                            <td>
                                              <input
                                                type="text"
                                                className="entry-input"
                                              />
                                            </td>
                                          </tr>
                                          <tr>
                                            <td className="table-align">
                                              <span className="table-label">
                                                Pay Grade
                                              </span>
                                            </td>
                                            <td>
                                              <select className="custom-select">
                                                <option value="v-1">
                                                  Drop-down
                                                </option>
                                              </select>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td className="table-align">
                                              <span className="table-label">
                                                Regular / Temporary
                                              </span>
                                            </td>
                                            <td>
                                              <select className="custom-select">
                                                <option value="v-1">
                                                  Regular
                                                </option>
                                                <option value="v-2">
                                                  Temporary
                                                </option>
                                              </select>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td className="table-align">
                                              <span className="table-label">
                                                Standard Weekly Hours
                                              </span>
                                            </td>
                                            <td>
                                              <input
                                                type="text"
                                                className="entry-input"
                                              />
                                            </td>
                                          </tr>
                                          <tr>
                                            <td className="table-align">
                                              <span className="table-label">
                                                FTE
                                              </span>
                                            </td>
                                            <td>
                                              <input
                                                type="text"
                                                className="entry-input"
                                              />
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                  </div>
                                  <div className="toggler active" id="timeInfo">
                                    <div className="toggler-bar js-toggler-bar" onClick={() => this.toggleElement('timeInfo')}>
                                      <h2 className="toggler-title">
                                        Time Information
                                      </h2>
                                      <span className="box-filter-arrow" />{' '}
                                    </div>
                                    <div className="toggler-content">
                                      <table className="table table--stripes">
                                        <tbody>
                                          <tr>
                                            <td className="table-align">
                                              <span className="table-label">
                                                Holiday Calendar
                                              </span>
                                            </td>
                                            <td>
                                              <select className="custom-select">
                                                <option value="v-1">
                                                  Drop-down
                                                </option>
                                              </select>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td className="table-align">
                                              <span className="table-label">
                                                Work Schedule
                                              </span>
                                            </td>
                                            <td>
                                              <select className="custom-select">
                                                <option value="v-1">
                                                  Drop-down
                                                </option>
                                              </select>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td className="table-align">
                                              <span className="table-label">
                                                Time Profile
                                              </span>
                                            </td>
                                            <td>
                                              <select className="custom-select">
                                                <option value="v-1">
                                                  Drop-down
                                                </option>
                                              </select>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-xs-12">
                              <div className="box-tab active">
                                <div className="box-inner--top">
                                  <div className="toggler active" id="countrySpecific">
                                    <div className="toggler-bar toggler-bar--no-top js-toggler-bar" onClick={() => this.toggleElement('countrySpecific')}>
                                      <h2 className="toggler-title">
                                        Country Specific - USA
                                      </h2>
                                      <span className="box-filter-arrow" />{' '}
                                    </div>
                                    <div className="toggler-content">
                                      <div className="row">
                                        <div className="col-xs-12">
                                          <table className="table table--stripes">
                                            <tbody>
                                              <tr>
                                                <td className="table-align">
                                                  <span className="table-label">
                                                    Is Fulltime Employee
                                                  </span>
                                                </td>
                                                <td>
                                                  <select className="custom-select">
                                                    <option value="v-1">
                                                      Yes
                                                    </option>
                                                    <option value="v-2">
                                                      No
                                                    </option>
                                                  </select>
                                                </td>
                                              </tr>
                                              <tr>
                                                <td className="table-align">
                                                  <span className="table-label">
                                                    Notes
                                                  </span>
                                                </td>
                                                <td>
                                                  <input
                                                    type="text"
                                                    className="entry-input"
                                                  />
                                                </td>
                                              </tr>
                                              <tr>
                                                <td className="table-align">
                                                  <span className="table-label">
                                                    Employee Class
                                                  </span>
                                                </td>
                                                <td>
                                                  <select className="custom-select">
                                                    <option value="v-1">
                                                      Drop-down
                                                    </option>
                                                  </select>
                                                </td>
                                              </tr>
                                              <tr>
                                                <td className="table-align">
                                                  <span className="table-label">
                                                    FLSA Status
                                                  </span>
                                                </td>
                                                <td>
                                                  <select className="custom-select">
                                                    <option value="v-1">
                                                      Drop-down
                                                    </option>
                                                  </select>
                                                </td>
                                              </tr>
                                              <tr>
                                                <td className="table-align">
                                                  <span className="table-label">
                                                    Is Shift Employee
                                                  </span>
                                                </td>
                                                <td>
                                                  <select className="custom-select">
                                                    <option value="v-1">
                                                      Yes
                                                    </option>
                                                    <option value="v-2">
                                                      No
                                                    </option>
                                                  </select>
                                                </td>
                                              </tr>
                                              <tr>
                                                <td className="table-align">
                                                  <span className="table-label">
                                                    Shift Code
                                                  </span>
                                                </td>
                                                <td>
                                                  <select className="custom-select">
                                                    <option value="v-1">
                                                      Drop-down
                                                    </option>
                                                  </select>
                                                </td>
                                              </tr>
                                              <tr>
                                                <td className="table-align">
                                                  <span className="table-label">
                                                    Shift Ratew
                                                  </span>
                                                </td>
                                                <td>
                                                  <input
                                                    type="text"
                                                    className="entry-input"
                                                  />
                                                </td>
                                              </tr>
                                              <tr>
                                                <td className="table-align">
                                                  <span className="table-label">
                                                    Shift Percent
                                                  </span>
                                                </td>
                                                <td>
                                                  <input
                                                    type="text"
                                                    className="entry-input"
                                                  />
                                                </td>
                                              </tr>
                                              <tr>
                                                <td className="table-align">
                                                  <span className="table-label">
                                                    Is Cross Border Worker
                                                  </span>
                                                </td>
                                                <td>
                                                  <select className="custom-select">
                                                    <option value="v-1">
                                                      Yes
                                                    </option>
                                                    <option value="v-2">
                                                      No
                                                    </option>
                                                  </select>
                                                </td>
                                              </tr>
                                              <tr>
                                                <td className="table-align">
                                                  <span className="table-label">
                                                    EEO Job Group
                                                  </span>
                                                </td>
                                                <td>
                                                  <select className="custom-select">
                                                    <option value="v-1">
                                                      Drop-down
                                                    </option>
                                                  </select>
                                                </td>
                                              </tr>
                                              <tr>
                                                <td className="table-align">
                                                  <span className="table-label">
                                                    Contract Type
                                                  </span>
                                                </td>
                                                <td>
                                                  <select className="custom-select">
                                                    <option value="v-1">
                                                      Drop-down
                                                    </option>
                                                  </select>
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </div>
                                        <div className="col-xs-12">
                                          <table className="table table--stripes table--side-left">
                                            <tbody>
                                              <tr>
                                                <td className="table-align">
                                                  <span className="table-label">
                                                    Continued Sickness Pay Period
                                                  </span>
                                                </td>
                                                <td>
                                                  <input
                                                    type="text"
                                                    className="entry-input"
                                                  />
                                                </td>
                                              </tr>
                                              <tr>
                                                <td className="table-align">
                                                  <span className="table-label">
                                                    Continued Sickness Pay Measure
                                                  </span>
                                                </td>
                                                <td>
                                                  <input
                                                    type="text"
                                                    className="entry-input"
                                                  />
                                                </td>
                                              </tr>
                                              <tr>
                                                <td className="table-align">
                                                  <span className="table-label">
                                                    Notice Period
                                                  </span>
                                                </td>
                                                <td>
                                                  <input
                                                    type="text"
                                                    className="entry-input"
                                                  />
                                                </td>
                                              </tr>
                                              <tr>
                                                <td className="table-align">
                                                  <span className="table-label">
                                                    Initial Entry
                                                  </span>
                                                </td>
                                                <td>
                                                  <input
                                                    type="text"
                                                    className="entry-input js-datepicker"
                                                  />
                                                </td>
                                              </tr>
                                              <tr>
                                                <td className="table-align">
                                                  <span className="table-label">
                                                    Entry into Group
                                                  </span>
                                                </td>
                                                <td>
                                                  <input
                                                    type="text"
                                                    className="entry-input"
                                                  />
                                                </td>
                                              </tr>
                                              <tr>
                                                <td className="table-align">
                                                  <span className="table-label">
                                                    Corporation
                                                  </span>
                                                </td>
                                                <td>
                                                  <input
                                                    type="text"
                                                    className="entry-input"
                                                  />
                                                </td>
                                              </tr>
                                              <tr>
                                                <td className="table-align">
                                                  <span className="table-label">
                                                    EEO Category 1
                                                  </span>
                                                </td>
                                                <td>
                                                  <select className="custom-select">
                                                    <option value="v-1">
                                                      Drop-down
                                                    </option>
                                                  </select>
                                                </td>
                                              </tr>
                                              <tr>
                                                <td className="table-align">
                                                  <span className="table-label">
                                                    EEO Category 2
                                                  </span>
                                                </td>
                                                <td>
                                                  <select className="custom-select">
                                                    <option value="v-1">
                                                      Drop-down
                                                    </option>
                                                  </select>
                                                </td>
                                              </tr>
                                              <tr>
                                                <td className="table-align">
                                                  <span className="table-label">
                                                    EEO Category 3
                                                  </span>
                                                </td>
                                                <td>
                                                  <select className="custom-select">
                                                    <option value="v-1">
                                                      Drop-down
                                                    </option>
                                                  </select>
                                                </td>
                                              </tr>
                                              <tr>
                                                <td className="table-align">
                                                  <span className="table-label">
                                                    EEO Category 4
                                                  </span>
                                                </td>
                                                <td>
                                                  <select className="custom-select">
                                                    <option value="v-1">
                                                      Drop-down
                                                    </option>
                                                  </select>
                                                </td>
                                              </tr>
                                              <tr>
                                                <td className="table-align">
                                                  <span className="table-label">
                                                    EEO Category 5
                                                  </span>
                                                </td>
                                                <td>
                                                  <select className="custom-select">
                                                    <option value="v-1">
                                                      Drop-down
                                                    </option>
                                                  </select>
                                                </td>
                                              </tr>
                                              <tr>
                                                <td className="table-align">
                                                  <span className="table-label">
                                                    EEO Category 6
                                                  </span>
                                                </td>
                                                <td>
                                                  <select className="custom-select">
                                                    <option value="v-1">
                                                      Drop-down
                                                    </option>
                                                  </select>
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="box">
                        <ul className="box-headings js-tabs">
                          <li className="box-heading active">
                            <div className="box-icon">
                              {' '}<svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 43 31.89"
                              >
                                <g id="Warstwa_2" data-name="Warstwa 2">
                                  <g id="dashboard">
                                    <path
                                      d="M30.54,2.26A5.78,5.78,0,1,0,36.32,8,5.78,5.78,0,0,0,30.54,2.26Zm0,9A3.26,3.26,0,1,1,33.8,8,3.26,3.26,0,0,1,30.54,11.3Z"
                                      fill="#f4f7fa"
                                    />
                                    <path
                                      d="M14.77,0a5.78,5.78,0,1,0,5.78,5.78A5.79,5.79,0,0,0,14.77,0Zm0,9A3.26,3.26,0,1,1,18,5.78,3.26,3.26,0,0,1,14.77,9Z"
                                      fill="#f4f7fa"
                                    />
                                    <path
                                      d="M30.53,18.07A12.12,12.12,0,0,0,25.2,19.3l-.58.28-.5-.41A14.75,14.75,0,0,0,0,30.63v1.26H43V30.63A12.53,12.53,0,0,0,30.53,18.07Zm-28,11.31.24-1.2a12.25,12.25,0,0,1,24,0l.24,1.2Zm27,0-.12-.86a14.64,14.64,0,0,0-2.25-6l-.73-1.11L27.66,21a9.68,9.68,0,0,1,2.87-.44,10,10,0,0,1,9.63,7.53l.32,1.25Z"
                                      fill="#f4f7fa"
                                    />
                                  </g>
                                </g>
                              </svg>{' '}
                            </div>
                            <h2 className="box-title">Job Relationships</h2>
                            <ul className="box-actions">
                              <li>
                                {' '}<a href="" title="Help">
                                  {' '}<svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 50 50"
                                  >
                                    <circle
                                      cx="25"
                                      cy="25"
                                      r="24"
                                      fill="none"
                                      stroke="#fff"
                                      strokeLinecap="round"
                                      strokeMiterlimit="10"
                                      strokeWidth="2"
                                    />
                                    <rect width="50" height="50" fill="none" />
                                    <path
                                      d="M23.53,30.41V28.94a4.75,4.75,0,0,1,1.08-3.23l2.4-3.3c1.25-1.72,1.68-2.55,1.68-3.77a3.22,3.22,0,0,0-3.48-3.34c-2,0-3.3,1.22-3.73,3.41a.32.32,0,0,1-.4.29l-2.26-.4a.32.32,0,0,1-.29-.4,6.42,6.42,0,0,1,6.74-5.7c3.87,0,6.49,2.55,6.49,6.1A7.47,7.47,0,0,1,30,23.27l-2.4,3.3a3.7,3.7,0,0,0-.93,2.69V30.4a.34.34,0,0,1-.36.36H23.89A.33.33,0,0,1,23.53,30.41Zm-.18,3.44a.34.34,0,0,1,.36-.36h2.73a.34.34,0,0,1,.36.36v3.08a.34.34,0,0,1-.36.36H23.71a.34.34,0,0,1-.36-.36Z"
                                      fill="#fff"
                                    />
                                  </svg>{' '}
                                </a>{' '}
                              </li>
                            </ul>
                          </li>
                        </ul>
                        <div className="box-content">
                          <div className="box-tab active">
                            <div className="box-inner box-inner--no-pad">
                              <div className="toggler active" id="globalFields">
                                <div className="toggler-bar toggler-bar--no-top js-toggler-bar" onClick={() => this.toggleElement('globalFields')}>
                                  <h2 className="toggler-title">
                                    Global fields
                                  </h2>
                                  <span className="box-filter-arrow" />{' '}
                                </div>
                                <div className="toggler-content">
                                  <table className="table table--stripes">
                                    <tbody>
                                      <tr>
                                        <td className="table-align">
                                          <span className="table-label">
                                            Relationship Type
                                          </span>
                                        </td>
                                        <td>
                                          <select className="custom-select">
                                            <option value="v-1">
                                              HR Manager
                                            </option>
                                            <option value="v-2">
                                              Matrix Manager
                                            </option>
                                            <option value="v-3">
                                              Additional Manager
                                            </option>
                                            <option value="v-4">
                                              Second Manager
                                            </option>
                                          </select>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td className="table-align">
                                          <span className="table-label">
                                            Name
                                          </span>
                                        </td>
                                        <td>
                                          <input
                                            type="text"
                                            className="entry-input"
                                          />
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="box">
                        <ul className="box-headings js-tabs">
                          <li className="box-heading active">
                            <div className="box-icon">
                              {' '}<svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 40 41.86"
                              >
                                <g id="Warstwa_2" data-name="Warstwa 2">
                                  <g id="dashboard">
                                    <path
                                      d="M14.81,0a5.8,5.8,0,1,0,5.8,5.8A5.8,5.8,0,0,0,14.81,0Zm0,9.07A3.27,3.27,0,1,1,18.08,5.8,3.27,3.27,0,0,1,14.81,9.07Z"
                                      fill="#f4f7fa"
                                    />
                                    <path
                                      d="M27.06,29.46H2.53l.24-1.2a12.36,12.36,0,0,1,12-9.87A12.17,12.17,0,0,1,22,20.78a11.67,11.67,0,0,1,1.79,1.59,12.18,12.18,0,0,1,3,5.89Z"
                                      fill="none"
                                    />
                                    <path
                                      d="M24.75,19.78l-.29-.28-.27-.27a15,15,0,0,0-3.62-2.18L20.46,17c-.38-.15-.76-.29-1.15-.42L19,16.49q-.53-.15-1.05-.27l-.34-.07c-.38-.08-.76-.13-1.13-.18l-.27,0a13.35,13.35,0,0,0-1.41-.08h0a13.36,13.36,0,0,0-1.41.08l-.27,0c-.38.05-.76.1-1.13.18l-.34.07c-.35.08-.71.17-1.05.27l-.29.09c-.38.13-.77.27-1.14.42L9,17.06a15,15,0,0,0-3.62,2.18l-.56.55A14.84,14.84,0,0,0,0,29.7L0,32H19.4a8.31,8.31,0,0,1-.16-1.66,8.21,8.21,0,0,1,0-.86H2.53l.24-1.2a12.36,12.36,0,0,1,12-9.87A12.17,12.17,0,0,1,22,20.78a11.67,11.67,0,0,1,1.79,1.59,8.8,8.8,0,0,1,2.46-1A15.91,15.91,0,0,0,24.75,19.78Z"
                                      fill="#f4f7fa"
                                    />
                                    <path
                                      d="M28.47,18.79a11.51,11.51,0,0,0-4,.71A11.18,11.18,0,0,0,22,20.78a11.52,11.52,0,0,0-5,8.69c0,.28,0,.57,0,.86A11.4,11.4,0,0,0,17.05,32a11.53,11.53,0,1,0,11.41-13.2Zm0,20.76A9.21,9.21,0,0,1,19.4,32a8.31,8.31,0,0,1-.16-1.66,8.21,8.21,0,0,1,0-.86,9.24,9.24,0,0,1,4.51-7.09,8.8,8.8,0,0,1,2.46-1,9,9,0,0,1,2.22-.27,9.23,9.23,0,1,1,0,18.46Z"
                                      fill="#f4f7fa"
                                    />
                                    <path
                                      d="M32.24,24.91l-4.6,4.6a1.13,1.13,0,0,0,0,1.63,1.17,1.17,0,0,0,1.63,0l4.6-4.6a1.15,1.15,0,0,0-1.63-1.63Z"
                                      fill="#f4f7fa"
                                    />
                                    <circle
                                      cx="28.46"
                                      cy="23.41"
                                      r="1.15"
                                      fill="#f4f7fa"
                                    />
                                    <ellipse
                                      cx="27.62"
                                      cy="32.56"
                                      rx="1.23"
                                      ry="1.6"
                                      fill="#f4f7fa"
                                    />
                                    <circle
                                      cx="35.38"
                                      cy="30.33"
                                      r="1.15"
                                      fill="#f4f7fa"
                                    />
                                    <circle
                                      cx="21.54"
                                      cy="30.33"
                                      r="1.15"
                                      fill="#f4f7fa"
                                    />
                                  </g>
                                </g>
                              </svg>{' '}
                            </div>
                            <h2 className="box-title">Employment Details</h2>
                            <ul className="box-actions">
                              <li>
                                {' '}<a href="" title="Help">
                                  {' '}<svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 50 50"
                                  >
                                    <circle
                                      cx="25"
                                      cy="25"
                                      r="24"
                                      fill="none"
                                      stroke="#fff"
                                      strokeLinecap="round"
                                      strokeMiterlimit="10"
                                      strokeWidth="2"
                                    />
                                    <rect width="50" height="50" fill="none" />
                                    <path
                                      d="M23.53,30.41V28.94a4.75,4.75,0,0,1,1.08-3.23l2.4-3.3c1.25-1.72,1.68-2.55,1.68-3.77a3.22,3.22,0,0,0-3.48-3.34c-2,0-3.3,1.22-3.73,3.41a.32.32,0,0,1-.4.29l-2.26-.4a.32.32,0,0,1-.29-.4,6.42,6.42,0,0,1,6.74-5.7c3.87,0,6.49,2.55,6.49,6.1A7.47,7.47,0,0,1,30,23.27l-2.4,3.3a3.7,3.7,0,0,0-.93,2.69V30.4a.34.34,0,0,1-.36.36H23.89A.33.33,0,0,1,23.53,30.41Zm-.18,3.44a.34.34,0,0,1,.36-.36h2.73a.34.34,0,0,1,.36.36v3.08a.34.34,0,0,1-.36.36H23.71a.34.34,0,0,1-.36-.36Z"
                                      fill="#fff"
                                    />
                                  </svg>{' '}
                                </a>{' '}
                              </li>
                            </ul>
                          </li>
                        </ul>
                        <div className="box-content">
                          <div className="box-tab active">
                            <div className="box-inner box-inner--no-pad">
                              <div className="toggler active" id="globalFields2">
                                <div className="toggler-bar toggler-bar--no-top js-toggler-bar" onClick={() => this.toggleElement('globalFields2')}>
                                  <h2 className="toggler-title">
                                    Global fields
                                  </h2>
                                  <span className="box-filter-arrow" />{' '}
                                </div>
                                <div className="toggler-content">
                                  <table className="table table--stripes">
                                    <tbody>
                                      <tr>
                                        <td className="table-align">
                                          <span className="table-label">
                                            Hire Date
                                          </span>
                                        </td>
                                        <td>
                                          <input
                                            type="text"
                                            className="entry-input js-datepicker"
                                          />
                                        </td>
                                      </tr>
                                      <tr>
                                        <td className="table-align">
                                          <span className="table-label">
                                            Original Start Date
                                          </span>
                                        </td>
                                        <td>
                                          <input
                                            type="text"
                                            className="entry-input js-datepicker"
                                          />
                                        </td>
                                      </tr>
                                      <tr>
                                        <td className="table-align">
                                          <span className="table-label">
                                            Seniority Start Date
                                          </span>
                                        </td>
                                        <td>
                                          <input
                                            type="text"
                                            className="entry-input js-datepicker"
                                          />
                                        </td>
                                      </tr>
                                      <tr>
                                        <td className="table-align">
                                          <span className="table-label">
                                            Service Date
                                          </span>
                                        </td>
                                        <td>
                                          <input
                                            type="text"
                                            className="entry-input js-datepicker"
                                          />
                                        </td>
                                      </tr>
                                      <tr>
                                        <td className="table-align">
                                          <span className="table-label">
                                            Professional Service Date
                                          </span>
                                        </td>
                                        <td>
                                          <input
                                            type="text"
                                            className="entry-input js-datepicker"
                                          />
                                        </td>
                                      </tr>
                                      <tr>
                                        <td className="table-align">
                                          <span className="table-label">
                                            Rehire Date
                                          </span>
                                        </td>
                                        <td>
                                          <input
                                            type="text"
                                            className="entry-input js-datepicker"
                                          />
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="step-tab-panel" id="step4">
                      <div className="box">
                        <ul className="box-headings js-tabs">
                          <li className="box-heading active">
                            <div className="box-icon">
                              {' '}<svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 38.5 38.5"
                              >
                                <g id="Warstwa_2" data-name="Warstwa 2">
                                  <g id="dashboard">
                                    <polygon
                                      points="0 0 0 38.5 38.5 38.5 38.5 36 34.5 36 34.5 12 32 12 32 36 26.5 36 26.5 16 24 16 24 36 18.5 36 18.5 20 16 20 16 36 10.5 36 10.5 24 8 24 8 36 2.5 36 2.5 0 0 0"
                                      fill="#f4f7fa"
                                    />
                                    <polygon
                                      points="24 4.27 24 8.5 26.5 8.5 26.5 0 18 0 18 2.5 22.23 2.5 10.29 14.44 12.06 16.2 24 4.27"
                                      fill="#f4f7fa"
                                    />
                                  </g>
                                </g>
                              </svg>{' '}
                            </div>
                            <h2 className="box-title">
                              Compensation Information
                            </h2>
                            <ul className="box-actions">
                              <li> <a href="">Edit</a> </li>
                              <li>
                                {' '}<a href="" title="Help">
                                  {' '}<svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 50 50"
                                  >
                                    <circle
                                      cx="25"
                                      cy="25"
                                      r="24"
                                      fill="none"
                                      stroke="#fff"
                                      strokeLinecap="round"
                                      strokeMiterlimit="10"
                                      strokeWidth="2"
                                    />
                                    <rect width="50" height="50" fill="none" />
                                    <path
                                      d="M23.53,30.41V28.94a4.75,4.75,0,0,1,1.08-3.23l2.4-3.3c1.25-1.72,1.68-2.55,1.68-3.77a3.22,3.22,0,0,0-3.48-3.34c-2,0-3.3,1.22-3.73,3.41a.32.32,0,0,1-.4.29l-2.26-.4a.32.32,0,0,1-.29-.4,6.42,6.42,0,0,1,6.74-5.7c3.87,0,6.49,2.55,6.49,6.1A7.47,7.47,0,0,1,30,23.27l-2.4,3.3a3.7,3.7,0,0,0-.93,2.69V30.4a.34.34,0,0,1-.36.36H23.89A.33.33,0,0,1,23.53,30.41Zm-.18,3.44a.34.34,0,0,1,.36-.36h2.73a.34.34,0,0,1,.36.36v3.08a.34.34,0,0,1-.36.36H23.71a.34.34,0,0,1-.36-.36Z"
                                      fill="#fff"
                                    />
                                  </svg>{' '}
                                </a>{' '}
                              </li>
                            </ul>
                          </li>
                        </ul>
                        <div className="box-content">
                          <div className="row-no-padding">
                            <div className="col-xs-12">
                              <div className="box-tab active">
                                <div className="box-inner box-inner--no-pad">
                                  <div className="toggler active" id="compensationGroup">
                                    <div className="toggler-bar toggler-bar--no-top js-toggler-bar" onClick={() => this.toggleElement('compensationGroup')}>
                                      <h2 className="toggler-title">
                                        Compensation Group
                                      </h2>
                                      <span className="box-filter-arrow" />{' '}
                                    </div>
                                    <div className="toggler-content">
                                      <table className="table table--stripes">
                                        <tbody>
                                          <tr>
                                            <td className="table-align">
                                              <span className="table-label">
                                                Pay Type
                                              </span>
                                            </td>
                                            <td>
                                              <select className="custom-select">
                                                <option value="v-1">
                                                  Drop-down
                                                </option>
                                              </select>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td className="table-align">
                                              <span className="table-label">
                                                Pay Group
                                              </span>
                                            </td>
                                            <td>
                                              <select className="custom-select">
                                                <option value="v-1">
                                                  Drop-down
                                                </option>
                                              </select>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td className="table-align">
                                              <span className="table-label">
                                                Is Eligible For Benefit
                                              </span>
                                            </td>
                                            <td>
                                              <select className="custom-select">
                                                <option value="v-1">Yes</option>
                                                <option value="v-2">No</option>
                                              </select>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td className="table-align">
                                              <span className="table-label">
                                                Is Eligible For Car
                                              </span>
                                            </td>
                                            <td>
                                              <select className="custom-select">
                                                <option value="v-1">Yes</option>
                                                <option value="v-2">No</option>
                                              </select>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td className="table-align">
                                              <span className="table-label">
                                                Benefit Rate
                                              </span>
                                            </td>
                                            <td>
                                              <input
                                                type="text"
                                                className="entry-input"
                                              />
                                            </td>
                                          </tr>
                                          <tr>
                                            <td className="table-align">
                                              <span className="table-label">
                                                Compa Ratio
                                              </span>
                                            </td>
                                            <td>
                                              <input
                                                type="text"
                                                className="entry-input"
                                              />
                                            </td>
                                          </tr>
                                          <tr>
                                            <td className="table-align">
                                              <span className="table-label">
                                                Range Penetration
                                              </span>
                                            </td>
                                            <td>
                                              <input
                                                type="text"
                                                className="entry-input"
                                              />
                                            </td>
                                          </tr>
                                          <tr>
                                            <td className="table-align">
                                              <span className="table-label">
                                                AnnualizedSalary (AnnualizedSalary)
                                              </span>
                                            </td>
                                            <td>
                                              <input
                                                type="text"
                                                className="entry-input"
                                              />
                                            </td>
                                          </tr>
                                          <tr>
                                            <td className="table-align">
                                              <span className="table-label">
                                                Total Earning Opportunity (TEO)
                                              </span>
                                            </td>
                                            <td>
                                              <input
                                                type="text"
                                                className="entry-input"
                                              />
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                  </div>
                                  <div className="toggler active" id="compensation">
                                    <div className="toggler-bar js-toggler-bar" onClick={() => this.toggleElement('compensation')}>
                                      <h2 className="toggler-title">
                                        Compensation
                                      </h2>
                                      <span className="box-filter-arrow" />{' '}
                                    </div>
                                    <div className="toggler-content">
                                      <table className="table table--stripes">
                                        <tbody>
                                          <tr>
                                            <td className="table-align">
                                              <span className="table-label">
                                                Pay Component
                                              </span>
                                            </td>
                                            <td>
                                              <select className="custom-select">
                                                <option value="v-1">
                                                  Basic Pay
                                                </option>
                                                <option value="v-2">
                                                  Additional Pay
                                                </option>
                                              </select>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td className="table-align">
                                              <span className="table-label">
                                                Amount
                                              </span>
                                            </td>
                                            <td>
                                              <input
                                                type="text"
                                                className="entry-input"
                                              />
                                            </td>
                                          </tr>
                                          <tr>
                                            <td className="table-align">
                                              <span className="table-label">
                                                Currency
                                              </span>
                                            </td>
                                            <td>
                                              <select className="custom-select">
                                                <option value="v-1">
                                                  Drop-down
                                                </option>
                                              </select>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td className="table-align">
                                              <span className="table-label">
                                                Frequency
                                              </span>
                                            </td>
                                            <td>
                                              <select className="custom-select">
                                                <option value="v-1">
                                                  Annual
                                                </option>
                                                <option value="v-2">
                                                  Monthly
                                                </option>
                                                <option value="v-3">
                                                  Weekly
                                                </option>
                                              </select>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="box">
                        <ul className="box-headings js-tabs">
                          <li className="box-heading active">
                            <div className="box-icon">
                              {' '}<svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 37.99 37.97"
                              >
                                <g id="Warstwa_2" data-name="Warstwa 2">
                                  <g id="dashboard">
                                    <path
                                      d="M24.39.85a3.08,3.08,0,0,0-4.24,0L7,14H3a3,3,0,0,0-3,3V35a3,3,0,0,0,3,3H31a3,3,0,0,0,3-3v-14l3.12-3.12a3,3,0,0,0,0-4.24h0ZM2,16H32V28H2ZM32,36H2V30H32Zm5.18-19.51L36.11,16l-1.78,1.79-.47-1.63a2.8,2.8,0,0,0-.13-.39l-.47-1.05-1-.47A3,3,0,0,0,31,14H9.85L22.26,1.56Z"
                                      fill="#f4f7fa"
                                    />
                                    <rect
                                      x="6.98"
                                      y="20.97"
                                      width="6"
                                      height="4"
                                      fill="#f4f7fa"
                                    />
                                  </g>
                                </g>
                              </svg>{' '}
                            </div>
                            <h2 className="box-title">One Time Payment</h2>
                            <ul className="box-actions">
                              <li> <a href="">Edit</a> </li>
                              <li>
                                {' '}<a href="" title="Help">
                                  {' '}<svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 50 50"
                                  >
                                    <circle
                                      cx="25"
                                      cy="25"
                                      r="24"
                                      fill="none"
                                      stroke="#fff"
                                      strokeLinecap="round"
                                      strokeMiterlimit="10"
                                      strokeWidth="2"
                                    />
                                    <rect width="50" height="50" fill="none" />
                                    <path
                                      d="M23.53,30.41V28.94a4.75,4.75,0,0,1,1.08-3.23l2.4-3.3c1.25-1.72,1.68-2.55,1.68-3.77a3.22,3.22,0,0,0-3.48-3.34c-2,0-3.3,1.22-3.73,3.41a.32.32,0,0,1-.4.29l-2.26-.4a.32.32,0,0,1-.29-.4,6.42,6.42,0,0,1,6.74-5.7c3.87,0,6.49,2.55,6.49,6.1A7.47,7.47,0,0,1,30,23.27l-2.4,3.3a3.7,3.7,0,0,0-.93,2.69V30.4a.34.34,0,0,1-.36.36H23.89A.33.33,0,0,1,23.53,30.41Zm-.18,3.44a.34.34,0,0,1,.36-.36h2.73a.34.34,0,0,1,.36.36v3.08a.34.34,0,0,1-.36.36H23.71a.34.34,0,0,1-.36-.36Z"
                                      fill="#fff"
                                    />
                                  </svg>{' '}
                                </a>{' '}
                              </li>
                            </ul>
                          </li>
                        </ul>
                        <div className="box-content">
                          <div className="row-no-padding">
                            <div className="col-xs-12 col-lg-12 no-padding">
                              <div className="box-tab active">
                                <div className="box-inner box-inner--no-pad">
                                  <div className="toggler active" id="timePayment">
                                    <div className="toggler-bar toggler-bar--no-top js-toggler-bar" onClick={() => this.toggleElement('timePayment')}>
                                      <h2 className="toggler-title">
                                        One Time Payment
                                      </h2>
                                      <span className="box-filter-arrow" />{' '}
                                    </div>
                                    <div className="toggler-content">
                                      <table className="table table--stripes">
                                        <tbody>
                                          <tr>
                                            <td className="table-align">
                                              <span className="table-label">
                                                Pay Component
                                              </span>
                                            </td>
                                            <td>
                                              <select className="custom-select">
                                                <option value="v-1">
                                                  One Time Bonus
                                                </option>
                                                <option value="v-2">
                                                  Spot Bonus
                                                </option>
                                                <option value="v-3">
                                                  Manager Appreciation Award
                                                </option>
                                              </select>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td className="table-align">
                                              <span className="table-label">
                                                Amount
                                              </span>
                                            </td>
                                            <td>
                                              <input
                                                type="text"
                                                className="entry-input"
                                              />
                                            </td>
                                          </tr>
                                          <tr>
                                            <td className="table-align">
                                              <span className="table-label">
                                                Currency
                                              </span>
                                            </td>
                                            <td>
                                              <select className="custom-select">
                                                <option value="v-1">
                                                  Drop-down
                                                </option>
                                              </select>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td className="table-align">
                                              <span className="table-label">
                                                Payment Date
                                              </span>
                                            </td>
                                            <td>
                                              <input
                                                type="text"
                                                className="entry-input js-datepicker"
                                              />
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="box">
                        <ul className="box-headings js-tabs">
                          <li className="box-heading active">
                            <div className="box-icon">
                              {' '}<svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 32.07 37.59"
                              >
                                <g id="Warstwa_2" data-name="Warstwa 2">
                                  <g id="dashboard">
                                    <path
                                      d="M16,0A16,16,0,0,0,3.47,26L5,24.66A14,14,0,1,1,16,30.07H13.86l1.33-1.65,2.19-2.56-1.53-1.31-5.59,6.52,5.59,6.52,1.53-1.31-3.61-4.21H16A16,16,0,1,0,16,0Z"
                                      fill="#f4f7fa"
                                    />
                                    <polygon
                                      points="15.03 8.02 15.03 14.03 11.02 14.03 11.02 16.04 17.04 16.04 17.04 8.02 15.03 8.02"
                                      fill="#f4f7fa"
                                    />
                                  </g>
                                </g>
                              </svg>{' '}
                            </div>
                            <h2 className="box-title">
                              Recurring Deduction / Payment
                            </h2>
                            <ul className="box-actions">
                              <li> <a href="">Edit</a> </li>
                              <li>
                                {' '}<a href="" title="Help">
                                  {' '}<svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 50 50"
                                  >
                                    <circle
                                      cx="25"
                                      cy="25"
                                      r="24"
                                      fill="none"
                                      stroke="#fff"
                                      strokeLinecap="round"
                                      strokeMiterlimit="10"
                                      strokeWidth="2"
                                    />
                                    <rect width="50" height="50" fill="none" />
                                    <path
                                      d="M23.53,30.41V28.94a4.75,4.75,0,0,1,1.08-3.23l2.4-3.3c1.25-1.72,1.68-2.55,1.68-3.77a3.22,3.22,0,0,0-3.48-3.34c-2,0-3.3,1.22-3.73,3.41a.32.32,0,0,1-.4.29l-2.26-.4a.32.32,0,0,1-.29-.4,6.42,6.42,0,0,1,6.74-5.7c3.87,0,6.49,2.55,6.49,6.1A7.47,7.47,0,0,1,30,23.27l-2.4,3.3a3.7,3.7,0,0,0-.93,2.69V30.4a.34.34,0,0,1-.36.36H23.89A.33.33,0,0,1,23.53,30.41Zm-.18,3.44a.34.34,0,0,1,.36-.36h2.73a.34.34,0,0,1,.36.36v3.08a.34.34,0,0,1-.36.36H23.71a.34.34,0,0,1-.36-.36Z"
                                      fill="#fff"
                                    />
                                  </svg>{' '}
                                </a>{' '}
                              </li>
                            </ul>
                          </li>
                        </ul>
                        <div className="box-content">
                          <div className="row-no-padding">
                            <div className="col-xs-12 col-lg-12 no-padding">
                              <div className="box-tab active">
                                <div className="box-inner box-inner--no-pad">
                                  <div className="toggler active" id="recurringDeduction">
                                    <div className="toggler-bar toggler-bar--no-top js-toggler-bar" onClick={() => this.toggleElement('recurringDeduction')}>
                                      <h2 className="toggler-title">
                                        Recurring Deduction / Payment
                                      </h2>
                                      <span className="box-filter-arrow" />{' '}
                                    </div>
                                    <div className="toggler-content">
                                      <table className="table table--stripes">
                                        <tbody>
                                          <tr>
                                            <td className="table-align">
                                              <span className="table-label">
                                                Pay Component
                                              </span>
                                            </td>
                                            <td>
                                              <select className="custom-select">
                                                <option value="v-1">
                                                  One Time Bonus
                                                </option>
                                                <option value="v-2">
                                                  Spot Bonus
                                                </option>
                                                <option value="v-3">
                                                  Manager Appreciation Award
                                                </option>
                                              </select>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td className="table-align">
                                              <span className="table-label">
                                                Amount
                                              </span>
                                            </td>
                                            <td>
                                              <input
                                                type="text"
                                                className="entry-input"
                                              />
                                            </td>
                                          </tr>
                                          <tr>
                                            <td className="table-align">
                                              <span className="table-label">
                                                Currency
                                              </span>
                                            </td>
                                            <td>
                                              <select className="custom-select">
                                                <option value="v-1">
                                                  Drop-down
                                                </option>
                                              </select>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td className="table-align">
                                              <span className="table-label">
                                                Start Date
                                              </span>
                                            </td>
                                            <td>
                                              <input
                                                type="text"
                                                className="entry-input js-datepicker"
                                              />
                                            </td>
                                          </tr>
                                          <tr>
                                            <td className="table-align">
                                              <span className="table-label">
                                                End Date
                                              </span>
                                            </td>
                                            <td>
                                              <input
                                                type="text"
                                                className="entry-input js-datepicker"
                                              />
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default AddEmployee;
