const express = require('express');
const router = express.Router();

router.get('/', async (req, res, next) => {

  res.render('index', { title: 'nunjucks' });
});

module.exports = router;