import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Layout from '../Layout/Layout';
import Home from '../Home/Home';
import MyTeam from '../MyTeam/MyTeam';
import PersonalInfo from '../PersonalInfo/PersonalInfo';
import JobInfo from '../JobInfo/JobInfo';
import Compensation from '../Compensation/Compensation';
import Benefits from '../Benefits/Benefits';
import TimeOff from '../TimeOff/TimeOff';
import Organisation from '../Organisation/Organisation';
import Workers from '../Workers/Workers';
import Development from '../Development/Development';
import Expenses from '../Expenses/Expenses';
import Reports from '../Reports/Reports';
import Audit from '../Audit/Audit';

class Routes extends React.Component {
  render() {
    console.log(this.props);
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Layout}>
          <IndexRoute component={Home} />
          <Route path="MyTeam" name="MyTeam" component={MyTeam} />
          <Route path="PersonalInfo" name="PersonalInfo" component={PersonalInfo} />
          <Route path="JobInfo" name="JobInfo" component={JobInfo} />
          <Route path="Compensation" name="Compensation" component={Compensation} />
          <Route path="Benefits" name="Benefits" component={Benefits} />
          <Route path="TimeOff" name="TimeOff" component={TimeOff} />
          <Route path="Organisation" name="Organisation" component={Organisation} />
          <Route path="Workers" name="Workers" component={Workers} />
          <Route path="Development" name="Development" component={Development} />
          <Route path="Expenses" name="Expenses" component={Expenses} />
          <Route path="Reports" name="Reports" component={Reports} />
          <Route path="Audit" name="Audit" component={Audit} />
        </Route>
      </Router>
    );
  }
}

export default Routes;
