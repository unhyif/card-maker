import { useState } from "react";
import { AuthService } from "service/authentication";
import Login from "components/login/login";
import Header from "components/header/header";
import Main from "components/main/main";
import Footer from "components/footer/footer";
import "app.css";

const authService = new AuthService();

function App() {
  const [user, setUser] = useState(null);

  return user ? (
    <>
      <Header authService={authService} setUser={setUser} size="big" />
      <Main user={user} />
      <Footer />
    </>
  ) : (
    <Login authService={authService} setUser={setUser} />
  );
}

export default App;
