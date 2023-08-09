import React from "react";
import Navbar from "./Navbar";

function BaseLayout({ children }) {
  return (
    <div>
      <Navbar></Navbar>
      {children}
    </div>
  );
}

export default BaseLayout;
