![](https://i.loli.net/2019/11/03/EJgZx3K9suYiPqj.png)

## dotAv

This library contains 18+🔞 content, please leave the teenager under 18 years old consciously🙅‍♂️

**行车速度80迈切莫忘记安全带**

![](https://i.loli.net/2019/11/03/tobajIdcgqRiyM5.png)

拿起你的小手手🤚, 给我一个 `star` 吧😊

Pick up your little handcuffs, give me a `star` 😊

## Install

```bash

npm i --save dotav

```

## Usage

```js
const dotAV = require('dotav')

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

```

Please check [test.js](./test.js)

## CLI

You need to install `golbal`

```bash

npm i -g dotav

```

use

```bash

# print rando site
fff cat random

# print all sites
fff cat all

```