const router = require('express').Router();
const controller = require('./controller');

router.use('/api/healthz', (req, res) => {
    res.status(200).send("I'm fine.");
});

router.get('/api/analysis', controller.getAnalysis);

router.get('/api/news', controller.getNews);


module.exports = router;
