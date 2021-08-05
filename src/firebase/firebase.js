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

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);
	const snapShot = await userRef.get();

	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData,
			});
		} catch (err) {
			console.log("Error creating user: ", err.message);
		}
	}

	return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
