import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";

export const MainLayout = () => {
  return (
    <>
      <div className="wrapper">
        <Header />
      </div>
      <hr className="line" />
      <div className="wrapper">
        <Outlet />
      </div>
    </>
  );
};
