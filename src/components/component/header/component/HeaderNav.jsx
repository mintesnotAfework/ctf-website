import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


function HeaderNav() {
  const location = useLocation();
  const navigator = useNavigate();
  const [authenticated, setAuthenticated] = useState(false);

  function navigate(event) {
    if (event.target.textContent == "Home") {
      navigator("/");
    } else if (event.target.textContent == "About") {
      navigator("/information/about");
    } else if (event.target.textContent == "Hackerboard") {
      navigator("/app/hackerboard");
    } else if (event.target.textContent == "Login") {
      navigator("/authentication/login");
    } else if (event.target.textContent == "Register") {
      navigator("/authentication/register");
    } else if (event.target.textContent == "Logout") {
      navigator("/authentication/logout");
    } else if (event.target.textContent == "Challenges") {
      navigator("/app/quest");
    }
  }

  function AuthenticatedHeader() {
    return (
      <>
        <a
          onClick={(e) => navigate(e)}
          className={
            NavLocation("Challenges")
              ? "p-3 text-decoration-none text-white bold"
              : "p-3 text-decoration-none text-light bold"
          }
        >
          Challenges
        </a>
        <a
          onClick={(e) => navigate(e)}
          className={
            NavLocation("Logout")
              ? "p-3 text-decoration-none text-white bold"
              : "p-3 text-decoration-none text-light bold"
          }
        >
          Logout
        </a>
      </>
    );
  }

  function UnauthenticatedHeader() {
    return (
      <>
        <a
          onClick={(e) => navigate(e)}
          className={
            NavLocation("Login")
              ? "p-3 text-decoration-none text-white bold"
              : "p-3 text-decoration-none text-light bold"
          }
        >
          Login
        </a>
        <a
          onClick={(e) => navigate(e)}
          className={
            NavLocation("Register")
              ? "p-3 text-decoration-none text-white bold"
              : "p-3 text-decoration-none text-light bold"
          }
        >
          Register
        </a>
      </>
    );
  }

  function NavLocation(name) {
    if (name == "Hackerboard" && location.pathname.endsWith("hackerboard")) {
      return true;
    } else if (name == "Home" && location.pathname == "/") {
      return true;
    } else if (name == "Login" && location.pathname == "login") {
      return true;
    } else if (name == "Register" && location.pathname.endsWith("register")) {
      return true;
    } else if (name == "About" && location.pathname.endsWith("about")) {
      return true;
    } else if (name == "Challenges" && location.pathname.endsWith("quest")) {
      return true;
    }
    return false;
  }
  return (
    <>
      <div className="navbar-dark text-white">
        <div className="container">
          <nav className="navbar px-0 navbar-expand-lg navbar-dark">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a
                  onClick={() => navigator("/information/about")}
                  className="pl-md-0 p-3 text-decoration-none text-light"
                >
                  <h3 className="bold">
                    <span className="color_danger">LAKSHYA</span>
                    <span className="color_white">CTF</span>
                  </h3>
                </a>
              </div>
              <div className="navbar-nav ml-auto">
                <a
                  onClick={(e) => navigate(e)}
                  className={
                    NavLocation("Home")
                      ? "p-3 text-decoration-none text-white bold"
                      : "p-3 text-decoration-none text-light bold"
                  }
                >
                  Home
                </a>
                <a
                  className="p-3 text-decoration-none text-white bold navbar-dark"
                >
                  <DropdownButton variant="dark" id="dropdown-item-button" title="Dropdown button">
                    <Dropdown.Item onClick={() => navigator("/information/about")} className="text-white" as="button">About</Dropdown.Item>
                    <Dropdown.Item onClick={() => navigator("/information/feedback")} className="text-white" as="button">Feedback</Dropdown.Item>
                    <Dropdown.Item onClick={() => navigator("/information/instruction")} className="text-white" as="button">Instructions</Dropdown.Item>
                  </DropdownButton>
                </a>
                <a
                  onClick={(e) => navigate(e)}
                  className={
                    NavLocation("Hackerboard")
                      ? "p-3 text-decoration-none text-white bold"
                      : "p-3 text-decoration-none text-light bold"
                  }
                >
                  Hackerboard
                </a>
                {authenticated?<AuthenticatedHeader /> : <UnauthenticatedHeader />}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default HeaderNav;