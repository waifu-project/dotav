const dotAv = require('./dotAv')
const randomInt = require('random-int')
const createRandom = async ()=> dotAv[randomInt(0, dotAv.length)]

/*
** the api function return <Promise>
** View an instance in `test.js`
*/
module.exports = {
  getAll: async ()=> dotAv,
  getFree: async ()=> dotAv.filter(item=> item.isFree),
  getChina: async ()=> dotAv.filter(item=> !item.blocked),
  getRandom: async ()=> createRandom()
}