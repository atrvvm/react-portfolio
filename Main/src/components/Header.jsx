import NavItem from "./Navigation";

export default function Header() {
  return (
    <header className="header">
      <div className="header-layout">
        <h3 className="header-name">アンナ</h3>
      </div>
      <div className="nav-component">
        <NavItem />
      </div>
    </header>
  );
}
