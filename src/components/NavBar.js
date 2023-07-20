import React from "react";
import ChildComponent from "./ChildComponent";

const NavBar = () => {
  let greeting = "hello";
  return (
    <div>
      <ChildComponent greeting={greeting} />
    </div>
  );
};

export default NavBar;
