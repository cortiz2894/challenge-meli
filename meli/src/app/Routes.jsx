import { React } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";


import {Home} from './pages/home/Home'

const AplicationRoutes = () => {

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );

}

export default AplicationRoutes;
