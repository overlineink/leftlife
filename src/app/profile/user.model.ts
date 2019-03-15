export interface User {
    uid?: string;
    email?: string;
    photoURL?: string;
    profilePhoto?: string;
    displayName?: string;
    userRank?: string;

    local?: string;
    regional?: string;
    federal?: string;
    continental?: string;

    followers?: string;
    following?: string;
    ideas?: string;
    hashtags?: string[];

    notifications?: {
        notID?: string;
        notName?: string;
        notImage?: string;
        notDate?: string;
        notIssue?: string;
        // need to limit notifications or restructure database
    }[];

    chatsRecent?: {
        chatID?: string;
        chatName?: string;
        chatImage?: string;
        chatDate?: string;
        chatMessageLast?: string;
        chatMessageTot?: string;
        // need to limit notifications or restructure database
    }[];

    // position
}

export interface Person extends User {
    id?: string;
}
