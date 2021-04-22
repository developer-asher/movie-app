import React, { Component } from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';

export default class App extends Component {
  render() {
    return (
      <HashRouter>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Route path='/' exact={true} component={Home} />
        <Route path='/about' component={About} />
      </HashRouter>
    );
  }
}
