import React, { Component } from 'react';
import css from './ActivityCard.css';
// import { results } from '../../dataSet/myData';


const ActivityCard = (props) => {
  let activities = props.results.map((item) => {
    // console.log(props);

  });
  return (
    <div className="activity-card-container">
      <div className="activity-card">
        <div className="id">
          <img />
          <h2 className="activity-title">Act</h2>
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
