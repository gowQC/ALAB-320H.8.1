import React from "react";
import ShipCard from "../components/ShipCard";

export default function ListDisplay({ starshipList, getStarships }) {
  return (
    <div>
      <ul className="shipcardGrid">
        {starshipList.results &&
          starshipList.results.map((starship) => {
            return (
              <li
                style={{ backgroundColor: "hsl(350, 0%, 20%", margin: "10px" }}
                key={starship.name}
              >
                <ShipCard
                  name={starship.name}
                  cost={starship.cost_in_credits}
                  url={starship.url}
                />
              </li>
            );
          })}
      </ul>
      {starshipList.previous ? (
        <button onClick={() => getStarships(starshipList.previous)}>
          Back
        </button>
      ) : (
        <></>
      )}{" "}
      {starshipList.next ? (
        <button onClick={() => getStarships(starshipList.next)}>Next</button>
      ) : (
        <></>
      )}
    </div>
  );
}
