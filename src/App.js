import React from 'react';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import DetailsPage from './components/DetailsPage/DetailsPage';
const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/detail/:idLeague">
          <DetailsPage></DetailsPage>
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="*">
          <h1 style={{ textAlign: 'center', color: 'red' }}>404 error! page not found</h1>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;