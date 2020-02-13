import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import { InfoCard } from '..';
import cardsMock from '../__mocks__/cards';

describe('InfoCard Component', () => {
  test('it renders <InfoCard />', () => {
    const infoCard = render(
      <Router>
        <InfoCard card={[cardsMock.cards[0]]} />
      </Router>
    );
    expect(infoCard).toBeTruthy();
  });
});
