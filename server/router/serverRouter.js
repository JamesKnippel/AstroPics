const router = require('express').Router();
const apodController = require('../controller/serverController')

router.route('/imports')
  .post(apodController.postApodDB)
  
module.exports = router;