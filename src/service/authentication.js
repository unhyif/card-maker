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
    signInWithPopup(this.auth, this[`${providerName}Provider`]); // TODO: switch 함수로 provider 얻기

  logout = async () => signOut(this.auth).catch((e) => console.error(e));

  observeUserChange = (onUserChange) =>
    onAuthStateChanged(this.auth, (user) => onUserChange(user));
}
