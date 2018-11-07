import React, { Component, Fragment } from 'react';
import {BrowserRouter, HashRouter, Switch, Route} from 'react-router-dom';
import Users from './components/Users'
import NotFound from './components/NotFound'
import Todos from './components/ToDos';
import Posts from './components/Posts'

class App extends Component {
  constructor(){
    super()
}

  render() {
    return (
        <HashRouter>
        <Switch>
          <Route exact path="/" component={Users}/>
          <Route exact path="/users" component={Users}/>
          <Route exact path="/todos/" component={Todos}/>
          <Route path="/todos/:userID" component={Todos}/>
          <Route exact path="/posts/" component={Posts}/>
          <Route path="/posts/:userID" component={Posts}/>
          <Route component={NotFound} />
        </Switch>
        </HashRouter>
    );
  }
}

export default App;
