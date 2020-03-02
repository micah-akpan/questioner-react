import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
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


const getQuestionCountToolTip = (count: number): string => {
  if (count === 0) {
    return 'No questions have been asked yet'
  }
  return `${count} ${count > 1 ? 'questions' : 'question'} have been asked in this meetup`
}

const Meetup = ({ meetup, getMeetupQuestions, questions }: MeetupProps) => {
  useEffect(() => {
    getMeetupQuestions(meetup.id);
  }, []);

  const questionsCount: number = questions.filter(question => question.meetup === meetup.id).length;
  return (
    <Link to={`/meetups/${meetup.id}`} className="q-card">
      <Card>
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
                title={getQuestionCountToolTip(questionsCount)}
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
    </Link>
  );
};

const mapStateToProps = ({ questions }) => ({
  questions: questions.data
});

export default connect(mapStateToProps, { getMeetupQuestions: getQuestions })(Meetup);
