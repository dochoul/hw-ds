import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header id="header">
      <h1 className="logo">
        <Link to="/">
          <img src="https://www.hiworks.com/static/temp_images/common/logo-blue.svg" alt="" />
        </Link>
      </h1>
      <nav className="gnb">
        <ul className="gnb-nav">
          <li>
            <h2>
              <Link to="/foundation">Foundation</Link>
            </h2>
          </li>
          <li>
            <h2>
              <Link to="/components">Components</Link>
            </h2>
          </li>
          <li>
            <h2>
              <Link to="/templates">Templates</Link>
            </h2>
          </li>
        </ul>
      </nav>
    </header>
  );
}
