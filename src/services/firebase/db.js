import firebase from 'firebase/app'
import 'firebase/firestore'


export const addUserData = async (name, email) => {
    return firebase.firestore().collection("users").add({
        name: name,
        email: email
    })
}

export const getCollection = async (collectionName) => {
    return firebase.firestore().collection(collectionName).get()
}

export const getBeginningOfCollection = async (collectionName, limit = 15) => {
    return firebase.firestore()
        .collection(collectionName)
        .orderBy(firebase.firestore.FieldPath.documentId())
        .limit(limit).get()
}

export const getNextItemsOfCollection = async (collectionName, lastVisible, limit = 5) => {
    if(lastVisible){
        return firebase.firestore()
        .collection(collectionName)
        .orderBy(firebase.firestore.FieldPath.documentId())
        .startAfter(lastVisible).limit(limit).get()
    }
}