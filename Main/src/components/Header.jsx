/** @format */

import "../styles/App.css";
import Navigation from "./Navigation";

function Header() {
  return (
    <header className="header">
      <div className="header-nav">
        <h3>At.</h3>
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
