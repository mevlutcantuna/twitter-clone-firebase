import React from 'react';
import {BrowserRouter as  Router,Route,Switch} from 'react-router-dom';
import AuthPage from './components/auth/AuthPage';
import HomePage from './components/home/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route path={'/home'} component={HomePage}/>
        <Route path={'/'} component={AuthPage}/>
      </Switch>
    </Router>
  );
}

export default App;
