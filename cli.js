#!/usr/bin/env node

const dotAV = require('./dotAv')
const random = require('random-int')
const clear = require('clear')
const createRandom = async ()=> dotAV[random(0, dotAV.length)]
const flex = item=> {
  delete item.logo
  delete item.favicon
  delete item.lang
  delete item.types
  return item
}
const cliHelp = `
 fff: 一个查看车牌的小工具 🔨 

 $ Usage

   fff cat random // 随机查看车站

   fff cat all    // 查看全部车站

 如果你觉得不错的, 可以去给我 star 支持

   > 🤚  http://github.com/d1y/dotAv
`
;(async ()=> {
  let args = process.argv
  if (args.length <= 2) {
    console.log(cliHelp)
    return false
  }
  clear()
  args.splice(0, 2)
  const [ type, options ] = args
  if (type == 'cat') {
    if (options === 'random') {
      let random = await createRandom()
      console.log(flex(random))
    } else if (options === 'all') {
      dotAV.forEach((item, index)=> {
        const backSite = Array.isArray(
          item.back_site
        ) && item.back_site.length >= 1 ? ' | ' + item.back_site[0] : ''
        console.log('🚚  ', item.name+': ', item.site, backSite)
      })
    }
  }
})();