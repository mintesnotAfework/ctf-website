import { useNavigate } from "react-router-dom";
import { routes, getAuth, setAuth } from "../../../js/setting";
import { useState } from "react";
import { login } from "../../../api/auth";

function Login() {
  const navigator = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({ username: "", password: "" });

  function validate(e) {
    const localError = { username: "", password: "" };
    e.preventDefault();

    if (username.trim().length == 0) {
      localError.username = "The username length can not be zero";
    }
    else if (password.trim().length == 0) {
        localError.password = "The password length can not be zero";
      }
     else if (username.trim().length < 3) {
      localError.username = "Username minmum Length 3";
    } 
    else if (login({ username: username, password: password })) {
        setUsername("");
        setPassword("");
        setAuth(true);
        console.log(routes.App.quests);
        navigator(routes.App.quests);
    }
    setError(localError);
  }
  return (
    <>
      <div className="jumbotron bg-transparent mb-0 pt-3 radius-0">
        <div className="container">
          <div className="row">
            <div className="col-xl-8">
              <h1 className="display-1 bold color_white content__title">
                LAKSHYA CTF<span className="vim-caret">&nbsp;</span>
              </h1>
              <p className="text-grey text-spacey hackerFont lead mb-5">
                Type your credentials to conquer the world
              </p>
              <div className="row hackerFont">
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      onChange={(e) => setUsername(e.target.value)}
                      type="text"
                      className="form-control"
                      id="team_name"
                      placeholder="Team name"
                      value={username}
                    />
                    <small id="passHelp" className="form-text text-muted">
                        {error.username}
                    </small>
                    </div>
                  <div className="form-group">
                    <input
                      onChange={(e) => setPassword(e.target.value)}
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Password"
                      value={password}
                    />
                    <small id="passHelp" className="form-text text-muted">
                    {error.password}
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-8">
              <button
                onClick={(e) => validate(e)}
                className="btn btn-outline-danger btn-shadow px-3 my-2 ml-0 ml-sm-1 text-left typewriter"
              >
                <h4>Login</h4>
              </button>
              <small id="registerHelp" className="mt-3 form-text text-muted">
                Not Registered?{" "}
                <a href="#" onClick={() => navigator(routes.Authentication.register)}>
                  Register here
                </a>
              </small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
