import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const auth = getAuth();
auth.useDeviceLanguage();

export const loginGoogle = async () =>
  signInWithPopup(auth, googleProvider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      return user.displayName;
    })
    .catch((e) => {
      const errorCode = e.code;
      const errorMessage = e.message;
      // The email of the user's account used.
      const email = e.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(e);
      return errorMessage;
    });

export const loginGithub = async () =>
  signInWithPopup(auth, githubProvider)
    .then((result) => {
      // This gives you a GitHub Access Token. You can use it to access the GitHub API.
      const credential = GithubAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      return user.displayName;
      // ...
    })
    .catch((e) => {
      const errorCode = e.code;
      const errorMessage = e.message;
      // The email of the user's account used.
      const email = e.email;
      // The AuthCredential type that was used.
      const credential = GithubAuthProvider.credentialFromError(e);
      return errorMessage;
    });

export const logout = async () => {
  signOut(auth).catch((e) => {
    return e.message;
  });
};
