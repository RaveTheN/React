import { useState } from "react";

export function useLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userInfo, setUserInfo] = useState ("")

  function handleInputChange(event) {
    const value = event.target.value
    const name = event.target.name

    name === 'username'?
    setUsername((username) => username = value)
    :
    setPassword((password) => password = value)
  }
  

  function handleUserInfo() {
    setUserInfo((userInfo) => userInfo=`username: ${username} password: ${password}`)
  }

  return {
    username: username,
    password: password,
    userInfo: userInfo,
    onLogin: handleUserInfo,
    onValueChange: handleInputChange,
  };
}
