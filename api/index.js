const axios = require('axios').default;

const BASE_URL = 'https://jobs.github.com/positions.json';

async function getAllJobs() {
  return axios.get(BASE_URL).then((res) => res.data);
}

async function getJobs(params) {
  return axios.get(BASE_URL, { params }).then((res) => res.data);
}

async function getJobById(jobId) {
  return axios
    .get(`https://jobs.github.com/positions/${jobId}.json`)
    .then((res) => res.data);
}

module.exports = { getAllJobs, getJobs, getJobById };
