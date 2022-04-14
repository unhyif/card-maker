import { useState } from "react";
import { loginGoogle, loginGithub, logout } from "service/firebase";
import Login from "components/login/login";
import Header from "components/header/header";
import Main from "components/main/main";
import Footer from "components/footer/footer";
import "app.css";

function App() {
  const [user, setUser] = useState(null);

  return user ? (
    <>
      <Header logout={logout} setUser={setUser} size="big" />
      <Main user={user} />
      <Footer />
    </>
  ) : (
    <Login google={loginGoogle} github={loginGithub} setUser={setUser} />
  );
}

export default App;
