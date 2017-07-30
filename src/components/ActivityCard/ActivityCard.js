import React, { Component } from 'react';
import css from './ActivityCard.css';
// import ActivityMap from '../ActivityMap/ActivityMap'


const ActivityCard = (props) => {
const { activity, location, description, season, leader, phone, age } = props

  return (
    <div className="activity-card-container">
      <div className="activity-card">
        <div className="id">
          <h2 className="activity-title">{props.activity}</h2>
          <h2 className="activity-location">{props.location}</h2>
          <h3 className="activity-description">{props.description}</h3>
          <p className="activity-season">{props.season}</p>
          <p className="activity-leader">{props.leader}</p>
          <p className="activity-phone">{props.phone}</p>
          <p className="activity-age">{props.age}</p>
          <div className="map">
            {/* <ActivityMap/> */}
          </div>
        </div>
      </div>
    </div>
  )
}


export default ActivityCard;
