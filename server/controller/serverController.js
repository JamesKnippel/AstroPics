const { Apod } = require('../../database/databaseModel/photomodel')
const db = require('../../database/db')

module.exports = {
  postApodDB: function (req, res) {
    console.log('req.body is @@@@@', req.body)
    Apod.create({
      year: req.body.data.date.substring(0, 4),
      month: req.body.data.date.substring(6, 7),
      day: req.body.data.date.substring(9, 10),
      explanation: req.body.data.explanation,
      title: req.body.data.title,
      url: req.body.data.url,
    })
      .then((data) => {
        res.status(201).send(data)
      })
  },

  // getApodDB: function (req, res) {
  //   console.log(req.params, 'are paraaaaaams')
  //   Apod.findOne({
  //     where: {
  //       year: req.params.date.substring(0, 4),
  //       month: req.params.date.substring(6, 7),
  //       day: req.params.date.substring(9, 10),
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