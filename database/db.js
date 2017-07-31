const sequelize = require('sequelize')
const url = 'postgres://ppyhdqlk:ebRg9_I94A93cKYJ8iqmKLG3wnKv_lxS@babar.elephantsql.com:5432/ppyhdqlk'

const db = new sequelize(url, {
  dialect: 'postgres',
  timestamps: false
})

module.exports = db;