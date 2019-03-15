export interface Post {
    postAuthor?: string;
    postLocation?: string;
    postImage?: string;
    postLikes?: string;
    postComments?: string;
    postType?: string;
    postHashtags?: Object[];
    postText?: string;
    postDate?: string;
    postCommentsTot?: string;
}

export interface PostID extends Post {
    id?: string;
}
