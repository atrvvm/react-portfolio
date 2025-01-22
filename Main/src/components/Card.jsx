/** @format */

import Card from "react-bootstrap/Card";
import "../Card.css";

export default function ProjectCard({title = "Title", subtitle = "Subtitle", link = "#", bgUrl = "#"}) {
  return (
    <Card className="card" style={{backgroundImage: "url(" + bgUrl + ")"}}>
      <Card.Body>
        <Card.Title className="card-title">{title}</Card.Title>
        <Card.Subtitle className="card-subtitle">{subtitle}</Card.Subtitle>
        <Card.Link
          className="card-link"
          href={link}
        >
          🔗VIEW REPO
        </Card.Link>
      </Card.Body>
    </Card>
  );
}
