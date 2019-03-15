import * as admin from 'firebase-admin';

import { postCommentCountCreate, postCommentCountDelete } from './post-comment-counter';
import { followerCountCreate, followerCountDelete } from './profile-follower-counter';
import { followingCountCreate, followingCountDelete } from './profile-following-counter';
admin.initializeApp();

// Inititializing postCommentCounter
export const postCommentIncrease = postCommentCountCreate
export const postCommentDecrease = postCommentCountDelete

// Inititializing profileFollowerCounter
export const profileFollowerIncrease = followerCountCreate
export const profileFollowerDecrease = followerCountDelete

// Inititializing profileFollowingCounter
export const profileFollowingIncrease = followingCountCreate
export const profileFollowingDecrease = followingCountDelete
