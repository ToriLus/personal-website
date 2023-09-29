//SIDEBAR INDEX//
import { Link, NavLink } from "react-router-dom";
import "./index.scss";
import LogoS from "../../assets/images/logo-s.png";
import LogoSubtitle from "../../assets/images/logo_sub.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCat,
  faEnvelope,
  faHome,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faGitlab,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Sidebar = () => {
  return (
    <>
      <div className="nav-bar">
        <Link className="logo" to="/">
          <img src={LogoS} alt="logo" />
          <img className="sub-logo" src={LogoSubtitle} alt="slobodan" />
        </Link>
        <nav>
          <NavLink exact="true" activeclassname="active" to="/">
            <FontAwesomeIcon icon={faHome} color="#d57fdb" />
          </NavLink>
          <NavLink
            exact="true"
            activeclassname="active"
            className="about-link"
            to="/about"
          >
            <FontAwesomeIcon icon={faUser} color="#d57fdb" />
          </NavLink>
          <NavLink
            exact="true"
            activeclassname="active"
            className="contact-link"
            to="/contact"
          >
            <FontAwesomeIcon icon={faEnvelope} color="#d57fdb" />
          </NavLink>
          <NavLink
            exact="true"
            activeclassname="active"
            className="cats-link"
            to="/cats"
          >
            <FontAwesomeIcon icon={faCat} color="#d57fdb" />
          </NavLink>
        </nav>
        <ul>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/Tori_lusz"
            >
              <FontAwesomeIcon
                icon={faTwitter}
                color="#d57fdb"
              ></FontAwesomeIcon>
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/ToriLus"
            >
              <FontAwesomeIcon
                icon={faGithub}
                color="#d57fdb"
              ></FontAwesomeIcon>
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://gitlab.com/ToriLuszczek"
            >
              <FontAwesomeIcon
                icon={faGitlab}
                color="#d57fdb"
              ></FontAwesomeIcon>
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/wiktoria-luszczek/"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                color="#d57fdb"
              ></FontAwesomeIcon>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
