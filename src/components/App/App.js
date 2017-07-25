import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import AppCss from './App.css';
import ActivityCardListContainer from '../../containers/ActivityCardListContainer/ActivityCardListContainer';
import { results } from '../../dataSet/myData';
// import { fetchUpdatedActivities } from '../../actions/actions'



export default class App extends Component {
  constructor(props) {
    super(props)
    console.log(props);
  }

  componentDidMount() {
    this.props.getUpdatedActivities(results)
    console.log(results);
    // get the data
    // reducer -> function that updates props
  }

    render() {
      return (
        <main className="app">
          <Header title={this.props.title}/>
          <ActivityCardListContainer list={this.props.list} />
        </main>
      );
    }
}
