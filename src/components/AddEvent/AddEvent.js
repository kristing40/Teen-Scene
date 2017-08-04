import React, { Component } from 'react';
import css from './AddEvent.css';
import AddEventTitle from '../AddEventTitle/AddEventTitle';
import { Link, Router, Route, Switch } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';

let AddEvent = props => {
  const { handleSubmit, pristine, onSubmit, reset, onChange, submitting } = props;

  return (
    <div className="add-new-activity-form">
      <AddEventTitle/>
        <form onSubmit={ handleSubmit }>
          <label>Add a new activity</label>
          <div>
            <Field name="activity" className="add-activity-field" placeholder="Enter name of activity" component="input" type="text"/>
          </div>

          <div>
            <Field name="location" className="add-activity-field" placeholder="Enter the location" component="input" type="text"/>
          </div>

          <div>
            <Field name="description" className="add-activity-field txt-area" placeholder="Enter a description" component="textarea" type="text"/>
          </div>

          <div>
            <Field name="phone" className="add-activity-field" placeholder="Enter a phone number" component="input" type="phone"/>
          </div>

          <div>
            <Field name="email" className="add-activity-field" placeholder="Enter an email" component="input" type="email"/>
          </div>

          <div>
            <Field name="leader" className="add-activity-field" placeholder="Enter contact name" component="input" type="text"/>
          </div>

          <div className="add-event-btns">
            <button type="submit" className="add-event-btn" disabled={pristine || submitting } onSubmit={onSubmit}>Submit</button>
            <button type="submit" className="home-btn" disabled={pristine || submitting} onClick={reset}>Clear Form</button>
          </div>
        </form>
    </div>
  )


 }

 AddEvent = reduxForm({form: 'addEvent'})(AddEvent)

export default AddEvent;
