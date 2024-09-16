import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { routes } from "../../../js/setting";
import { register } from "../../../api/auth";
import { setAuth } from "../../../js/setting";

function Register() {
  const navigator = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [checked, setChecked] = useState(false);
  const [id, setId] = useState("");

  const [error, setError] = useState({
    username: "",
    password: "",
    checked: "",
  });

  function validate(e) {
    const localError = { username: "", password: "", checked: "" };
    e.preventDefault();

    if (username.trim().length == 0) {
      localError.username = "The username length can not be zero";
    } else if (password.trim().length == 0) {
      localError.password = "The password length can not be zero";
    } else if (username.trim().length < 3) {
      localError.username = "Username minmum Length 3";
    } else if (password.length < 8) {
      localError.password = "Password minnum Length 8";
    } else if (password !== confirmPassword) {
      localError.password = "password does not match";
    } else if (!checked) {
      localError.checked = "Must Check the box";
    } else if (register({ id: id, username: username, password: password })) {
      setUsername("");
      setPassword("");
      setId("");
      setConfirmPassword("");
      setChecked(false);
      setAuth(true);
      navigator(routes.App.quests);
    }
    setError(localError);
  }

  return (
    <>
      <div className="jumbotron bg-transparent mb-0 pt-3 radius-0">
        <div className="container">
          <div className="row">
            <div className="col-xl-10">
              <h1 className="display-1 bold color_white content__title">
                LAKSHYA CTF<span className="vim-caret">&nbsp;</span>
              </h1>
              <p className="text-grey text-spacey hackerFont lead mb-5">
                Join the community and be part of the future of the information
                security industry.
              </p>
              <div className="row  hackerFont">
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      onChange={(e) => setId(e.target.value)}
                      type="text"
                      className="form-control"
                      id="reciept_id"
                      placeholder="RecieptId(ex. EINC-5e5a93e4318db)"
                      value={id}
                    />
                    <small
                      id="reciept_id_help"
                      className="form-text text-muted"
                    >
                      Don't have reciept id? Register <a href="#">here</a>
                    </small>
                  </div>
                  <div className="form-group">
                    <input
                      onChange={(e) => setUsername(e.target.value)}
                      type="text"
                      className="form-control"
                      id="username"
                      placeholder="Username"
                      value={username}
                    />
                    <div className="form-text text-danger">
                      {error.username}
                    </div>
                  </div>
                  <div className="form-group">
                    <input
                      onChange={(e) => setPassword(e.target.value)}
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="New Password"
                      value={password}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      type="password"
                      className="form-control"
                      id="confirm_password"
                      placeholder="Confirm Password"
                      value={confirmPassword}
                    />
                    <div className="form-text text-danger">
                      {error.password}
                    </div>
                    <small id="passHelp" className="form-text text-muted">
                      Make sure nobody's behind you
                    </small>
                  </div>
                  <div className="custom-control custom-checkbox my-4">
                    <input
                      onChange={() => setChecked(!checked)}
                      type="checkbox"
                      className="custom-control-input"
                      id="solemnly-swear"
                      checked={checked}
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="solemnly-swear"
                    >
                      I solemnly swear that I am up to no good.
                    </label>
                    <div className="form-text text-danger">{error.checked}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <button
                onClick={(e) => validate(e)}
                className="btn btn-outline-danger btn-shadow px-3 my-2 ml-0 ml-sm-1 text-left typewriter"
              >
                <h4>Register</h4>
              </button>
              <small id="registerHelp" className="mt-2 form-text text-muted">
                Already Registered?{" "}
                <a
                  href="#"
                  onClick={() => navigator(routes.Authentication.login)}
                >
                  Login here
                </a>
              </small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
