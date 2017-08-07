import React, { Component } from 'react';
import css from './ActivityCard.css';


const ActivityCard = (props) => {
const { activity, location, description, season, leader, phone, age, favorited, getFavorited } = props

const favBtn = () => {
  return favorited === true ? 'like-btn' : 'unlike-btn'
}

const handleFavClick = () => {
  getFavorited(!favorited);
}

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
          <div className="like-btn-container">
            <button className={favBtn()} onClick={(e) => handleFavClick()}></button>
          </div>
        </div>
      </div>
    </div>
  )
}


export default ActivityCard;
