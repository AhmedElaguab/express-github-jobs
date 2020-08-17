const express = require('express');
const router = express.Router();
const { getJobById } = require('./../api');

router.get('/:jobId', (req, res, next) => {
  getJobById(req.params.jobId)
    .then((job) => {
      console.log(job);

      const title = `${job.title} | Github Jobs`;
      res.render('job', { title, job });
    })
    .catch((err) => next(err));
});

module.exports = router;
