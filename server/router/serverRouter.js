const router = require('express').Router();
const apodController = require('../controller/serverController')

router.route('/apods/imports')
  .post(apodController.postApodDB)

router.route('/apods/:date')
  // .get(apodController.getApodDB) 
  .get(apodController.getAllApods)
  
module.exports = router;