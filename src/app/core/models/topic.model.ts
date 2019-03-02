export interface Topic {
    topicTitle?: string;
    topicTimeStart?: string;
    topicTimeEnd?: string;
    topicModerator?: string;
    topicContent?: string;
    topicImage?: string;
    topicProtocol?: string;
}

export interface TopicID extends Topic {
    id: string;
}
