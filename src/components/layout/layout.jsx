import { memo } from "react";
import { Outlet } from "react-router-dom";
import Header from "components/header/header";
import Footer from "components/footer/footer";

const Layout = memo(({ authService }) => {
  const logout = async () => {
    try {
      const result = await authService.logout();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <Header onLogout={logout} size="big" />
      <Outlet />
      <Footer />
    </>
  );
});

export default Layout;
