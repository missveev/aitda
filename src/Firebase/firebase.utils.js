import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDZ-jeCHozJN8OX0iGQn2dUX0eWnMjMdfI",
    authDomain: "aitda-a118b.firebaseapp.com",
    projectId: "aitda-a118b",
    storageBucket: "aitda-a118b.appspot.com",
    messagingSenderId: "766227531972",
    appId: "1:766227531972:web:610024a6a6c64f727ae191",
    measurementId: "G-31624BYZT6"
};
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return


    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get()
    // console.log(snapShot)


    if (!snapShot.exists) {
        const { displayName, email } = userAuth
        const createdAt = new Date()

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log("error creating user", error.message)
        }
    }
    return userRef
}

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase