import React from 'react';
import {Route} from 'react-router-dom';

//components
import Login from './components/Login/Login';
import Friends from './components/Friends/Friends';

//styles
import './App.scss';

function App() {
  return (
    <div className="App">
      <h1> hello world</h1>
      <Route exact path= '/'>
        <Login />
      </Route>
      <Route exact path= '/friends'>
        <Friends />
      </Route>
    </div>
  );
}//end App

export default App;
