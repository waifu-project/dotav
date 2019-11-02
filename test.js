// the api test

const dotAv = require('.')

// get all sites
dotAv.getAll().then(r=> {
  // console.log(r)
})

// 国内不被墙的网站
dotAv.getChina().then(r=> {
  // console.log(r)
})

// get free sites
dotAv.getFree().then(r=> {
  // console.log(r)
})

// random get site
dotAv.getRandom().then(r=> {
  console.log(r)
})