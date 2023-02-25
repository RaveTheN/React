import useSWR from "swr";

export function useGithubUser(username) {
  const { data, mutate } = useSWR(
    username && `https://api.github.com/users/${username}`
  );

  const fetchGithubuser = () => {
    mutate();
  };
  return { data, onFetchUser: fetchGithubuser };
}
