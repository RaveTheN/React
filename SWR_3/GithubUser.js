import { useGithubUser } from "./useGithubUser";

export function GithubUser({ username }) {
  const { data, onFetchUser } = useGithubUser(username);

  function handleGetUserData() {
    onFetchUser();
  }
  return (
    <div>
      <button onClick={handleGetUserData}>Load user data</button>
      {data && <h1>{data.name}</h1>}
    </div>
  );
}
