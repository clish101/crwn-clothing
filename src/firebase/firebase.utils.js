import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyDAnDCiKL7PQo7D7teql5oOo9MRwQ9lgVs",
    authDomain: "crwn-db-34ef1.firebaseapp.com",
    databaseURL: "https://crwn-db-34ef1.firebaseio.com",
    projectId: "crwn-db-34ef1",
    storageBucket: "crwn-db-34ef1.appspot.com",
    messagingSenderId: "1019065014919",
    appId: "1:1019065014919:web:3f57ee96830d04a3ae3622",
    measurementId: "G-KQ32Z7FG65"
};

firebase.initializeApp(config);

export const firestore = firebase.firestore()
export const auth = firebase.auth()

const Provider = new firebase.auth.GoogleAuthProvider()
Provider.setCustomParameters = ({ prompt: 'select_account' })
export const SignInWithGoogle = () => auth.signInWithPopup(Provider)

export default firebase;