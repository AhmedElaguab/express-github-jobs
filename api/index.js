const axios = require('axios').default;

async function getAllJobs() {
  return axios.get('https://jobs.github.com/positions.json').then((res) => {
    return res.data;
  });
}

module.exports = { getAllJobs };
