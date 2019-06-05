/**
 * @function addClasses
 * @param {Array<String>} arrayOfClasses
 * @returns {String} Returns a string of class names
 * delimited by a single whitespace
 */
const addClasses = arrayOfClasses => arrayOfClasses.join(' ');

/**
 * @const numMonthToStr
 * @description A hash of month ordinal numbers to their short forms
 */
const numMonthToShortForm = {
  1: 'Jan',
  2: 'Feb',
  3: 'Mar',
  4: 'Apr',
  5: 'May',
  6: 'Jun',
  7: 'Jul',
  8: 'Aug',
  9: 'Sept',
  10: 'Oct',
  11: 'Nov',
  12: 'Dec'
};

/**
 * @function getMonthShortForm
 * @param {Number} month
 * @returns {String} A string version of date e.g 1 -> Jan
 */
const getMonthShortForm = month => numMonthToShortForm[month + 1];

/**
 * @function parseDate
 * @param {String} dateStr
 * @returns {String} Returns a string (short form of the month and day)
 */
export const parseDate = dateStr => {
  const currentDate = new Date(dateStr);
  const month = currentDate.getMonth();
  const monthShortForm = getMonthShortForm(month);
  const day = currentDate.getDate();

  return `${monthShortForm} ${day}`;
};

export const genHash = () => Math.random().toString(36).substr(2, 7);


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
    cardIcon: 'src/resources/icons/view-black.svg'
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
    cardText: 'Do you have a question about the meetup? Ask. Give your $0.02 to questions asked by meetup attendees like you. Vote on questions',
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
  cards2,
  parseDate
};
