import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

// Increases a follower counter by one when a new follower follows a user
export const followerCountCreate = 
functions.firestore.document('users/{userID}/followers/{followerID}').onCreate((snap, context) => {
    // console.log('Add called')
    // New document Created : get parent doc, update parent doc, add one to count,
    const userID = context.params.userID
    admin.firestore().doc(`users/${userID}`).get()
    .then(snapshot => {
        const data = snapshot.data()
        if (data) {
            // console.log('increased')
            return admin.firestore().doc(`users/${userID}`).update({followers: data.followers + 1});  
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


// Decreases a follower counter by one when a new follower unfollows a user
export const followerCountDelete = 
functions.firestore.document('users/{userID}/followers/{followerID}').onDelete((snap, context) => {
    // console.log(' Delete called')
    // New document Created : get parent doc, update parent doc, add one to count,
    const userID = context.params.userID
    admin.firestore().doc(`users/${userID}`).get()
    .then(snapshot => {
        const data = snapshot.data()
        if (data) {
            // console.log('reduced')
            return admin.firestore().doc(`users/${userID}`).update({followers: data.followers - 1});  
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
