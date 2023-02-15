import { useState } from "react";

export function Login() {
  const [data, setData] = useState({
    username: "",
    password: "",
    remember: false,
  });

  function handleInputChange(event) {
    const { name, type, value, checked } = event.target;

    setData((data) => {
      return {
        ...data,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function onLogin() {
    console.log(JSON.stringify(data));
  }
  return (
    <div>
      <h1>Login</h1>
      <div>
        <button disabled={!data.username || !data.password} onClick={onLogin}>
          Login
        </button>
      </div>
      <div>
        <input
          onChange={handleInputChange}
          value={data.username}
          name="username"
        />
        <input
          onChange={handleInputChange}
          type="password"
          value={data.password}
          name="password"
        />
        <input
          onChange={handleInputChange}
          checked={data.remember}
          type="checkbox"
          name="remember"
        />
      </div>
    </div>
  );
}
