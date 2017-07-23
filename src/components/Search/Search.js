import React, { Component } from 'react';
import css from './Search.css';
import { results } from '../../dataSet/myData';
import ActivityCard from '../ActivityCard/ActivityCard'
// import ActivityCardListContainer from '../../containers/ActivityCardListContainer/ActivityCardListContainer'


  class Search extends Component {
    constructor(props) {
      super(props);
        this.state = {
          searchParam: '',
        }

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }

   componentDidMount() {
     let rawDataArray = results.map((item) => {
     });
   }

   handleChange(e) {
     this.setState({searchParam: e.target.value})
   }

   handleSubmit(e) {
     e.preventDefault();
     const { searchParam } = this.state;
     debugger
     this.props.selectNewActivity(searchParam)
     this.setState({searchParam: ''})
   }

  render() {

    return (
      <div className="search">
        <div className="input-info">
          {/* <input id="userLocation" className="user-input-location" value={this.state.userLocation} type="Search" placeholder="Enter a city" onChange={(e) => this.handleChange(e, 'userLocation')}/> */}

          <label id="activity-selector" className="activity-label">Choose an Activity : </label>
          <select id="activity-selector" className="user-input-activity" value={this.props.searchParam} onChange={(e) => this.handleChange(e)}>
            <option value="Acting">Acting</option>
            <option value="Meet and Greet">Meet and Greet</option>
            <option value="Art">Art</option>
            <option value="Book Club">Book Club</option>
            <option value="Church Groups">Church Groups</option>
            <option value="Gardening">Gardening</option>
            <option value="Computer Programming">Computer Programming</option>
            <option value="Outdoor Fun">Outdoor Fun</option>
            <option value="Exercises">Exercise</option>
            <option value="Cooking">Cooking</option>
            <option value="Volunteer">Volunteer</option>
            <option value="Acting">Acting</option>
          </select>

          <button className="submit-btn" onClick={(e) => this.handleSubmit(e)}>Submit</button>
        </div>
        {/* <ActivityCard results={results} props={this.state.props}/> */}
      </div>
    )
  }
}
export default Search;
