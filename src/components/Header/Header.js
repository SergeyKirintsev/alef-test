import './Header.css';

import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";

function Header() {
  return (
      <header className="header">
        <div className="header__container">
          <Logo />
          <Navigation/>
          <div></div>
        </div>
      </header>
  );
}

export default Header;
