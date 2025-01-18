/** @format */

import "../App.css";
import Navigation from "./Navigation";

function Header() {
  return (
    <header className="header">
      <h3>Name</h3>
      <div className="header-nav">
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
