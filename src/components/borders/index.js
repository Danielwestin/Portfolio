import React from "react";
import Header from "../header";

export const Borders = ({ children }) => {
  return (
    <>
      <div className="border border-right"></div>
      <div className="border border-bottom"></div>
      <div className="border border-left"></div>
      <div className="border border-top">
        <Header />
      </div>
      {children}
    </>
  );
};
