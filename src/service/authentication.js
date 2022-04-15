import { firebase } from "./firebase";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  signOut,
} from "firebase/auth";

export class AuthService {
  constructor() {
    this.auth = getAuth();
    this.auth.useDeviceLanguage();

    this.googleProvider = new GoogleAuthProvider();
    this.githubProvider = new GithubAuthProvider();
  }

  login = async (providerName) =>
    signInWithPopup(this.auth, this[`${providerName}Provider`])
      .then((result) => result.user.displayName)
      // This gives you a Google Access Token. You can use it to access the Google API.
      // const credential = GoogleAuthProvider.credentialFromResult(result);
      // const token = credential.accessToken;
      .catch((e) => {
        throw new Error(e.message);
        // const errorCode = e.code;
        // The email of the user's account used.
        // const email = e.email;
        // The AuthCredential type that was used.
        // const credential = GoogleAuthProvider.credentialFromError(e);
      });

  logout = async () => {
    return signOut(this.auth).catch((e) => {
      throw new Error(e.message);
    });
  };
}
