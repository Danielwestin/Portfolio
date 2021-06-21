import NavLink from "../navlink";

export default function Header() {
  return (
    <nav className="header-nav">
      <div className="header-nav__name">
        <span>Daniel Westin.</span>
      </div>
      <ul className="header-nav__ul">
        <li className="header-nav__ul__li">
          <NavLink
            to="/"
            className="header-nav__ul__li__navlink"
            activeClassName="header-nav__ul__li__navlink--active"
            inactiveClassName="header-nav__ul__li__navlink--inactive"
          >
            Home.
          </NavLink>
        </li>
        <li className="header-nav__ul__li">
          <NavLink
            to="/experience"
            className="header-nav__ul__li__navlink"
            activeClassName="header-nav__ul__li__navlink--active"
            inactiveClassName="header-nav__ul__li__navlink--inactive"
          >
            Experience.
          </NavLink>
        </li>
        <li className="header-nav__ul__li">
          <NavLink
            to="/about"
            className="header-nav__ul__li__navlink"
            activeClassName="header-nav__ul__li__navlink--active"
            inactiveClassName="header-nav__ul__li__navlink--inactive"
          >
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
