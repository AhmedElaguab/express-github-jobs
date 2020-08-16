const axios = require('axios').default;

const BASE_URL = 'https://jobs.github.com/positions.json';

async function getAllJobs() {
  return axios.get(BASE_URL).then((res) => res.data);
}

async function getJobs(params) {
  return axios.get(BASE_URL, { params }).then((resp) => resp.data);
}

module.exports = { getAllJobs, getJobs };
