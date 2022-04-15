import Header from "components/header/header";
import Main from "components/main/main";
import Footer from "components/footer/footer";

const Home = ({ authService, user, setUser }) => (
  <>
    <Header logout={authService.logout} setUser={setUser} size="big" />
    <Main user={user} />
    <Footer />
  </>
);

export default Home;
