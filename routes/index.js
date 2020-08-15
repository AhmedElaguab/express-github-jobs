const express = require('express');
const router = express.Router();
const { getAllJobs } = require('./../api');

/* GET home page. */
router.get('/', function (req, res, next) {
  getAllJobs()
    .then((jobs) => {
      res.render('index', { title: 'Github Jobs', jobs });
    })
    .catch((err) => next(err));
});

module.exports = router;
