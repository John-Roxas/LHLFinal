import { useState } from "react";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Username", username);
    console.log("Password", password);
  };

  return (
    <div>
      <h2>Login</h2>
      <div>
        <label>Username</label>
        <input
          type="text"
          id="username"
          value={username}
          placeholder="Enter Username"
          onChange={(event) => setUsername(event.target.value)}
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          id="password"
          value={password}
          placeholder="Enter Password"
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default LoginForm;
