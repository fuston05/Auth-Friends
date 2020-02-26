import React from 'react';
import {Route} from 'react-router-dom';

//components
import Login from './components/Login/Login';
import Friends from './components/Friends/Friends';
import {PrivateRoute} from './components/PrivateRoute/PrivateRoute';

//styles
import './App.scss';

function App() {
  return (
    <div className="App">
      <h1> hello world</h1>
      <Route exact path= '/'>
        <Login />
      </Route>
      <PrivateRoute exact path= '/friends' component= {Friends} />
    </div>
  );
}//end App

export default App;
