export interface ListItemState {
  [key: string]: {
    active: boolean
  }
}

export interface MeetupProps {
  meetup: any;
  getMeetupQuestions: any;
  questions: any;
}
