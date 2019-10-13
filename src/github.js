import request from 'superagent';

export const ROOT_URL = 'https://api.github.com';
export const getReposUrl = (company) => `/orgs/${company}/repos`;

const fetchRepos = () => (
  request
  .get(`${ROOT_URL}${getReposUrl('facebook')}`)
  .set('User-Agent', 'React')
  .then((response) => response.body.map((repo) => repo.name))
  .catch((error) => console.log(error))
);

export default fetchRepos;
