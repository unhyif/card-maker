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
    signInWithPopup(this.auth, this[`${providerName}Provider`]).then(
      (result) => result.user.uid
    );
  // This gives you a Google Access Token. You can use it to access the Google API.
  // const credential = GoogleAuthProvider.credentialFromResult(result);
  // const token = credential.accessToken;

  logout = async () => signOut(this.auth);
}
