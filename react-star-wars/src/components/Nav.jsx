import { Link } from "react-router";

export default function Nav() {
  return (
    <div className="nav">
      <Link to="/">
        <div>Welcome</div>
      </Link>
      <Link to="/starships">
        <div>Find a Starship!</div>
      </Link>
    </div>
  );
}
