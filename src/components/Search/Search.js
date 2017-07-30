import React, { Component } from 'react';
import css from './Search.css';
// import { results } from '../../dataSet/myData';
import ActivityCard from '../ActivityCard/ActivityCard';
import { Link, Router, Route, Switch } from 'react-router-dom';
import AddEvent from '../AddEvent/AddEvent'


  class Search extends Component {
    constructor(props) {
      super(props);

      // this.state = {
      //   selectNewActivity:'all',
      // }

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }

   componentDidMount() {
      // this.props.getApiData()
   }

   handleChange(e) {
     this.setState({selectNewActivity: e.target.value})
   }

   handleSubmit(e) {
     e.preventDefault();
     const { selectNewActivity } = this.state;

     this.props.getNewActivity( selectNewActivity )

     this.setState({selectNewActivity: ''})
   }

  render() {

    return (
      <div className="search">
        <div className="input-info">
          <label id="activity-selector" className="activity-label">Choose an Activity : </label>
          <select id="activity-selector" className="user-input-activity" value={this.props.searchParam}   onChange={(e) => this.handleChange(e)}>
            <option value="Acting">Acting</option>
            <option value="Meet and Greet">Meet and Greet</option>
            <option value="Art">Art</option>
            <option value="Book Club">Book Club</option>
            <option value="Church Groups">Church Groups</option>
            <option value="Gardening">Gardening</option>
            <option value="Computer Programming">Computer Programming</option>
            <option value="Outdoor Fun">Outdoor Fun</option>
            <option value="Exercise">Exercise</option>
            <option value="Cooking">Cooking</option>
            <option value="Volunteer">Volunteer</option>
          </select>
          <button className="submit-btn" onClick={(e) => this.handleSubmit(e)}>Submit</button>
        </div>
        <Link to='/addEvent' className="add-activity-link">Add an activity</Link>
      </div>
    )
  }
}
export default Search;
