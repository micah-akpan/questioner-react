/**
 * @function addClasses
 * @param {Array<String>} arrayOfClasses
 * @returns {String} Returns a string of class names
 * delimited by a single whitespace
 */
const addClasses = arrayOfClasses => arrayOfClasses.join(' ');


const cards1 = [
  {
    id: 1,
    cardText: 'Search for a meetup by name, location or hash',
    cardIcon: 'src/resources/icons/loupe.svg'
  },
  {
    id: 2,
    cardText: 'Select a meetup and schedule to attend a meetup',
    cardIcon: 'src/resources/icons/click.svg'
  },
  {
    id: 3,
    cardText: 'View Top Questions and Comments on those questions for a particular meetup',
    cardIcon: 'src/resources/icons/view.svg'
  }
];

const cards2 = [
  {
    id: 4,
    cardText: 'Choose a meetup you plan to attend',
    cardIcon: 'src/resources/icons/click.svg'
  },
  {
    id: 5,
    cardText: 'Do you have a <strong>question</strong> about the meetup?Ask Give your $0.02 to questions asked by meetup attendees like you. Vote on questions',
    cardIcon: 'src/resources/icons/question-black.svg'
  },
  {
    id: 6,
    cardText: 'Meetup Organizers will use the number of votes, and comments on a question to prioritise questions in a meetup',
    cardIcon: 'src/resources/icons/plan.svg'
  }
];

export default {
  addClasses,
  cards1,
  cards2
};
