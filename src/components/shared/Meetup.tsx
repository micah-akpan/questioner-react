import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Card from './Card';
import CardTop from './CardTop';
import CardBottom from './CardBottom';
import mainMeetupImage from '../../resources/images/andela.jpeg';
import { parseDate } from '../../utils';
import Dropdown from './Dropdown';
import dropDownItems from '../../utils/dropdown';
import { getQuestions } from '../../actions/questions';

interface MeetupProps {
  meetup: any;
  getMeetupQuestions: any;
  questions: any;
}

const Meetup = ({ meetup, getMeetupQuestions, questions }: MeetupProps) => {
  useEffect(() => {
    getMeetupQuestions(meetup.id);
  }, []);

  const questionsCount = questions.filter(question => question.meetup === meetup.id).length;
  return (
    <Card classList={['q-card']}>
      <CardTop>
        <div>
          <div className="q-card__image-container">
            <Dropdown dropDownItems={dropDownItems} />
            <img
              src={mainMeetupImage}
              alt="A meetup"
              className="q-card__image meetup-main-image"
            />
            <span
              className="q-asked-count"
              title={`${questionsCount} ${questionsCount > 1 ? 'questions' : 'question'} have been asked in this meetup`}
            >
              {questionsCount}
            </span>
          </div>
        </div>
      </CardTop>
      <CardBottom>
        <div className="content q-card__sec">
          <p className="meetup-title">{meetup.title}</p>
          <p className="meetup-sched-date">{parseDate(meetup.happeningOn)}</p>
        </div>
      </CardBottom>
    </Card>
  );
};

const mapStateToProps = ({ questions }) => ({
  questions: questions.data
});

export default connect(mapStateToProps, { getMeetupQuestions: getQuestions })(Meetup);
