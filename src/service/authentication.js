import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

export class AuthService {
  constructor() {
    this.auth = getAuth();
    this.auth.useDeviceLanguage();

    this.googleProvider = new GoogleAuthProvider();
    this.githubProvider = new GithubAuthProvider();
  }

  login = async (providerName) =>
    signInWithPopup(this.auth, this[`${providerName}Provider`]);

  logout = async () => signOut(this.auth).catch((e) => console.error(e));

  onAuthChange = (navigationCallback) =>
    onAuthStateChanged(this.auth, (user) => navigationCallback(user));
}
