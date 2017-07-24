import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import AppCss from './App.css';
import ActivityCardListContainer from '../../containers/ActivityCardListContainer/ActivityCardListContainer';
import SearchContainer from '../../containers/SearchContainer/SearchContainer';
import { results } from '../../dataSet/myData';




export default class App extends Component {
  componentDidMount() {
    this.props.updatesActivities(results)
    // get the data
    // reducer -> function that updates props
  }

    render() {
      return (
        <main className="app">
          <Header title={this.props.title}/>
          <SearchContainer/>
          <ActivityCardListContainer list={this.props.list} />
        </main>
      );
    }
}
