import React, {Component} from 'react';
import css from './ActivityCardList.css';
import ActivityCard from '../ActivityCard/ActivityCard';
import { results } from '../../dataSet/myData';

export default class ActivityCardList extends Component{
constructor (props) {
  super(props)
  console.log(props);
}

  cards() {
      if (this.props.selectNewActivityReducer.searchParam !== "all") {
        return(
          <div>
            {results.map((item) => {
              if(this.props.selectNewActivityReducer.searchParam === item.type) {
                return <ActivityCard
                  key={item.id}
                  cardId={item.id}
                  type={item.type}
                  age={item.age}
                  activity={item.activity}
                  season={item.season}
                  description={item.description}
                  leader={item.leader}
                  phone={item.phone}
                  location={item.location}/>
              }
            })
            }
          </div>
        )
      }
      else {
        return(
          <div>
            {results.map((item) => {
              return <ActivityCard
                key={item.id}
                cardId={item.id}
                type={item.type}
                age={item.age}
                activity={item.activity}
                season={item.season}
                description={item.description}
                leader={item.leader}
                phone={item.phone}
               location={item.location}/>
              })
            }
          </div>
        )
    }
  }


render() {
  return (
    <div>
      {this.cards()}
    </div>
  )
}

}
