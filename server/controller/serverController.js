const { Apod } = require('../../database/databaseModel/photomodel')
const db = require('../../database/db')

module.exports = {
  postApodDB: function (req, res) {
    console.log('req.body is @@@@@', req.body)
    Apod.create({
      date: req.body.date,
      explanation: req.body.explanation,
      title: req.body.title,
      url: req.body.url,
    })
    .then((data)=>{
      res.status(201).send(data)
    })
  },

  // getApodDB : function(req, res){
  //   apodModel.findOne({

  //   })
  //   .then()
  // }
}