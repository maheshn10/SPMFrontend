/**
 * @file SPM BreadCrumbs.
 * @author Mahesh
 */
import React from 'react';
import './BreadCrumbs.scss';

class BreadCrumbs extends React.Component {
  render() {
    return (
      <ul className="breadcrumbs">
        <li>
          <a href="panel-index.html" className="breadcrumbs-item active">Home</a>
        </li>
      </ul>
    );
  }
}

export default BreadCrumbs;
