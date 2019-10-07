import React, { Component,Fragment } from 'react'
import {Route,BrowserRouter,Switch} from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import Chat from './components/Chat';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <Fragment>
            <Home />
            <Switch>
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/chat" component={Chat} />
            </Switch>
          </Fragment>
        </BrowserRouter>
    )
  }
}
export default App;