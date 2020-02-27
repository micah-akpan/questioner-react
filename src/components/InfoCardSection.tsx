import React from 'react';
import InfoCards from './InfoCards';
import appUtil from '../utils';

const InfoCardSection = ({ headingText, cards, classList }) => (
  <section className={appUtil.addClasses(classList)}>
    <div className="container">
      <h3 className="heading-sec__primary">{headingText}</h3>
      <InfoCards cards={cards} />
    </div>
  </section>
);

export default InfoCardSection;
