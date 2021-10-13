import firebase from 'firebase/app'
import 'firebase/firestore'


export const addUserData = async (uid, name, email) => {
    return firebase.firestore().collection("users").doc(uid).set({
        name: name,
        email: email,
        favoritesKeycaps: []
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

export const addFavoriteKeycapsToUser = async (uid, keycaps) => {
    return firebase.firestore().collection("users").doc(uid).update({
        favoritesKeycaps: firebase.firestore.FieldValue.arrayUnion(keycaps)
    })
}

export const removeFavoriteKeycapsToUser = async (uid, keycaps) => {
    return firebase.firestore().collection("users").doc(uid).update({
        favoritesKeycaps: firebase.firestore.FieldValue.arrayRemove(keycaps)
    })
}

export const docRef = (collectionName, id) => {
    return firebase.firestore().collection(collectionName).doc(id)
}

export const storageRef = (storageLocation) => {
    return firebase.storage().ref(storageLocation)
}