import fetchRepos, { ROOT_URL as GITHUB_URL, getReposUrl }  from '~/src/github';

console.log(GITHUB_URL);

fetchRepos()
  .then((repos) => console.log(repos));
