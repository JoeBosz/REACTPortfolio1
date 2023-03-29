import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function NavBar({ handleClick }) {
  return (
    <nav>
      <ul className="mt-5 flex flex-row justify-center gap-5 uppercase text-darkpink sm:text-xl">
      <Link to="/">
        <li>
          <a href="" onClick={handleClick}>
            Home
          </a>
        </li>
        </Link>
        <Link to="/home">
        <li>
          <a href="" onClick={handleClick}>
            About
          </a>
        </li>
        </Link>
        <Link to="/portfolio">
        <li>
          <a href="" onClick={handleClick}>
            Portfolio
          </a>
        </li>
        </Link>
        {/* <Link to="/resume">
        <li>
          <a href="" onClick={handleClick}>
            Resume
          </a>
        </li>
        </Link>
        <Link to="/contact">
        <li>
          <a href="" onClick={handleClick}>
            Contact
          </a>
        </li>
        </Link> */}
      </ul>
    </nav>
  );
}

NavBar.propTypes = {
  handleClick: PropTypes.func.isRequired,
};