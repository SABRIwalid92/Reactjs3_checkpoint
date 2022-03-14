import React from "react";
import { Card } from "react-bootstrap";
export default function Address() {
  return (
    <Card
      style={{ width: "18rem", fontFamily: "Courier New, Courier, monospace" }}
    >
      <Card.Body>
        <Card.Title>Rue du 2 Mars 1934, Tunis, Tunisie</Card.Title>
        <Card.Link href="https://www.google.fr/maps/place/Rue+du+2+Mars+1934,+Tunis,+Tunisie/@36.7972027,10.1671695,19z/data=!3m1!4b1!4m5!3m4!1s0x12fd338ad457de97:0x93a2454f43f67cbe!8m2!3d36.7971807!4d10.1677224">
          <img src="/pin.jpg" width="20" alt="Address link" />
        </Card.Link>
      </Card.Body>
    </Card>
  );
}
