export interface User {
    uid: string;
    email: string;
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

    // position
}

export interface Person extends User {
    id: string;
}
