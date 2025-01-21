/** @format */

import { Link, useLocation } from "react-router";

export default function Footer() {
// Function to hide footer from Contact, Projects, and Resume pages
  const location = useLocation();
  const excludeFooter = ["/Contact", "/Projects", "/Resume"];
  if (excludeFooter.includes(location.pathname)) {
    return <></>;
  }
  return (
    <div className="social-btn-group">
      <Link to="https://github.com">
        <h3 className="link-button">GITHUB</h3>
      </Link>
      <Link to="https://linkedin.com">
        <h3 className="link-button">LINKEDIN</h3>
      </Link>
      <Link to="https://stackoverflow.com">
        <h3 className="link-button">STACKOVERFLOW</h3>
      </Link>
    </div>
  );
}
