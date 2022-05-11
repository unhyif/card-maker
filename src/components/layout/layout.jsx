import { memo } from "react";
import { Outlet } from "react-router-dom";
import Header from "components/header/header";
import Footer from "components/footer/footer";

const Layout = memo(({ authService }) => {
  const logout = () => authService.logout();

  return (
    <>
      <Header onLogout={logout} size="big" />
      <Outlet />
      <Footer />
    </>
  );
});

export default Layout;
