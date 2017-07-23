import React from 'react';
import css from './ActivityCardList.css'
import ActivityCard from '../ActivityCard/ActivityCard'
import { results } from '../../dataSet/myData';


const ActivityCardList = (props) =>  {
   let cards = results.map((card) => {
     return <ActivityCard key={card.id}
                          id={card.id}
                          title={card.title}
                          description={card.description}
                        />

   });

   return (
    {cards}
  )
}
export default ActivityCardList;
