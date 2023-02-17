import { useLogin } from "./useLogin";

export function App() {
  const { username, password, userInfo, onLogin, onValueChange } = useLogin();

  return (
    <div>
      <input name="username" value={username} onChange={onValueChange}/>
      <input type="password" name="password" value={password} onChange={onValueChange}/>
      <button disabled={!username || !password} onClick={onLogin}>Login</button>
      <h3>{userInfo}</h3>
    </div>
  );
}
