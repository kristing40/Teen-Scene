import React, { Component } from 'react';
import css from './AddEvent.css';
import AddEventTitle from '../AddEventTitle/AddEventTitle';
import { Link, Router, Route, Switch } from 'react-router-dom';


class AddEvent extends Component  {
  constructor(props) {
    super(props)
    console.log(props);
    this.handleAddEventChange = this.handleAddEventChange.bind(this)
    this.handleAddEventSubmit = this.handleAddEventSubmit.bind(this)
  }


 handleAddEventChange(e, userInputField) {
   this.props
  //  this.setState({addNewEvent: e.target.value})
 }

 handleAddEventSubmit(e) {
   e.preventDefault();
  //  console.log(e);
   const { addNewEvent } =  this.state

   this.props.getAddedEvent(addNewEvent)

   this.setState({addNewEvent: ''})

 }

  render () {

  return (
    <div className="add-new-activity-form">
      <AddEventTitle/>
        <form>
          <label>Add a new activity</label>
          <input id="userInputField" className="add-activity-field" value={this.props.addAnEvent} type="text" placeholder="Enter an activity" onChange={(e) => this.handleAddEventChange(e, 'userInputField')}/>

          <input id="userInputField" className="add-activity-field" value={this.props.addNewLocation} type="text" placeholder="Enter the location" onChange={(e) => this.handleAddEventChange(e, 'userInputField')}/>

          <input id="userInputField" className="add-activity-field" value={this.props.addNewLeader} type="text" placeholder="Enter leader's name" onChange={(e) => this.handleAddEventChange(e, 'userInputField')}/>

          <input id="userInputField" className="add-activity-field" value={this.props.addNewDescription} type="text" placeholder="Enter a description" onChange={(e) => this.handleAddEventChange(e, 'userInputField')}/>

          <input id="userInputField" className="add-activity-field" value={this.props.addNewPhone} type="text" placeholder="Enter a phone number" onChange={(e) => this.handleAddEventChange(e, 'userInputField')}/>

          <input id="userInputField" className="add-activity-field" value={this.props.addNewEmail} type="text" placeholder="Enter an Email Address" onChange={(e) => this.handleAddEventChange(e, 'userInputField')}/>

          <div className="add-event-btns">

            <input type="submit" value="Submit" className="add-event-btn" onClick={(e) => this.handleAddEventSubmit(e)}/>

            <input value="Cancel" className="home-btn"/>

          </div>
        </form>
    </div>
  )
 }
}
export default AddEvent;
