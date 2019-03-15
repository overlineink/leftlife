import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

// Increases a following counter by one when a user follows someone
export const followingCountCreate = 
functions.firestore.document('users/{userID}/following/{followerID}').onCreate((snap, context) => {
    // console.log('Add called')
    // New document Created : get parent doc, update parent doc, add one to count,
    const userID = context.params.userID
    admin.firestore().doc(`users/${userID}`).get()
    .then(snapshot => {
        const data = snapshot.data()
        if (data) {
            // console.log('increased')
            return admin.firestore().doc(`users/${userID}`).update({following: data.following + 1});  
        } else {
            // console.log('data does not exist')
            return admin.firestore().doc(`users/${userID}`).update({})
        }
    })
    .catch(error => {
        console.log('error' + error)
    })
    return true
})


// Decreases a following counter by one when a user unfollows someone
export const followingCountDelete = 
functions.firestore.document('users/{userID}/following/{followerID}').onDelete((snap, context) => {
    // console.log(' Delete called')
    // New document Created : get parent doc, update parent doc, add one to count,
    const userID = context.params.userID
    admin.firestore().doc(`users/${userID}`).get()
    .then(snapshot => {
        const data = snapshot.data()
        if (data) {
            // console.log('reduced')
            return admin.firestore().doc(`users/${userID}`).update({following: data.following - 1});  
        } else {
            // console.log('data does not exist')
            return admin.firestore().doc(`users/${userID}`).update({})
        }
    })
    .catch(error => {
        console.log('error' + error)
    })
    return true
})
