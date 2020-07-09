import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Seconds from './components/seconds';
import MyName from './components/myName';
import Navigation from './components/navigation';
import Stream from './components/stream';
import Todo from './components/todo';
import NotFound from './components/notFound';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route path="/myname" component={MyName} />
        <Route path="/seconds" component={Seconds} />
        <Route path="/stream" component={Stream} />
        <Route path="/todo" component={Todo} />
        <Route path="/not-found" component={NotFound} />
        <Redirect from="/" exact to="/myname" />
        <Redirect to="/not-found" />
      </Switch>
    </div>
  );
}

export default App;
