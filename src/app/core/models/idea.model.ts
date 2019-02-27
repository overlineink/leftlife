export interface Idea {
    // attributes of the idea
    ideaTitle?: string;
    ideaSubtitle?: string;
    ideaImage?: string;
    ideaVideo?: string;
    ideaText?: string;
    ideaReason?: string;
    ideaHashtags?: string[];
    ideaDate?: string;
    ideaLocation?: string;

    ideaLikesTot?: string;
    ideaProposalsTot?: string;
    ideaSupportersTot?: string;

    ideaAuthor?: {
      authorID?: string,
      authorImage?: string;
      authorName?: string;
      authorLocal?: string;
      authorRegional?: string;
      authorFederal?: string;
      authorContinental?: string;
    };
    ideaEventsUp?: {
      eventLocal?: {
        eventTitle: string;
        eventDate?: {
          date?: string;
          time?: string;
        };
        eventLocation?: {
          postCode?: string;
          city?: string;
          street?: string;
          houseNumber?: string;
          additionalInformation?: string;
      };
      };
      eventDistrict?: {
        eventTitle: string;
        eventDate?: {
          date?: string;
          time?: string;
        };
        eventLocation?: {
          postCode?: string;
          city?: string;
          street?: string;
          houseNumber?: string;
          additionalInformation?: string;
      };
      };
      eventRegional?: {
        eventTitle: string;
        eventDate?: {
          date?: string;
          time?: string;
        };
        eventLocation?: {
          postCode?: string;
          city?: string;
          street?: string;
          houseNumber?: string;
          additionalInformation?: string;
      };
      }
      eventFederal?: {
        eventTitle: string;
        eventDate?: {
          date?: string;
          time?: string;
        };
        eventLocation?: {
          postCode?: string;
          city?: string;
          street?: string;
          houseNumber?: string;
          additionalInformation?: string;
      };
      }
    };

   // from Author

    // User operations
    // 1. Like the Idea
    // 2. Share the Idea
    // 3. Add Comments
    // 4. Add Proposals
    // 5. Groups can support an idea

    // regular search operations
    // 1. User searches for IdeaNames (SearchComponent)
    // 2. User searches for IdeaHashtags (SearchComponent)
    // 3. User searches for all ideas during a time span (SearchComponent)
    // 4. App asks for all ideas of a certain event (EventComponent)
    // 5. App asks for all ideas of a certain person (ProfileComponent)
    // 6. App asks for all ideas of a certain group (GroupComponent)
    // 7. App asks for ideas with most likes
    // 8. App asks for ideas with the most supportiveGroups

    // Additional ideaAttributes due to user operations
  /*  author: UserID;
    comments: CommentID[];
    proposals: ProposalID[];
    events: EventID[];
    likes: UserID[];
    supporterGroups: GroupID[]; */

    // the idea has an author
    // query idea collection to retrieve
 /*   userID?: string;
    userName?: string;
    userImage?: string; */

    // user can add comments
    // query comment collection to retrieve
/*    commentID?: string;
    commentText?: string;
    commentAuthorName?: string;
    commentAuthorID?: string;
    commentAuthorImage?: string; */

    // user can add proposals how to change the idea
    // query proposal collection to retrieve
/*    proposalID?: string;
    proposalText?: string;
    proposalAuthorName?: string;
    proposalAuthorID?: string;
    proposalAuthorImage?: string;*/

    // user discuss the idea at real life events
    // query event collection to retrieve
/*    eventID?: string;
    eventAuthorName?: string;
    eventAuthorID?: string;
    eventAuthorImage?: string;*/

    // user can like the idea
    // query user collection to retrieve
  /*  userID: string;
    userName: string;
    userImage: string;*/

    // groups can support the idea
    // query groups collection to retrieve
/*
    groupID?: string;
    groupName?: string;
    groupImage?: string;

    */


}

export interface IdeaID extends Idea { id: string; }

