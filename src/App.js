import React from 'react';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Favorites } from './components/Favorites';
import { Completed } from './components/Completed';
import { Add } from './components/Add';
import {GlobalProvider} from './context/GlobalState'

function App() {
  return (
    <GlobalProvider>
      <Router>

      <Navbar/>

        <Switch>
          <Route exact path="/">
            <Favorites />
          </Route>

          <Route exact path="/completed">
            <Completed />
          </Route>

          <Route exact path="/add">
            <Add />
          </Route>
        </Switch>

      </Router>
    </GlobalProvider>
  );
}

export default App;
