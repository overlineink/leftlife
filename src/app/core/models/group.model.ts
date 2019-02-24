export interface Group {
    groupTitle: string;
    groupLocation?: {
        postCode?: string;
        city?: string;
        street?: string;
        houseNumber?: string;
        additionalInformation?: string;
    };
    groupContact: {
        email: string;
        phone: string;
    };
    groupImage: string;
    groupHashtags: string[];
    groupLevel: string;
    groupLeader: string;

    groupMembersTot: string;
    groupFollowersTot: string;

    groupIdeasTot: string;
    groupEventsTot: string;

    // subcollections GroupMembers
    // subcollections GroupIdeas
    // subcollections GroupFollowers
    // subcollection GroupEvents

    // subcollections GroupBoard
}

export interface GroupID extends Group {
    id: string;
}
