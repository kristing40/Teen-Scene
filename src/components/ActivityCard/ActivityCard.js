import React, { Component } from 'react';
import css from './ActivityCard.css'


const ActivityCard = (props) => {
  console.log(props);
  // let activities = this.props.map((item) => {
  //   console.log(item);
  // });
  return (
    <div className="activity-card-container">
      <div className="activity-card">
        <div className="id">
          <h2 className="activity-title">Activity</h2>
          <h2 className="activity-location">Location</h2>
          <h3 className="activity-description">Desciption</h3>
          <p className="activity-season">season</p>
          <p className="activity-leader">leader</p>
          <p className="activity-phone">phone</p>
          <p className="activity-age">page</p>
        </div>
      </div>
    </div>
  )

}


export default ActivityCard;
