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

export const pushItemToCollection = async (collectionName, item) =>{
    return firebase.firestore().collection(collectionName).add(item)
}

export const pushKeycapToWIP = async (keycap) => {
    return firebase.firestore().collection("WIP-Keycaps").add(keycap)
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

export const getFilteredItemsOfCollection = async (collectionName, filters) => {
    let query = firebase.firestore().collection(collectionName)
    for (const property in filters) {
        if(filters[property]?.length > 0){
            console.log(filters[property]);
            query = query.where(property, '==', filters[property])
        }
    }

    return query.get()
}

export const addFavoriteKeycapsToUser = async (uid, keycaps) => {
    return firebase.firestore().collection("users").doc(uid).update({
        favoritesKeycaps: firebase.firestore.FieldValue.arrayUnion(keycaps)
    })
}

export const getListFromCollection = async (collectionName, listOfIds) => {
    const result = []

    for(const item of listOfIds){
        firebase.firestore().collection(collectionName).doc(item).get()
        .then((doc) => {
            let response = doc.data()
            response.id = doc.id
            result.push(response)
        })
    }
    
    return result
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