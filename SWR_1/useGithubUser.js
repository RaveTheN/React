import useSWR from "swr";

export function useGithubUser(username) {
  const { data } = useSWR(`https://api.github.com/users/${username}`);

  return { data };
}
