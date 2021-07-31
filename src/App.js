import React from 'react';
import { HashRouter as Router, Switch, Route} from 'react-router-dom';
  
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Overview from './components/Overview';
import DesignsInfo from './components/DesignsInfo';
import withRoot from './components/withRoot';

function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/overview" component={ Overview } />
        <Route exact path="/about" component={ AboutMe } />
        {DesignsInfo.map((design) => (
          <Route exact path={ design.path } component={ design.page } />
        ))};
      </Switch>
    </Router>
  );
}



export default withRoot(App);
