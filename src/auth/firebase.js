// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
	getAuth,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	sendPasswordResetEmail,
	signOut,
} from 'firebase/auth';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB71fhvOMhbFRyvLPsZh7gNdVn9MnnQGr8",
  authDomain: "zerone3-dts-final-project.firebaseapp.com",
  projectId: "zerone3-dts-final-project",
  storageBucket: "zerone3-dts-final-project.appspot.com",
  messagingSenderId: "772617774210",
  appId: "1:772617774210:web:faa23546eff456eb96809b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const registerUserWithEmailAndPass = async (email, password) => {
	try {
		const getUser = await createUserWithEmailAndPassword(auth, email, password);
		console.log(getUser);
	} catch (err) {
		console.log(err.code);
		console.log(err.message);
	}
};

const signInUserWithEmailAndPass = async (email, password) => {
	try {
		const getUser = await signInWithEmailAndPassword(email, password);
		console.log(getUser);
	} catch (err) {
		console.log(err);
	}
};

const resetPassword = async (email) => {
	try {
		await sendPasswordResetEmail(auth, email);
		console.log('email sudah dikirimkan');
	} catch (err) {
		console.log(err);
	}
};

const signOutUser = async () => {
	try {
		await signOut(auth);
	} catch (err) {
		console.log(err);
	}
};

export {
	auth,
	registerUserWithEmailAndPass,
	signInUserWithEmailAndPass,
	resetPassword,
	signOutUser,
};