import firebase from 'firebase/app'
import "firebase/storage"


export const getURLRessource = async (name) => {
    return firebase.storage().ref(name).getDownloadURL()
}