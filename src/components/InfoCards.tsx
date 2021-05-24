import React from 'react';

const InfoCards = ({ cards }) => (
  <div className="cards q-flex">
    {cards.map(card => (
      <div key={card.id} className="q-card q-card__no-border card__tips">
        <img src={card.cardIcon} alt="" />
        <p className="text-info-card">{card.cardText}</p>
      </div>
    ))}
  </div>
);

export default InfoCards;
