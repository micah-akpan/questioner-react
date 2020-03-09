export interface Meetup {
    id: number;
    topic: string;
    location: string;
    happeningOn: Date;
    createdOn: Date;
    agenda?: string;
    images?: string[];
    tags?: string[];
    maxNumberOfAttendees?: number;
}
