import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header id="header">
      <h1 className="logo">
        <Link to="/">
          <img
            src="https://www.hiworks.com/static/temp_images/common/logo-blue.svg"
            alt=""
          />
        </Link>
      </h1>
      <nav className="gnb">
        <ul className="gnb-nav">
          <li>
            <Link to="/layout">Foundation</Link>
          </li>
          <li>
            <Link to="/badge">Components</Link>
          </li>
          <li>
            <Link to="/">Templates</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
