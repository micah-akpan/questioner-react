import React from 'react';
import Card from './shared/Card';

const InfoCard = ({ card }) => (
  <Card classList={['q-card', 'q-card__no-border', 'card__tips']}>
    <img src={card.cardIcon} alt="" />
    <p>{card.cardText}</p>
  </Card>
);

export default InfoCard;
