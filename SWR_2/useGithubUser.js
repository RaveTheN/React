import useSWR from "swr";

export function useGithubUser(username) {
  const { data } = useSWR(
    username && `https://api.github.com/users/${username}`
  );

  return { data };
}
