import React, { Component } from 'react';
import Header from '../Header/Header';
import AppCss from './App.css';
import ActivityCardListContainer from '../../containers/ActivityCardListContainer/ActivityCardListContainer';
import { Link, Router, Route, Switch } from 'react-router-dom';
import AddEvent from '../AddEvent/AddEvent'


export default class App extends Component {
  constructor(props) {
    super(props)
  }

    render() {
      return (
        <main className="app">
            <Route exact path='/' component={Header}/>
            <Route exact path='/' component={ActivityCardListContainer}/>
            <Route exact path='/addEvent' render={() => {
             return <AddEvent  type='AddEvent'/>
           }}/>
        </main>
      );
    }
}
