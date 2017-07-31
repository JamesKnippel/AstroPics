const { Apod } = require('../../database/databaseModel/photomodel')
const db = require('../../database/db')

module.exports = {
  postApodDB: function (req, res) {
    console.log('req.body is @@@@@', req.body)
    Apod.create({
      year: req.body.date.substring(0, 4),
      month: req.body.date.substring(6, 7),
      day: req.body.date.substring(9, 10),
      explanation: req.body.explanation,
      title: req.body.title,
      url: req.body.url,
    })
      .then((data) => {
        res.status(201).send(data)
      })
  },

  // getApodDB: function (req, res) {
  //   Apod.findOne({
  //     where: {
  //       year: req.body.date.substring(0, 4),
  //       month: req.body.date.substring(6, 7),
  //       day: req.body.date.substring(9, 10),
  //     }
  //   })
  //     .then((data)=>{
  //       res.status(200).send(data)
  //     })
  // },

  getAllApods: function(req, res){
    Apod.findAll({})
    .then((data)=>{
      res.status(200).send(data)
    })
  }
}