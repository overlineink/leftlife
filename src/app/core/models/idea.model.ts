export interface Idea {
    // attributes of the idea
    ideaID: string;
    location: string;
    image: string;
    video: string;
    text: string;
    hashtags?: Object[];
    date?: string;

    // User operations
    // 1. Like the Idea
    // 2. Share the Idea
    // 3. Add Comments
    // 4. Add Proposals
    // 5. Groups can support an idea

    // attributes of connected objects
    /*
    author: UserID[];
    comments: CommentID[];
    proposals: ProposalID[];
    events: EventID[];
    likes: UserID[];
    supporterGroups: GroupID[];
*/
    // the idea has an author
    userID: string;
    userName: string;
    userImage: string;

    // user can add comments
    commentID: string;
    commentAuthorName: string; // userName
    commentAuthorID: string; // userID
    commentAuthorImage: string; // userImage

    // user can add proposals how to change the idea
    proposalID: string;
    proposalAuthorName: string; // userName
    proposalAuthorID: string; // userID
    proposalAuthorImage: string; // userImage

    // user discuss the idea at real life events
    eventID: string;
    eventAuthorName: string; // userName
    eventAuthorID: string; // userID
    eventAuthorImage: string; // userImage

    // regular search operations
    // 1. User searches for IdeaNames (SearchComponent)
    // 2. User searches for IdeaHashtags (SearchComponent)
    // 3. User searches for all ideas during a time span (SearchComponent)
    // 4. App asks for all ideas of a certain event (EventComponent)
    // 5. App asks for all ideas of a certain person (ProfileComponent)
    // 6. App asks for all ideas of a certain group (GroupComponent)
    // 7. App asks for ideas with most likes
    // 8. App asks for ideas with the most supportiveGroups

}

