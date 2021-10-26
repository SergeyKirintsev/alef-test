import {Link} from "react-router-dom";
import './Logo.css';
import logo from '../../images/logo.jpg';

function Logo() {
  return (
    <Link to="/">
      <img src={logo} className="logo" alt="logo ALEF" />
    </Link>
  );
}

export default Logo;
