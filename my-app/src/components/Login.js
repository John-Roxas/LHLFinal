import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRectangleXmark } from "@fortawesome/free-solid-svg-icons";
import "./Login.css";

function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showLoginPopup, setShowLoginPopup] = useState(false);

  //Rendering login button function
  // const renderLoginButton = () => {
  //   if (isLoggedIn) {
  //     return null;
  //   } else {
  //     return (
  //       <button className="login-button" onClick={handleLoginClick}>
  //         Login
  //       </button>
  //     );
  //   }
  // };

  const handleLoginClick = () => {
    setShowLoginPopup(true);
  };

  const closeLoginPopup = () => {
    setShowLoginPopup(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.loginData(username, password);
    setShowLoginPopup(false);
  };
  return (
    <div>
      <div className="login-container">
        <button className="login-button" onClick={handleLoginClick}>
          Login
        </button>
        {showLoginPopup && (
          <>
            <div className="overlay" onClick={closeLoginPopup} />
            <div className="login-popup">
              <form className="login-form" onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
                <button type="submit">Submit</button>
              </form>
              <button className="close-button" onClick={closeLoginPopup}>
                <FontAwesomeIcon icon={faRectangleXmark} />
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Login;
