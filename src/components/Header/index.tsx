import React, { memo } from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <h1 className="header__h1">Крест vs. Ноль</h1>
    </header>
  );
}

export default memo(Header);
