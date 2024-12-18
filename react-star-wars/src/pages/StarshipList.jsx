import { useState, useEffect } from "react";
import ListDisplay from "../components/ListDisplay";

export default function StarshipList() {
  const [starships, setStarships] = useState({}); // multiple ships
  const [starship, setStarship] = useState({}); // single ship

  let url = "https://swapi.py4e.com/api/starships/";

  const getStarships = async (url) => {
    console.log(url);
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log("entering set");
      setStarships(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getStarships(url);
  }, []);

  return (
    <>
      <h1>Starship List</h1>
      <ListDisplay starshipList={starships} getStarships={getStarships} />
    </>
  );
}
