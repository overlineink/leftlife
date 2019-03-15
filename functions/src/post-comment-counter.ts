import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

// Increases a comment counter by one when a new comment gets added to a post
export const postCommentCountCreate = 
functions.firestore.document('posts/{postID}/comments/{commentID}').onCreate((snap, context) => {
    // console.log('Add called')
    // New document Created : get parent doc, update parent doc, add one to count,
    const postID = context.params.postID
    admin.firestore().doc(`posts/${postID}`).get()
    .then(snapshot => {
        const data = snapshot.data()
        if (data) {
            // console.log('increased')
            return admin.firestore().doc(`posts/${postID}`).update({postCommentsTot: data.postCommentsTot + 1});  
        } else {
            // console.log('data does not exist')
            return admin.firestore().doc(`posts/${postID}`).update({})
        }
    })
    .catch(error => {
        console.log('error' + error)
    })
    return true
})


// Decreases a comment counter by one when a new comment gets added to a post
export const postCommentCountDelete = 
functions.firestore.document('posts/{postID}/comments/{commentID}').onDelete((snap, context) => {
    // console.log(' Delete called')
    // New document Created : get parent doc, update parent doc, add one to count,
    const postID = context.params.postID
    admin.firestore().doc(`posts/${postID}`).get()
    .then(snapshot => {
        const data = snapshot.data()
        if (data) {
            // console.log('reduced')
            return admin.firestore().doc(`posts/${postID}`).update({postCommentsTot: data.postCommentsTot - 1});  
        } else {
            // console.log('data does not exist')
            return admin.firestore().doc(`posts/${postID}`).update({})
        }
    })
    .catch(error => {
        console.log('error' + error)
    })
    return true
})
