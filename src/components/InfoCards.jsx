import React from 'react';
import InfoCard from './InfoCard';

const InfoCards = ({ cards }) => (
  <div className="cards q-flex">
    {cards.map(card => (<InfoCard card={card} />))}
  </div>
);

export default InfoCards;
