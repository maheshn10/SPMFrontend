/**
 * @file MyTeam Component.
 * @author Mahesh
 */
import React from 'react';

class MyTeam extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-4">
            <div className="box box--bg">
              <ul className="box-headings">
                <li className="box-heading active">
                  <div className="box-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72">
                      <title>Asset 4</title>
                      <g id="Layer_2" data-name="Layer 2">
                        <g id="Layer_1-2" data-name="Layer 1">
                          <path
                            className="cls-1" d="M36,22.9a7.67,7.67,0,1,0-7.67-7.67A7.68,7.68,0,0,0,36,22.9Zm0-11.35a3.67,3.67,0,1,1-3.67,3.67A3.68,3.68,0,0,1,36,11.56Z"
                          />
                          <path
                            className="cls-1" d="M70,56.54H66.27V50.6a2,2,0,0,0-2-2H38V44.36a22.25,22.25,0,1,0-17.21-5.95l.09.09A22.14,22.14,0,0,0,34,44.36V48.6H7.73a2,2,0,0,0-2,2v5.93H2a2,2,0,0,0-2,2V70a2,2,0,0,0,2,2H13.46a2,2,0,0,0,2-2V58.54a2,2,0,0,0-2-2H9.73V52.6H34v3.93H30.27a2,2,0,0,0-2,2V70a2,2,0,0,0,2,2H41.73a2,2,0,0,0,2-2V58.54a2,2,0,0,0-2-2H38V52.6H62.27v3.93H58.54a2,2,0,0,0-2,2V70a2,2,0,0,0,2,2H70a2,2,0,0,0,2-2V58.54A2,2,0,0,0,70,56.54ZM24.31,36.19a6.48,6.48,0,0,1,4.81-5.55,28.44,28.44,0,0,1,13.76,0,6.49,6.49,0,0,1,4.82,5.55,18.16,18.16,0,0,1-23.39,0ZM36,4A18.2,18.2,0,0,1,50.87,32.72a10.45,10.45,0,0,0-7-6,32.51,32.51,0,0,0-15.71,0,10.42,10.42,0,0,0-7,6A18.2,18.2,0,0,1,36,4ZM11.46,68H4V60.54h7.46Zm28.27,0H32.27V60.54h7.46ZM68,68H60.54V60.54H68Z"
                          />
                        </g>
                      </g>
                    </svg>
                  </div>
                  <h2 className="box-title">My Team</h2>
                  <ul className="box-actions">
                    <li>
                      <div className="box-take-action js-box-dropdown">
                                                    Take Action
                                                    <span className="box-filter-arrow" />
                        <ul className="take-action box-dropdown-content js-box-dropdown-content">
                          <li><a className="js-show-add-employee" href="add-employee.html">Add New Employee</a></li>
                        </ul>

                      </div>
                    </li>
                    <li>
                      <a title="Help">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                          <circle
                            cx="25" cy="25" r="24" fill="none" stroke="#fff" strokeLinecap="round"
                            strokeMiterlimit="10" strokeWidth="2"
                          />
                          <rect width="50" height="50" fill="none" />
                          <path
                            d="M23.53,30.41V28.94a4.75,4.75,0,0,1,1.08-3.23l2.4-3.3c1.25-1.72,1.68-2.55,1.68-3.77a3.22,3.22,0,0,0-3.48-3.34c-2,0-3.3,1.22-3.73,3.41a.32.32,0,0,1-.4.29l-2.26-.4a.32.32,0,0,1-.29-.4,6.42,6.42,0,0,1,6.74-5.7c3.87,0,6.49,2.55,6.49,6.1A7.47,7.47,0,0,1,30,23.27l-2.4,3.3a3.7,3.7,0,0,0-.93,2.69V30.4a.34.34,0,0,1-.36.36H23.89A.33.33,0,0,1,23.53,30.41Zm-.18,3.44a.34.34,0,0,1,.36-.36h2.73a.34.34,0,0,1,.36.36v3.08a.34.34,0,0,1-.36.36H23.71a.34.34,0,0,1-.36-.36Z"
                            fill="#fff"
                          />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <div className="box-content box-content--tall">
                <div className="box-tab active">
                  <div className="box-inner">
                    <div className="box-nav">
                      <div action="#" className="box-search">
                        <input type="submit" value="" className="navbar-search-submit" />
                        <input type="text" className="search navbar-search-input" placeholder="Search" />
                      </div>
                      <div className="box-filter">
                        <span className="box-filter-text">
                                                        Filter
                         <span className="box-filter-arrow" />
                        </span>
                      </div>
                    </div>
                    <div className="compare-single-wrapper" id="users">
                      <div className="compare-list list">
                        <div className="compare-single">
                          <img src="../../assets/images/global/sample-avatar-2.jpg" alt="" className="compare-avatar" />
                          <div className="compare-user-info">
                            <strong className="name compare-user-name">Maria Torres</strong>
                            <p className="compare-user-details">
                                                                Sales Manager <br /> 000132
                                                            </p>
                          </div>
                          <div className="compare-more-info js-compare-more-info">More Info &raquo;</div>
                        </div>
                        <div className="compare-single">
                          <img src="../../assets/images/global/sample-avatar.jpg" alt="" className="compare-avatar" />
                          <div className="compare-user-info">
                            <strong className="name compare-user-name">Samruddhi Vairat</strong>
                            <p className="compare-user-details">
                                                                Director <br /> 000661
                                                            </p>
                          </div>
                          <div className="compare-more-info js-compare-more-info">More Info &raquo;</div>
                        </div>
                        <div className="compare-single">
                          <img src="../../assets/images/global/sample-avatar-4.jpg" alt="" className="compare-avatar" />
                          <div className="compare-user-info">
                            <strong className="name compare-user-name">Mariano Kuphal</strong>
                            <p className="compare-user-details">
                                                                Department Manager <br /> 000665
                                                            </p>
                          </div>
                          <div className="compare-more-info js-compare-more-info">More Info &raquo;</div>
                        </div>
                        <div className="compare-single">
                          <img src="../../assets/images/global/sample-avatar-5.jpg" alt="" className="compare-avatar" />
                          <div className="compare-user-info">
                            <strong className="name compare-user-name">Ash Manoj</strong>
                            <p className="compare-user-details">
                                                                Sales Manager <br /> 000225
                                                            </p>
                          </div>
                          <div className="compare-more-info js-compare-more-info">More Info &raquo;</div>
                        </div>
                        <div className="compare-single">
                          <img src="../../assets/images/global/sample-avatar-3.jpg" alt="" className="compare-avatar" />
                          <div className="compare-user-info">
                            <strong className="name compare-user-name">Sara Lindgren</strong>
                            <p className="compare-user-details">
                                                                Director <br /> 000223
                                                            </p>
                          </div>
                          <div className="compare-more-info js-compare-more-info">More Info &raquo;</div>
                        </div>
                        <div className="compare-single">
                          <img src="../../assets/images/global/sample-avatar-6.jpg" alt="" className="compare-avatar" />
                          <div className="compare-user-info">
                            <strong className="name compare-user-name">Sandra Bothha</strong>
                            <p className="compare-user-details">
                                                                Department Manager <br /> 003265
                                                            </p>
                          </div>
                          <div className="compare-more-info js-compare-more-info">More Info &raquo;</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-md-8 worker-col">
            <div className="box box--bg">
              <ul className="box-headings">
                <li className="box-heading box-heading--worker active">
                  <h2 className="box-title">Samruddhi Vairat</h2>
                  <div className="box-icon box-icon--close js-box-close" data-checkbox="compare-02">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27.75 27.75">
                      <title>icon-close</title>
                      <path
                        d="M.54,3.44l3-3L13.9,10.79,24.69,0l3.06,3.06L17,13.85,27.48,24.37l-3,3L14,16.85,3.06,27.75,0,24.69l10.9-10.9Z"
                        fill="#bdccd4"
                      />
                    </svg>
                  </div>
                </li>
              </ul>
              <div className="box-content box-content--tall">
                <div className="box-tab active">
                  <div className="box-inner">
                    <div className="box-nav">
                      <div className="box-take-action js-box-dropdown">
                                                    Take Action
                                                    <span className="box-filter-arrow" />
                        <ul className="take-action box-dropdown-content js-box-dropdown-content">
                          <li><a >Change Personal Details</a></li>
                          <li><a >Change Employment Details</a></li>
                          <li><a >Change Compensation</a></li>
                          <li><a >Change Benefits</a></li>
                          <li><a href="terminate.html">Terminate</a></li>
                          <li><a >Manage Recurring and Deduction</a></li>
                          <li><a href="promotion-demotion.html">Promotion / Demotion</a></li>
                          <li><a href="organization-change.html">Change Organization</a></li>
                          <li><a href="transfer.html">Transfer</a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="compare-single-wrapper">
                      <div className="js-scrollbar js-scrollbar--tall">
                        <div className="person person--inline">
                          <div className="person-photo">
                            <img src="../../assets/images/global/sample-avatar.jpg" alt="Samruddhi Vairat" title="Samruddhi Vairat" />
                          </div>
                          <div className="person-data">
                            <h3 className="person-name">Samruddhi Vairat</h3>
                            <div className="person-position">Director</div>
                            <span className="person-pin">000661</span>
                          </div>
                        </div>
                        <div className="toggler">
                          <div className="toggler-bar js-toggler-bar">
                            <h2 className="toggler-title">Current Job</h2>
                            <span className="box-filter-arrow" />
                          </div>
                          <div className="toggler-content">
                            <div className="toggler-content-inner">
                              <table className="table">
                                <tbody>
                                  <tr>
                                    <td><span className="table-label">Position:</span></td>
                                    <td>Director, Global Support - EMEA</td>
                                  </tr>
                                  <tr>
                                    <td><span className="table-label">Manager:</span></td>
                                    <td>Susan Stainberg</td>
                                  </tr>
                                  <tr>
                                    <td><span className="table-label">Organisation:</span>:</td>
                                    <td>Global Support Center</td>
                                  </tr>
                                  <tr>
                                    <td><span className="table-label">Grade:</span></td>
                                    <td>Management</td>
                                  </tr>
                                  <tr>
                                    <td><span className="table-label">Grade profile:</span></td>
                                    <td>Sweden</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                        <div className="toggler">
                          <div className="toggler-bar js-toggler-bar">
                            <h2 className="toggler-title">Performance</h2>
                            <span className="box-filter-arrow" />
                          </div>
                          <div className="toggler-content">
                            <div className="toggler-content-inner">
                              <table className="table">
                                <tbody>
                                  <tr>
                                    <td><span className="table-label">Previous review rating::</span></td>
                                    <td>3 - Meets Expectations</td>
                                  </tr>
                                </tbody>
                              </table>
                              <a className="compare-view-history">View History</a>
                            </div>
                          </div>
                        </div>
                        <div className="toggler">

                          <div className="toggler-bar js-toggler-bar">
                            <h2 className="toggler-title">Compensation</h2>
                            <span className="box-filter-arrow" />
                          </div>
                          <div className="toggler-content">

                            <div className="toggler-content-inner">

                              <div className="compensation-payrange">

                                <div className="compensation-icon">
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 90">
                                    <title>icon-compensation</title>
                                    <path
                                      d="M49,46.35V44.1a8.4,8.4,0,0,0-2.06-16.54H43.08a3.4,3.4,0,0,1,0-6.8h9.74a2.5,2.5,0,0,0,0-5H49v-2a2.5,2.5,0,1,0-5,0v2h-.89a8.4,8.4,0,0,0,0,16.8h3.84a3.4,3.4,0,0,1,0,6.8H37.18a2.5,2.5,0,0,0,0,5H44v2a2.5,2.5,0,1,0,5,0Z"
                                      fill="#f39638"
                                    />
                                    <path
                                      d="M87.5,85h-38c6.66-11,25-42.56,25-55.5a29.5,29.5,0,0,0-59,0c0,12.93,18.38,44.48,25,55.5H2.5a2.5,2.5,0,0,0,0,5h85a2.5,2.5,0,0,0,0-5ZM45,5A24.53,24.53,0,0,1,69.5,29.5c0,10.66-16.1,39.38-24.5,53.23C36.59,68.88,20.49,40.16,20.49,29.5A24.53,24.53,0,0,1,45,5Z"
                                      fill="#f39638"
                                    />
                                  </svg>
                                </div>

                                <div className="compensation-data">
                                  <div className="compensation-text">Pay range</div>
                                  <div className="compensation-amount">
                                                                            700, 000 - 975, 000
                                                                        </div>
                                  <div className="compensation-cur">Sek annual</div>
                                </div>
                              </div>
                              <table className="table-compensation">
                                <tr>
                                  <th>Compensation basis</th>
                                  <th>Current</th>
                                  <th>New</th>
                                  <th>Currency</th>
                                </tr>
                                <tr>
                                  <td>
                                    <strong>On target earnings</strong>
                                  </td>
                                  <td>
                                    <strong>962, 500, 00</strong> <br /> 143, 123,
                                                                            75
                                                                        </td>
                                  <td>
                                    <strong>875, 500, 00</strong> <br /> 130, 112,
                                                                            75
                                                                        </td>
                                  <td>
                                    <strong>SEK</strong> <br /> USD
                                                                        </td>
                                </tr>
                                <tr>
                                  <td>
                                    <strong>Total Base Pay</strong>
                                  </td>
                                  <td>
                                    <strong>922, 120, 00</strong> <br /> 343, 123,
                                                                            75
                                                                        </td>
                                  <td>
                                    <strong>375, 500, 00</strong> <br /> 135, 112,
                                                                            12
                                                                        </td>
                                  <td>
                                    <strong>SEK</strong> <br /> USD
                                                                        </td>
                                </tr>
                                <tr>
                                  <td>
                                    <strong>Total Salary &amp; Allowances</strong>
                                  </td>
                                  <td>
                                    <strong>922, 120, 00</strong> <br /> 343, 123,
                                                                            75
                                                                        </td>
                                  <td>
                                    <strong>375, 500, 00</strong> <br /> 135, 112,
                                                                            12
                                                                        </td>
                                  <td>
                                    <strong>SEK</strong> <br /> USD
                                                                        </td>
                                </tr>
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
    );
  }
}

export default MyTeam;