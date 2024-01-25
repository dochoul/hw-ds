import { NavLink } from "react-router-dom";

export default function Aside() {
  return (
    <aside id="aside">
      <section>
        <p className="category">Foundation</p>
        <ul className="aside-nav">
          <li>
            <NavLink to="/layout">Layout</NavLink>
          </li>
          <li>
            <NavLink to="/color">Color</NavLink>
          </li>
          <li>
            <NavLink to="/typography">Typography</NavLink>
          </li>
          <li>
            <NavLink to="/icongraphy">Icongraphy</NavLink>
          </li>
        </ul>
      </section>
      <section>
        <p className="category">Components</p>
        <ul className="aside-nav">
          <li>
            <NavLink to="/badge">Badge</NavLink>
          </li>
          <li>
            <NavLink to="/banner">Banner</NavLink>
          </li>
          <li>
            <NavLink to="/buttons">Button</NavLink>
          </li>
          <li>
            <NavLink to="/typography">Carousel</NavLink>
          </li>
          <li>
            <NavLink to="/checkbox">Checkbox</NavLink>
          </li>
          <li>
            <NavLink to="/datePicker">DatePicker</NavLink>
          </li>
          <li>
            <NavLink to="/modal">Dialog(Modal)</NavLink>
          </li>
          <li>
            <NavLink to="/dropdown">Dropdown</NavLink>
          </li>
          <li>
            <NavLink to="/input">Input</NavLink>
          </li>
          <li>
            <NavLink to="/list">List</NavLink>
          </li>
          <li>
            <NavLink to="/loading">Loading</NavLink>
          </li>
          <li>
            <NavLink to="/pagination">Pagination</NavLink>
          </li>
          <li>
            <NavLink to="/progress">Progress</NavLink>
          </li>
          <li>
            <NavLink to="/radio">Radio</NavLink>
          </li>
          <li>
            <NavLink to="/select">Select</NavLink>
          </li>
          <li>
            <NavLink to="/tab">Tab</NavLink>
          </li>
          <li>
            <NavLink to="/tag">Tag</NavLink>
          </li>
          <li>
            <NavLink to="/timePicker">TimePicker</NavLink>
          </li>
          <li>
            <NavLink to="/toast">Toast</NavLink>
          </li>
          <li>
            <NavLink to="/toggle">Toggle</NavLink>
          </li>
          <li>
            <NavLink to="/tooltip">Tooltip</NavLink>
          </li>
          <li>
            <NavLink to="/transfer">Transfer</NavLink>
          </li>
          <li>
            <NavLink to="/table">Table</NavLink>
          </li>
        </ul>
      </section>
    </aside>
  );
}
