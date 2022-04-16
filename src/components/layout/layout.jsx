import { memo } from "react";
import { Outlet } from "react-router-dom";
import Header from "components/header/header";
import Footer from "components/footer/footer";
// import styles from "./layout.module.css";

const Layout = memo(({ authService }) => {
  const onLogout = async () => {
    try {
      const result = await authService.logout();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <Header logout={onLogout} size="big" />
      <Outlet />
      <Footer />
    </>
  );
});

export default Layout;
