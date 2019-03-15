import * as admin from 'firebase-admin';

import { postCommentCountCreate, postCommentCountDelete } from './comment-counter-post';

admin.initializeApp();

// Inititializing postCommentCounter
export const postCommentIncrease = postCommentCountCreate
export const postCommentDecrease = postCommentCountDelete