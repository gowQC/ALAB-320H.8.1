import React from "react";
import { Link } from "react-router";

export default function ShipCard({ name, cost, url }) {
  return (
    <div className="shipcard">
      <Link to={url} target="_blank" style={{ padding: "5px" }}>
        <h4>{name}</h4>
      </Link>
      <h5>Cost in credits: {cost}</h5>
    </div>
  );
}
