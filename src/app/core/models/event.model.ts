export interface EventModel {
    eventTitle?: string;
    eventParticipants?: string;
    eventHost?: string;
    eventLocation?: {
        postCode?: string;
        city?: string;
        street?: string;
        houseNumber?: string;
        additionalInformation?: string;
    };
    eventImage?: string;
    eventModerator?: string;
    eventDate?: {
        date?: string;
        time?: string;
    };
    eventHashtags?: string[];
    eventIdeas?: Object[];

    // subcollection topics of event
    eventTopicsTot?: string;
    eventTasksTot?: string;
    eventIdeasTot?: string;
    // subcollection tasks of event
    // subcollection ideas of event
}

export interface EventID extends EventModel {
    id: string;
}
