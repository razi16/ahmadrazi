import React, { useContext } from "react";
import { toggleContext } from "../layout/Main";

function NavButton() {
  const toggle = useContext(toggleContext);

  const handleClick = () => {
    if (toggle.toggleState === "closed") {
      toggle.toggleDispatch("open");
    } else {
      toggle.toggleDispatch("closed");
    }
  };

  return (
    <button onClick={handleClick} id="menu" className="header__menu">
      ☰
    </button>
  );
}

export default NavButton;
