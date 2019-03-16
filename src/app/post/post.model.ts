export interface Post {
    postAuthor?: {
        name?: string;
        uid?: string;
        profilePhoto?: string;
    };
    postLocation?: string;
    postImage?: string;
    postLikes?: string;
    postComments?: string;
    postType?: string;
    postHashtags?: string[];
    postText?: string;
    postDate?: string;
    postCommentsTot?: string;
}

export interface PostID extends Post {
    id?: string;
}
