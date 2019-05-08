import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import List from './pages/List';
import Maps from './pages/Maps';
import NewStreetArt from './pages/NewStreetArt';
import Login from './pages/Login';
import Signup from './pages/Signup';
import MainNavbar from "../MainNavbar";
import StreetArtDetail from "./pages/StreetArtDetail"

export default class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <MainNavbar />
        </header>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/list" component={List} />
          <Route path="/map" component={Maps} />
          <Route path="/new-street-art" component={NewStreetArt} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/street-art-detail" component={StreetArtDetail} />
          <Route render={() => <h2>404</h2>} />
        </Switch>
      </div>
    );
  }
}