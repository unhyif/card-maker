import { firebase } from "./firebase";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  signOut,
} from "firebase/auth";

const auth = getAuth();
auth.useDeviceLanguage();

const getProvider = (providerName) => {
  switch (providerName) {
    case "google":
      return new GoogleAuthProvider();
    case "github":
      return new GithubAuthProvider();
    default:
      throw new Error("We can't find corresponding provider");
  }
};

export class AuthService {
  async login(providerName) {
    return signInWithPopup(auth, getProvider(providerName))
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        return user.displayName;
      })
      .catch((e) => {
        // const errorCode = e.code;
        const errorMessage = e.message;
        // The email of the user's account used.
        // const email = e.email;
        // The AuthCredential type that was used.
        // const credential = GoogleAuthProvider.credentialFromError(e);
        throw new Error(errorMessage);
      });
  }

  async logout() {
    return signOut(auth).catch((e) => {
      throw new Error(e.message);
    });
  }
}
