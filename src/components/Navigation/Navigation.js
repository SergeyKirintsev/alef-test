import './Navigation.css';
import {NavLink} from "react-router-dom";

function Navigation() {
  return (
    <nav className="navigation">
        <NavLink
          to="/"
          className="navigation__link"
          activeClassName="navigation__link_selected"
        >
          Форма
        </NavLink>
        <NavLink
          to="/preview"
          className="navigation__link"
          activeClassName="navigation__link_selected"
        >
          Превью
        </NavLink>
    </nav>
  );
}

export default Navigation;
