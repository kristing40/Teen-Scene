import React, { Component } from 'react';
import css from './ActivityCardList.css';
import ActivityCard from '../ActivityCard/ActivityCard';
import { results } from '../../dataSet/myData';


class ActivityCardList extends Component {
 componentDidMount() {
   console.log('***********************', this.props)
 }

 render() {
  // results = [{}, {}...]
  // const { searchParameter } = this.props // => 'activity'
  //
  // results.filter((activity) => {
  //   if(activity.type !== searchParameter) {
  //
  //   }
  // })

   let cards = results.map((item) => {
     return <ActivityCard
              key={item.id}
              cardId={item.id}
              type={item.type}
              age={item.age}
              acivity={item.activity}
              season={item.season}
              description={item.description}
              leader={item.leader}
              phone={item.phone}/>
   });

   return (
    <div>
      <h1>Hello</h1>
      {cards}
     </div>
   )
 }

}

export default ActivityCardList;
