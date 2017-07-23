import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import AppCss from './App.css';


export default class App extends Component {
  constructor(props) {
    super(props);
    // console.log(props);
  }

    render() {
      return (
        <main className="app">
          <Route path='/' component={Header}/>
        </main>
      );
    }
  }
