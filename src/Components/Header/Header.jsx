import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <div className="header-wrap">
      <nav>
        <div className="logo">
          <h1>
            <Link to="">Brand</Link>
          </h1>
        </div>
        <ul>
          <li>
            <Link to="post">Posts</Link>
          </li>
          <li>
            <Link to="photos">Photos</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
