import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
	apiKey: "AIzaSyB2VXiXNrbeYJW2WKSJO70SeKgVQ-c1fQw",
	authDomain: "crwn-db-a11c0.firebaseapp.com",
	projectId: "crwn-db-a11c0",
	storageBucket: "crwn-db-a11c0.appspot.com",
	messagingSenderId: "37871074268",
	appId: "1:37871074268:web:54eccabe45bb289c21ad19",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;