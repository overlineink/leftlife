export interface Group {
    groupTitle?: string;
    groupImage?: string;
    groupHashtags?: string[];
    groupLevel?: string;

    groupLocation?: {
        postCode?: string;
        city?: string;
        street?: string;
        houseNumber?: string;
        additionalInformation?: string;
    };
    groupContact?: {
        email?: string;
        phone?: string;
    };

    groupLeader?: {
        groupLeaderID?: string;
        groupLeaderName?: string;
        groupLeaderImage?: string;
    };

    groupMembersTot?: string;
    groupFollowersTot?: string;

    groupIdeasTot?: string;
    groupEventsTot?: string;

    groupExecutiveBoard?: {
        boardMemberID?: string;
        boardMemberName?: string;
        boardMemberImage?: string;
    }[];

    groupSubgroups?: {
        boardMemberName?: string;
        boardMemberImage?: string;
    }[];

    // subcollections GroupMembers
    // subcollections GroupIdeas
    // subcollections GroupFollowers
    // subcollection GroupEvents

    // subcollections GroupBoard
}

export interface GroupID extends Group {
    id?: string;
}
