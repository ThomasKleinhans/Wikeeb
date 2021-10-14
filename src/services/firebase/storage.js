import firebase from 'firebase/app'
import "firebase/storage"


export const getURLRessource = async (name) => {
    return firebase.storage().ref(name).getDownloadURL()
}

export const putImageToStorage = async (path, blob) => {
    return firebase.storage().ref().child(path).put(blob)
}