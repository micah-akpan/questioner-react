import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getQuestions } from '../../actions/questions';
import { MeetupProps } from '../../shared/models';
import { parseDate } from '../../utils';
import dropDownItems from '../../utils/dropdown';
import Card from './Card';
import CardBottom from './CardBottom';
import CardTop from './CardTop';
import Dropdown from './Dropdown';


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
                src="https://questioner-storage.s3.us-east-2.amazonaws.com/images/home/andela.jpeg"
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
            <p className="meetup-title">{meetup.topic}</p>
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
