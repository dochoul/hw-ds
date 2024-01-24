import { Link, NavLink } from 'react-router-dom';

export default function Aside() {
  return (
    <aside id="aside">
      <section>
        <h3 className="category">Foundation</h3>
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
        <h3 className="category">Components</h3>
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
            <NavLink to="/buttons">Dropdown</NavLink>
          </li>
          <li>
            <NavLink to="/buttons">Input</NavLink>
          </li>
          <li>
            <NavLink to="/buttons">List</NavLink>
          </li>
          <li>
            <NavLink to="/buttons">Loading</NavLink>
          </li>
          <li>
            <NavLink to="/buttons">Pagination</NavLink>
          </li>
          <li>
            <NavLink to="/buttons">Progress</NavLink>
          </li>
          <li>
            <NavLink to="/buttons">Radio</NavLink>
          </li>
          <li>
            <NavLink to="/buttons">Select</NavLink>
          </li>
          <li>
            <NavLink to="/buttons">Tab</NavLink>
          </li>
          <li>
            <NavLink to="/buttons">Tag</NavLink>
          </li>
          <li>
            <NavLink to="/buttons">TimePicker</NavLink>
          </li>
          <li>
            <NavLink to="/buttons">Toast</NavLink>
          </li>
          <li>
            <NavLink to="/buttons">Toggle</NavLink>
          </li>
          <li>
            <NavLink to="/buttons">Tooltip</NavLink>
          </li>
          <li>
            <NavLink to="/buttons">Transfer</NavLink>
          </li>
          <li>
            <NavLink to="/buttons">Table</NavLink>
          </li>
        </ul>
      </section>
    </aside>
  );
}
