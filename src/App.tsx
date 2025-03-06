import React from "react";
import { Header } from "./components/Header/Header";

export const App: React.FC = () => {
  return (
    <>
      <div className="wrapper">
        <Header />
      </div>
      <hr className="line" />
    </>
  );
};
