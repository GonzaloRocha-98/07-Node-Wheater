const {Router} = require('express');
const {
    cities
    } = require('../controllers/weathers');
const router = Router();

router.get('/cities/:city', cities);

module.exports = router;