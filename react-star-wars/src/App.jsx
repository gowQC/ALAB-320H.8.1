import { Route, Routes } from "react-router";
import Nav from "./components/Nav";
import Welcome from "./pages/Welcome";
import StarshipList from "./pages/StarshipList";
import StarshipShow from "./pages/StarshipShow";
import "./App.css";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/starships" element={<StarshipList />} />
        {/* <Route path="/starships/:name" element={<StarshipShow />} /> */}
      </Routes>
    </>
  );
}

export default App;
