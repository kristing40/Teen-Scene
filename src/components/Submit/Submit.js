import React, { Component } from 'react';
import AddEvent from '../AddEvent/AddEvent';


export class ContactPage extends Component {
  submit = (values) => {
    console.log(values);
  }

  render () {
    return (
      <AddEvent onSubmit={this.submit}/>
    )
  }
}
