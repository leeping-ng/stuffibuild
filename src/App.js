import React from 'react';
import { useEffect } from 'react';
import { HashRouter as Router, Switch, Route, useLocation } from 'react-router-dom';
  
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Overview from './pages/Overview';
import DesignInfo from './components/DesignInfo';
import withRoot from './components/withRoot';

function App() {

  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/overview" component={ Overview } />
        <Route exact path="/about" component={ AboutMe } />
        {DesignInfo.map((design) => (
          <Route exact path={ design.path } component={ design.page } />
        ))};
      </Switch>
    </Router>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}


export default withRoot(App);