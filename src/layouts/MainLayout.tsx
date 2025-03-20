import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";

export const MainLayout = () => {
  return (
    <>
      <Header />
      <hr className="line" />
      <div className="wrapper">
        <Outlet />
      </div>
    </>
  );
};
