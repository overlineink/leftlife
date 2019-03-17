export interface Group {
    groupTitle?: string;
    groupImage?: string;
    groupHashtags?: string[];
    groupLevel?: string;
    groupCreated?: Date;

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

    groupMembersTot?: number;
    groupFollowersTot?: number;

    groupIdeasTot?: number;
    groupEventsTot?: number;

    groupExecutiveBoard?: {
        boardMemberID?: string;
        boardMemberName?: string;
        boardMemberImage?: string;
    }[];

    groupSubgroups?: {
        subgroupsName?: string;
        subgroupsImage?: string;
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
