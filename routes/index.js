const express = require('express');
const router = express.Router();
const { getAllJobs, getJobs } = require('./../api');

/* GET home page. */
router.get('/', function (req, res, next) {
  getAllJobs()
    .then((jobs) => {
      res.render('index', { title: 'Github Jobs', jobs });
    })
    .catch((err) => next(err));
});

/* POST home page */
router.post('/', (req, res, next) => {
  getJobs(req.body)
    .then((jobs) => {
      res.render('index', { title: 'Job Listings | Github Jobs', jobs });
    })
    .catch((err) => next(err));
});

module.exports = router;
